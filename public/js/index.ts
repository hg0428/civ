import { Rectangle, Vector2, getDistance2D, isInBounds } from "./shapes.ts";
import {
	generateHeightMap,
	renderHeightMap,
	generateMap,
	World,
	Map,
} from "./land.ts";
import {
	InteractiveElements,
	InteractiveElement,
	GameEvent,
} from "./interactive.ts";
import { renderMenus } from "./menu.ts";
import { mapLayer, overlayLayer } from "./game.ts";
import { createPlayerNation, nationsRegistry } from "./nation.ts";
import { PersonVisualRegistry } from "./personVisual.ts";
import { Person } from "./people.ts";
import { actionBar } from "./actionBar.ts";
import { selectedAction, setSelectedAction, cursorType } from "./gameState.ts";
import { getTerrainHeight, initTerrainUtils } from "./terrainUtils.ts";
import { Structure, treeType } from "./structure.ts";
import { TerrainConfig } from "./config.ts";
let map: World, imageBitmap: ImageBitmap;
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
const pixelated = true;
let pixelDensity = window.devicePixelRatio;
let width = window.innerWidth * pixelDensity;
let height = window.innerHeight * pixelDensity;
const tintLevels = [
	{
		threshold: TerrainConfig.WATER_THRESHOLD,
		color: [0.5, 0.5, 1 / TerrainConfig.WATER_THRESHOLD],
	},
	{
		threshold: TerrainConfig.MOUNTAIN_THRESHOLD,
		color: [0.8, 1 / TerrainConfig.MOUNTAIN_THRESHOLD, 0.55],
	},
];
let view = {
	x: 0,
	y: 0,
	zoom: 1,
	move_speed: 1,
	zoom_speed: 1 / 1000,
	realZoom: 1,
};
let KeysPressed = new Set();
let previousTimestamp = 0;
let elapsed = 0;
let scale = 20;
// 157x100
let mapResolution = new Rectangle(157 * scale, 100 * scale);
let coordinateToMapRatio = 1;
const mapWidth = mapResolution.width * coordinateToMapRatio;
const mapHeight = mapResolution.height * coordinateToMapRatio;
let screenToMap = {
	width: 1,
	height: 1,
};
let minZoom = 1;
let maxZoom = 200;
const buttonNames = ["left", "right", "middle", "back", "forward"];
// Loading screen state
let isLoading = true;
let loadingProgress = 0;
let loadingMessage = "Generating world...";
// https://www.reddit.com/r/proceduralgeneration/comments/37azql/comment/crm6z37/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button

let gameEvent: GameEvent = {
	canvasPosition: { x: width / 2, y: width / 2 },
	mapPosition: new Vector2(0, 0),
	canvasHeight: height,
	canvasWidth: width,
	mapHeight: mapHeight,
	mapWidth: mapWidth,
	canvas: canvas,
	canvasRenderingContext2D: ctx,
	elapsed: elapsed,
	type: "mouseover",
	mouseButtons: {
		left: false,
		right: false,
		middle: false,
		back: false,
		forward: false,
	},
};
gameEvent.mapPosition = getPositionOnMap(gameEvent.canvasPosition);

class ButtonState {
	pressed: boolean;
	pressed_time: number;
	pressed_position: Vector2;
	pressed_position_map: Vector2;
	constructor() {
		this.pressed = false;
		this.pressed_time = 0;
		this.pressed_position = { x: 0, y: 0 };
		this.pressed_position_map = { x: 0, y: 0 };
	}
}
let clickState: {
	left: ButtonState;
	right: ButtonState;
	middle: ButtonState;
	back: ButtonState;
	forward: ButtonState;
} = {
	left: new ButtonState(),
	right: new ButtonState(),
	middle: new ButtonState(),
	back: new ButtonState(),
	forward: new ButtonState(),
};
let clickDistanceThreshold = 8;
let clickTimeThreshold = 250;

function drawStroked(text: string, x: number, y: number) {
	let lines = text.split("\n");
	let fontSize = 30;
	let lineHeight = fontSize + 5;
	for (let i = 0; i < lines.length; i++) {
		let line = lines[i];
		ctx.font = `${fontSize}px Sans-serif`;
		ctx.strokeStyle = "black";
		ctx.lineWidth = 5;
		ctx.strokeText(line, x, y + i * lineHeight);
		ctx.fillStyle = "white";
		ctx.fillText(line, x, y + i * lineHeight);
	}
}
function getPositionOnMap(point: Vector2) {
	let min = Math.min(screenToMap.width, screenToMap.height);
	return {
		x: view.x / min + point.x / (min * view.zoom),
		y: view.y / min + point.y / (min * view.zoom),
	};
}
function draw(elapsed: number) {
	gameEvent.elapsed = elapsed;
	if (isLoading) {
		renderLoadingScreen();
		return;
	}

	ctx.clearRect(0, 0, width, height);
	ctx.fillStyle = "lightblue";
	ctx.fillRect(0, 0, width, height);
	if (!imageBitmap) return;
	handleControls(elapsed);

	// Update all person visuals (movement, etc.)
	PersonVisualRegistry.updateAll(elapsed, gameEvent);

	// Draw the map and map elements
	ctx.save();
	try {
		view.realZoom = view.zoom * Math.min(screenToMap.width, screenToMap.height);
		ctx.translate(-view.x * view.zoom, -view.y * view.zoom);
		ctx.scale(view.realZoom, view.realZoom);

		// Draw Game map
		ctx.imageSmoothingEnabled = !pixelated;
		ctx.drawImage(imageBitmap, 0, 0, mapWidth, mapHeight);

		// Render map-based interactive elements (including people)
		for (let element of InteractiveElements) {
			if (element.display && element.isMapElement) {
				element.draw(ctx, elapsed, gameEvent);
			}
		}
		// Draw map layer
		for (let element of mapLayer) {
			element.draw(ctx, elapsed, gameEvent);
		}
	} finally {
		ctx.restore();
	}

	// Run game logic and render UI elements
	runGame(elapsed);

	// Draw action bar
	actionBar.draw(ctx);

	// Overlay
	drawStroked(
		`X: ${gameEvent.mapPosition.x.toFixed(
			0
		)}\nY: ${gameEvent.mapPosition.y.toFixed(0)}\nZoom: ${view.zoom.toFixed(
			2
		)}`,
		width - 200,
		80
	);
	// Minimap
	let minimapHeight = 300;
	let minimapWidth = minimapHeight * mapResolution.ratio;
	let minimapX = width - (minimapWidth + 25);
	let minimapY = height - (minimapHeight + 25);
	ctx.drawImage(imageBitmap, minimapX, minimapY, minimapWidth, minimapHeight);

	// Create a rectangle showing where the viewport is on the minimap.
	let viewportWidthOnMinimap =
		((width / mapWidth) * minimapWidth) / view.realZoom;
	let viewportHeightOnMinimap =
		((height / mapHeight) * minimapHeight) / view.realZoom;
	let viewportXOnMinimap =
		minimapX +
		((view.x / mapWidth) * minimapWidth) /
			Math.min(screenToMap.width, screenToMap.height);
	let viewportYOnMinimap =
		minimapY +
		((view.y / mapHeight) * minimapHeight) /
			Math.min(screenToMap.width, screenToMap.height);
	ctx.strokeStyle = "red";
	ctx.lineWidth = 0.5;
	ctx.strokeRect(
		viewportXOnMinimap,
		viewportYOnMinimap,
		viewportWidthOnMinimap,
		viewportHeightOnMinimap
	);
	// Create a gradient for the glassy effect
	let gradient = ctx.createLinearGradient(
		viewportXOnMinimap,
		viewportYOnMinimap,
		viewportXOnMinimap + viewportWidthOnMinimap,
		viewportYOnMinimap + viewportHeightOnMinimap
	);
	gradient.addColorStop(0, "rgba(255, 100, 100, 0.33)");
	gradient.addColorStop(0.5, "rgba(255, 100, 100, 0.1)");
	gradient.addColorStop(1, "rgba(255, 100, 100, 0.3)");

	// Apply the gradient fill to the viewport rectangle
	ctx.fillStyle = gradient;
	ctx.fillRect(
		viewportXOnMinimap,
		viewportYOnMinimap,
		viewportWidthOnMinimap,
		viewportHeightOnMinimap
	);
	// Draw overlay layer
	for (let element of overlayLayer) {
		element.draw(ctx, elapsed, gameEvent);
	}
	renderMenus(ctx, elapsed, gameEvent);

	// Draw cursor based on current mode
	if (cursorType === "move") {
		// Draw crosshair cursor for move mode
		const crosshairSize = 20; // Larger crosshair
		const lineWidth = 3;

		ctx.strokeStyle = "white";
		ctx.lineWidth = lineWidth;

		// Horizontal line
		ctx.beginPath();
		ctx.moveTo(
			gameEvent.canvasPosition.x - crosshairSize,
			gameEvent.canvasPosition.y
		);
		ctx.lineTo(
			gameEvent.canvasPosition.x + crosshairSize,
			gameEvent.canvasPosition.y
		);
		ctx.stroke();

		// Vertical line
		ctx.beginPath();
		ctx.moveTo(
			gameEvent.canvasPosition.x,
			gameEvent.canvasPosition.y - crosshairSize
		);
		ctx.lineTo(
			gameEvent.canvasPosition.x,
			gameEvent.canvasPosition.y + crosshairSize
		);
		ctx.stroke();

		// Add an outline to make it more visible
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;

		// Horizontal line outline
		ctx.beginPath();
		ctx.moveTo(
			gameEvent.canvasPosition.x - crosshairSize - 1,
			gameEvent.canvasPosition.y
		);
		ctx.lineTo(
			gameEvent.canvasPosition.x + crosshairSize + 1,
			gameEvent.canvasPosition.y
		);
		ctx.stroke();

		// Vertical line outline
		ctx.beginPath();
		ctx.moveTo(
			gameEvent.canvasPosition.x,
			gameEvent.canvasPosition.y - crosshairSize - 1
		);
		ctx.lineTo(
			gameEvent.canvasPosition.x,
			gameEvent.canvasPosition.y + crosshairSize + 1
		);
		ctx.stroke();
	} else {
		// Draw the original mouse cursor
		// Set the style properties
		ctx.fillStyle = "lightblue";
		ctx.strokeStyle = "black";
		ctx.lineWidth = 5;

		// Calculate the offset
		let offset = ctx.lineWidth / 2;

		// Begin the path
		ctx.beginPath();
		// Adjust the starting point by the offset
		ctx.moveTo(
			gameEvent.canvasPosition.x + offset,
			gameEvent.canvasPosition.y + offset
		); // Starting point
		ctx.lineTo(
			gameEvent.canvasPosition.x + offset,
			gameEvent.canvasPosition.y + 45 - offset
		); // Line down
		ctx.lineTo(
			gameEvent.canvasPosition.x + 15 - offset,
			gameEvent.canvasPosition.y + 30 - offset
		); // Line to the right and up
		ctx.lineTo(
			gameEvent.canvasPosition.x + 37.5 - offset,
			gameEvent.canvasPosition.y + 30 - offset
		); // Line to the right

		// Close the path to ensure a complete shape
		ctx.closePath();

		// Fill and stroke the shape
		ctx.fill();
		ctx.stroke();
	}
}
function runGame(elapsed: number) {
	// Prepare state
	gameEvent.elapsed = elapsed;

	// Update and render interactive elements (UI elements in screen space)
	for (let element of InteractiveElements) {
		if (element.display && !element.isMapElement) {
			element.draw(ctx, elapsed, gameEvent);
		}
	}

	// Render menus
	renderMenus(ctx, elapsed, gameEvent);
}
async function init() {
	isLoading = true;
	loadingProgress = 0;
	loadingMessage = "Initializing...";

	console.log("Initializing game...");

	// Initialize the player nation with a distinctive color
	const playerNation = createPlayerNation();
	playerNation.color = [0, 0.6, 0.9, 1]; // Bright blue color for better visibility
	nationsRegistry.addNation(playerNation);

	console.log("Player nation created:", playerNation);

	// Create initial people for the player - increased from 5 to 10 for better testing
	const initialPeopleCount = 15;

	console.log(`Creating ${initialPeopleCount} people...`);

	// Create people in a more organized pattern rather than completely random
	// This will place them in a semi-circle formation for easier selection
	for (let i = 0; i < initialPeopleCount; i++) {
		let x: number = 0,
			y: number = 0;
		do {
			x = Math.random() * mapWidth;
			y = Math.random() * mapHeight;
		} while (
			getTerrainHeight({ x, y }) <= TerrainConfig.WATER_THRESHOLD ||
			getTerrainHeight({ x, y }) >= TerrainConfig.MOUNTAIN_THRESHOLD
		);

		const position = { x, y };

		// Create the person and add to nation
		const person = playerNation.createPerson(position);

		// Create visual representation
		const personVisual = PersonVisualRegistry.createPersonVisual(
			person,
			playerNation
		);

		// Log the creation for debugging
		console.log(
			`Created person at position (${x.toFixed(0)}, ${y.toFixed(0)})`
		);
	}

	console.log(
		"Total people created:",
		PersonVisualRegistry.getPersonVisuals().length
	);

	// Generate a new map
	fetch("/generate-map", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			width: mapResolution.width,
			height: mapResolution.height,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			map = data.map;

			// Initialize terrain utilities with the loaded map
			initTerrainUtils(map);
			console.log("Terrain utilities initialized with map data");

			showMap(map.heightMap);

			console.log("Map loaded, game ready!");
			let initialTreeCount = 200;
			for (let i = 0; i < initialTreeCount; i++) {
				let x: number = 0,
					y: number = 0;
				do {
					x = Math.random() * mapWidth;
					y = Math.random() * mapHeight;
				} while (
					getTerrainHeight({ x, y }) <= TerrainConfig.WATER_THRESHOLD ||
					getTerrainHeight({ x, y }) >= TerrainConfig.MOUNTAIN_THRESHOLD
				);
				let tree = new Structure(treeType, {
					position: {
						x,
						y,
					},
					radius: 3,
				});
			}
			isLoading = false;
		});
}
function renderLoadingScreen() {
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, width, height);

	// Draw title
	ctx.font = "bold 40px Sans-serif";
	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText("Civilization Game", width / 2, height / 3);

	// Draw loading message
	ctx.font = "30px Sans-serif";
	ctx.fillText(loadingMessage, width / 2, height / 2);

	// Draw progress bar background
	const progressBarWidth = width * 0.6;
	const progressBarHeight = 20;
	const progressBarX = width / 2 - progressBarWidth / 2;
	const progressBarY = height / 2 + 50;

	ctx.fillStyle = "#333";
	ctx.fillRect(progressBarX, progressBarY, progressBarWidth, progressBarHeight);

	// Draw progress bar fill
	ctx.fillStyle = "#4CAF50";
	ctx.fillRect(
		progressBarX,
		progressBarY,
		progressBarWidth * (loadingProgress / 100),
		progressBarHeight
	);

	// Draw progress percentage
	ctx.font = "16px Sans-serif";
	ctx.fillStyle = "white";
	ctx.fillText(
		`${loadingProgress}%`,
		width / 2,
		progressBarY + progressBarHeight + 20
	);
}
async function frame(timestamp: number) {
	elapsed = timestamp - previousTimestamp;
	previousTimestamp = timestamp;

	draw(elapsed);
	requestAnimationFrame(frame);
}
function showMap(map: Map) {
	let imageData = renderHeightMap(
		map,
		mapResolution.width,
		mapResolution.height,
		tintLevels
	);
	createImageBitmap(imageData).then((x) => {
		imageBitmap = x;
		isLoading = false;
	});
}
function isMouseButtonPressed(buttons: number, buttonName: string) {
	// Use binary `&` with the relevant power of 2 to check if a given button is pressed
	return Boolean(buttons & (1 << buttonNames.indexOf(buttonName)));
}
function hoveringCheck(mapOnly: boolean = false) {
	gameEvent.mapPosition = getPositionOnMap(gameEvent.canvasPosition);
	InteractiveElements.forEach((element) => {
		let previousValue = element.hovering;
		if (element.isMapElement)
			element.hovering = isInBounds(gameEvent.mapPosition, element);
		else if (mapOnly) return;
		else element.hovering = isInBounds(gameEvent.canvasPosition, element);
		if (previousValue === false && element.hovering === true) {
			element.dispatchEvent(createEvent("mouseover"));
		} else if (previousValue === true && element.hovering === false) {
			element.dispatchEvent(createEvent("mouseout"));
		}
	});
}
function createEvent(type: string, options: Partial<GameEvent> = {}) {
	let event: GameEvent = {
		...gameEvent,
		type,
		...options,
	};
	return event;
}
function mouseHandler(event: MouseEvent) {
	event.preventDefault();

	let now = performance.now();
	let type = event.type;
	let buttons = event.buttons;
	let position = {
		x: event.clientX * pixelDensity,
		y: event.clientY * pixelDensity,
	};

	// Update game event with current mouse state
	gameEvent = createEvent(type, {
		canvasPosition: position,
		mouseButtons: {
			left: isMouseButtonPressed(buttons, "left"),
			right: isMouseButtonPressed(buttons, "right"),
			middle: isMouseButtonPressed(buttons, "middle"),
			back: isMouseButtonPressed(buttons, "back"),
			forward: isMouseButtonPressed(buttons, "forward"),
		},
	});

	// Handle right-click for quick movement
	if (type === "pointerdown" && isMouseButtonPressed(buttons, "right")) {
		// Get the selected person
		const selectedEntity = actionBar.getSelectedEntity();
		if (selectedEntity instanceof Person) {
			// Find the PersonVisual for this person
			const personVisuals = PersonVisualRegistry.getPersonVisuals();
			const personVisual = personVisuals.find(
				(pv) => pv.getPerson() === selectedEntity
			);

			if (personVisual) {
				// Move the person to the clicked location on the map
				personVisual.moveTo(gameEvent.mapPosition);

				// Prevent further processing of this click
				event.preventDefault();
				return;
			}
		}
	}

	// Handle person movement when Move action is selected
	if (
		selectedAction === "Move" &&
		type === "pointerdown" &&
		isMouseButtonPressed(buttons, "left")
	) {
		const selectedEntity = actionBar.getSelectedEntity();
		if (selectedEntity instanceof Person) {
			// Find the PersonVisual for this person
			const personVisuals = PersonVisualRegistry.getPersonVisuals();
			const personVisual = personVisuals.find(
				(pv) => pv.getPerson() === selectedEntity
			);

			if (personVisual) {
				// Move the person to the clicked location on the map
				personVisual.moveTo(gameEvent.mapPosition);

				// Reset the action and cursor
				setSelectedAction(null);

				// Prevent further processing of this click
				return;
			}
		}
	}

	// Handle hovering
	hoveringCheck();

	// Handle button state updates
	for (let buttonName of buttonNames) {
		let buttonPressed = isMouseButtonPressed(buttons, buttonName);
		let buttonState = clickState[buttonName];

		if (buttonPressed && !buttonState.pressed) {
			// Button was just pressed
			buttonState.pressed = true;
			buttonState.pressed_time = now;
			buttonState.pressed_position = { ...position };
			buttonState.pressed_position_map = { ...gameEvent.mapPosition };

			// Prevent context menu on right-click (especially for Safari)
			if (event.button === 2) {
				event.preventDefault();
			}

			gameEvent.type = "pointerdown";
			gameEvent.mouseButtons[buttonName] = true;
		} else if (!buttonPressed && buttonState.pressed) {
			// Button was just released
			buttonState.pressed = false;
			let pressedDuration = now - buttonState.pressed_time;
			let pressedDistanceMoved = getDistance2D(
				buttonState.pressed_position,
				position
			);

			let clickStartPosition = buttonState.pressed_position;
			let clickStartPositionMap = buttonState.pressed_position_map;
			let clickStartTime = buttonState.pressed_time;

			// Handle click vs. drag
			if (
				pressedDuration < clickTimeThreshold &&
				pressedDistanceMoved < clickDistanceThreshold
			) {
				// It's a click!
				for (let element of InteractiveElements) {
					if (
						element.isMapElement &&
						isInBounds(clickStartPositionMap, element)
					) {
						element.dispatchEvent(
							createEvent("click", {
								click: {
									startPosition: clickStartPosition,
									startPositionOnMap: clickStartPositionMap,
									endPosition: gameEvent.canvasPosition,
									endPositionOnMap: gameEvent.mapPosition,
									startTime: clickStartTime,
									endTime: now,
									duration: pressedDuration,
									distanceMoved: pressedDistanceMoved,
									button: buttonName,
								},
							})
						);
						break; // Only click one!!
					} else if (
						!element.isMapElement &&
						isInBounds(clickStartPosition, element)
					) {
						element.dispatchEvent(
							createEvent("click", {
								click: {
									startPosition: clickStartPosition,
									startPositionOnMap: clickStartPositionMap,
									endPosition: gameEvent.canvasPosition,
									endPositionOnMap: gameEvent.mapPosition,
									startTime: clickStartTime,
									endTime: now,
									duration: pressedDuration,
									distanceMoved: pressedDistanceMoved,
									button: buttonName,
								},
							})
						);
						break; // Only click one!!
					}
				}
			} else {
				// Drag
				for (let element of InteractiveElements) {
					if (isInBounds(clickStartPositionMap, element)) {
						element.dispatchEvent(
							createEvent("drag", {
								click: {
									startPosition: clickStartPosition,
									startPositionOnMap: clickStartPositionMap,
									endPosition: gameEvent.canvasPosition,
									endPositionOnMap: gameEvent.mapPosition,
									startTime: clickStartTime,
									endTime: now,
									duration: pressedDuration,
									distanceMoved: pressedDistanceMoved,
									button: buttonName,
								},
							})
						);
						break; // Only drag one!!
					}
				}
			}
		}
	}
}

interface GestureEvent {
	pageX: number;
	pageY: number;
	rotation: number;
	scale: number;
	preventDefault(): void;
}

let gestureStartData = {
	position: new Vector2(0, 0),
	rotation: 0,
	scale: 1,
};

function gestureStart(event: GestureEvent) {
	event.preventDefault();
	gestureStartData.position = getPositionOnMap({
		x: event.pageX,
		y: event.pageY,
	});
	gestureStartData.rotation = event.rotation;
	gestureStartData.scale = view.zoom * event.scale;
}

function gestureChange(event: GestureEvent) {
	event.preventDefault();

	// rotation = gestureStartRotation + e.rotation;
	view.zoom = gestureStartData.scale;
	updateZoomWithMousePosition(event.scale * view.zoom);

	// posX = e.pageX - startX;
	// posY = e.pageY - startY;

	// render();
}

function gestureEnd(event: GestureEvent) {
	event.preventDefault();
}

window.addEventListener("pointermove", mouseHandler);
window.addEventListener("pointerdown", mouseHandler);
window.addEventListener("pointerup", mouseHandler);

// Prevent context menu on right-click
window.addEventListener(
	"contextmenu",
	(event) => {
		event.preventDefault();
	},
	false
);

function handleControls(elapsed: number) {
	// TODO: add gamepad support
	let moved = false;

	// Gamepad support
	const gamepads = navigator.getGamepads();
	for (const gamepad of gamepads) {
		if (gamepad) {
			// Right trigger (index 7) zooms in
			if (gamepad.buttons[7] && gamepad.buttons[7].value > 0.1) {
				handleZoom(
					elapsed * view.zoom_speed * view.zoom * gamepad.buttons[7].value
				);
			}

			// Left trigger (index 6) zooms out
			if (gamepad.buttons[6] && gamepad.buttons[6].value > 0.1) {
				handleZoom(
					-elapsed * view.zoom_speed * view.zoom * gamepad.buttons[6].value
				);
			}

			// Left thumbstick cursor movement (axes 0 and 1)
			const cursorDeadzone = 0.1;
			const cursorSpeed = 3; // Adjust this value to control cursor speed

			let cursorMoved = false;

			// Check if left thumbstick is being used
			if (
				Math.abs(gamepad.axes[0]) > cursorDeadzone ||
				Math.abs(gamepad.axes[1]) > cursorDeadzone
			) {
				// Update cursor position based on thumbstick input
				gameEvent.canvasPosition.x += gamepad.axes[0] * cursorSpeed * elapsed;
				gameEvent.canvasPosition.y += gamepad.axes[1] * cursorSpeed * elapsed;

				// Clamp cursor position to canvas boundaries
				gameEvent.canvasPosition.x = Math.max(
					0,
					Math.min(width, gameEvent.canvasPosition.x)
				);
				gameEvent.canvasPosition.y = Math.max(
					0,
					Math.min(height, gameEvent.canvasPosition.y)
				);

				// Update map position and check for hovering elements
				hoveringCheck();
				cursorMoved = true;
			}

			// Right thumbstick panning (axes 2 and 3)
			const deadzone = 0.1; // Ignore small movements
			const panSpeed = 3; // Adjust this value to control panning speed

			// Horizontal movement (left/right)
			if (Math.abs(gamepad.axes[2]) > deadzone) {
				view.x +=
					(elapsed * view.move_speed * gamepad.axes[2] * panSpeed) / view.zoom;
				moved = true;
			}

			// Vertical movement (up/down)
			if (Math.abs(gamepad.axes[3]) > deadzone) {
				view.y +=
					(elapsed * view.move_speed * gamepad.axes[3] * panSpeed) / view.zoom;
				moved = true;
			}

			// Handle gamepad button presses for mouse clicks
			// A button (index 0) = left click
			if (gamepad.buttons[0] && gamepad.buttons[0].pressed) {
				if (!gameEvent.mouseButtons.left) {
					// Simulate mouse down
					gameEvent.mouseButtons.left = true;
					clickState.left.pressed = true;
					clickState.left.pressed_time = performance.now();
					clickState.left.pressed_position = { ...gameEvent.canvasPosition };
					clickState.left.pressed_position_map = { ...gameEvent.mapPosition };
				}
			} else if (gameEvent.mouseButtons.left) {
				// Simulate mouse up
				gameEvent.mouseButtons.left = false;
				// The mouseHandler function will handle the click/drag logic on the next frame
			}
		}
	}
	// Zooming with + and -
	if (KeysPressed.has("-")) {
		handleZoom(-elapsed * view.zoom_speed * view.zoom);
	}
	if (KeysPressed.has("=")) {
		handleZoom(elapsed * view.zoom_speed * view.zoom);
	}

	// Panning with Arrow Keys
	if (KeysPressed.has("arrowleft")) {
		view.x -= (elapsed * view.move_speed) / view.zoom;
		moved = true;
	}
	if (KeysPressed.has("arrowright")) {
		view.x += (elapsed * view.move_speed) / view.zoom;
		moved = true;
	}
	if (KeysPressed.has("arrowup")) {
		view.y -= (elapsed * view.move_speed) / view.zoom;
		moved = true;
	}
	if (KeysPressed.has("arrowdown")) {
		view.y += (elapsed * view.move_speed) / view.zoom;
		moved = true;
	}
	// Mouse Panning
	// if (gameEvent.canvasPosition.x > width - scrollArea)
	// 	view.x += (elapsed * view.move_speed) / view.zoom;
	// if (gameEvent.canvasPosition.x < scrollArea) view.x -= (elapsed * view.move_speed) / view.zoom;
	// if (gameEvent.canvasPosition.y > height - scrollArea)
	// 	view.y += (elapsed * view.move_speed) / view.zoom;
	// if (gameEvent.canvasPosition.y < scrollArea) view.y -= (elapsed * view.move_speed) / view.zoom;
	if (moved) {
		hoveringCheck(true);
	}
}

function updateZoomWithMousePosition(newZoom: number) {
	view.x =
		gameEvent.canvasPosition.x / view.zoom -
		gameEvent.canvasPosition.x / newZoom +
		view.x;
	view.y =
		gameEvent.canvasPosition.y / view.zoom -
		gameEvent.canvasPosition.y / newZoom +
		view.y;
	view.zoom = newZoom;
}

function handleZoom(amount: number) {
	let newZoom = Math.min(Math.max(minZoom, view.zoom + amount), maxZoom);
	updateZoomWithMousePosition(newZoom);
}

window.addEventListener(
	"wheel",
	(event) => {
		let deltaX = event.deltaX;
		let deltaY = event.deltaY;
		let deltaZ = event.deltaZ; // 3d mouse
		if (event.ctrlKey === true) {
			event.preventDefault();
			handleZoom(-deltaY / 50);
		} else {
			// Panning
			view.x += deltaX / view.zoom;
			view.y += deltaY / view.zoom;
			handleZoom(deltaZ / 50);
			hoveringCheck(true); // Only if panning, because otherwise the mouse will still be hovering the same thing.
		}
	},
	{ passive: false }
);

window.addEventListener("keydown", (event) => {
	KeysPressed.add(event.key.toLowerCase());
});
window.addEventListener("keyup", (event) => {
	KeysPressed.delete(event.key.toLowerCase());
	if (event.key == "t") showMap(map.heatMap);
	else if (event.key == "h") showMap(map.heightMap);
	else if (event.key == "i") showMap(map.materialMap.Iron);
	else if (event.key == "g") showMap(map.materialMap.Gold);
});

// Prevent zooming
let preventDefault = (event: Event) => event.preventDefault();
let noPassive = { passive: false };
document.addEventListener("wheel", preventDefault, noPassive);
document.addEventListener("dblclick", preventDefault, noPassive);
document.addEventListener("touchstart", preventDefault, noPassive);
document.addEventListener("gesturestart", preventDefault, noPassive);
document.addEventListener("gesturechange", preventDefault, noPassive);
document.addEventListener("gestureend", preventDefault, noPassive);

// Gamepad connection event listeners
window.addEventListener("gamepadconnected", (e) => {
	console.log(
		`Gamepad connected at index ${e.gamepad.index}: ${e.gamepad.id}. 
    ${e.gamepad.buttons.length} buttons, ${e.gamepad.axes.length} axes.`
	);
});

window.addEventListener("gamepaddisconnected", (e) => {
	console.log(
		`Gamepad disconnected from index ${e.gamepad.index}: ${e.gamepad.id}`
	);
});

setSize();
init();
frame(0);

function setSize() {
	pixelDensity = window.devicePixelRatio;
	width = window.innerWidth * pixelDensity;
	height = window.innerHeight * pixelDensity;
	canvas.width = width;
	canvas.height = height;
	screenToMap.width = width / mapWidth;
	screenToMap.height = height / mapHeight;
	gameEvent.canvasWidth = width;
	gameEvent.canvasHeight = height;

	// Update action bar position when window is resized
	actionBar.updatePosition();
}
window.addEventListener("resize", setSize);
