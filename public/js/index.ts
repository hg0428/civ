import { Physical, Mental, Person, People, nations } from "./people.ts";
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
import { ActionBar } from "./actionBar.ts";
import { mapLayer, overlayLayer } from "./game.ts";
let map: World, imageBitmap: ImageBitmap;
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
let pixelDensity = window.devicePixelRatio;
let width = window.innerWidth * pixelDensity;
let height = window.innerHeight * pixelDensity;
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
let scale = 32;
// 157x100
let mapResolution = new Rectangle(157, 100);
let coordinateToMapRatio = 10;
const mapWidth = mapResolution.width * coordinateToMapRatio;
const mapHeight = mapResolution.height * coordinateToMapRatio;
let screenToMap = {
	width: 1,
	height: 1,
};
let clampedView = false; // Not working right TODO
let minZoom = 1;
let maxZoom = 200;
const buttonNames = ["left", "right", "middle", "back", "forward"];
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
	ctx.clearRect(0, 0, width, height);
	ctx.fillStyle = "lightblue";
	ctx.fillRect(0, 0, width, height);
	if (!imageBitmap) return;
	handleControls(elapsed);
	runGame(elapsed);
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
	// Draw map layer
	for (let element of mapLayer) {
		element.draw(ctx, elapsed, gameEvent);
	}
	// console.log(overlayLayer);
	// Draw overlay layer
	for (let element of overlayLayer) {
		console.log(element, element.draw);
		element.draw(ctx, elapsed, gameEvent);
	}
	renderMenus(ctx, elapsed, gameEvent);
	// Mouse
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
function runGame(elapsed: number) {
	// Prepare state
	ctx.save();
	try {
		view.realZoom = view.zoom * Math.min(screenToMap.width, screenToMap.height);
		ctx.translate(-view.x * view.zoom, -view.y * view.zoom);
		ctx.scale(view.realZoom, view.realZoom);

		// Draw Game
		ctx.drawImage(imageBitmap, 0, 0, mapWidth, mapHeight);
		nations.forEach((nation) => nation.draw(ctx, elapsed, gameEvent));
		// mapLayer.map((drawable) => drawable.draw(ctx, elapsed));
	} finally {
		// Restore
		ctx.restore();
	}
}
function handleControls(elapsed: number) {
	// TODO: add gamepad support
	let moved = false;
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
	// Clamped View
	if (clampedView) {
		view.x = Math.min(Math.max(0, view.x), mapWidth - width / view.realZoom);
		view.y = Math.min(Math.max(0, view.y), mapHeight - height / view.realZoom);
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
		mapResolution.height
	);
	createImageBitmap(imageData).then((x) => {
		imageBitmap = x;
	});
}
async function init() {
	map = generateMap(mapResolution.width, mapResolution.height);
	showMap(map.heightMap);
	let actionBar: ActionBar = new ActionBar(width, height);
	overlayLayer.push(actionBar);
	console.log(overlayLayer)
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
	const now = performance.now();
	event.preventDefault();
	gameEvent.canvasPosition.x = event.clientX * pixelDensity;
	gameEvent.canvasPosition.y = event.clientY * pixelDensity;
	hoveringCheck();
	for (const buttonName of buttonNames) {
		gameEvent.mouseButtons[buttonName] = isMouseButtonPressed(
			event.buttons,
			buttonName
		);
		const wasPressed = clickState[buttonName].pressed;
		const isPressed = gameEvent.mouseButtons[buttonName];
		if (isPressed && !wasPressed) {
			clickState[buttonName].pressed = true;
			clickState[buttonName].pressed_time = performance.now();
			clickState[buttonName].pressed_position = gameEvent.canvasPosition;
			clickState[buttonName].pressed_position_map = gameEvent.mapPosition;
		} else if (wasPressed && !isPressed) {
			// TODO: ONLY DO THIS FOR LEFT CLICK???
			clickState[buttonName].pressed = false;
			const clickStartPosition = clickState[buttonName].pressed_position;
			const clickStartPositionMap = clickState[buttonName].pressed_position_map;
			const clickStartTime = clickState[buttonName].pressed_time;
			const pressedDuration = now - clickStartTime;
			const pressedDistanceMoved = getDistance2D(
				clickStartPosition,
				gameEvent.canvasPosition
			);
			if (
				pressedDuration < clickTimeThreshold &&
				pressedDistanceMoved < clickDistanceThreshold
			) {
				console.log("click");
				// Click
				InteractiveElements.forEach((element) => {
					if (element.hovering)
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
				});
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
let gestureStart = {
	position: new Vector2(0, 0),
	rotation: 0,
	scale: 1,
};
// @ts-ignore
window.addEventListener("gesturestart", function (e: GestureEvent) {
	e.preventDefault();
	gestureStart.position = getPositionOnMap({ x: e.pageX, y: e.pageY });
	gestureStart.rotation = e.rotation;
	gestureStart.scale = view.zoom * e.scale;
	console.log(gestureStart);
});
// @ts-ignore

window.addEventListener("gesturechange", function (e: GestureEvent) {
	e.preventDefault();

	// rotation = gestureStartRotation + e.rotation;
	view.zoom = gestureStart.scale;
	updateZoomWithMousePosition(e.scale * view.zoom);

	// posX = e.pageX - startX;
	// posY = e.pageY - startY;

	// render();
});

window.addEventListener("gestureend", function (e: GestureEvent) {
	e.preventDefault();
});
window.addEventListener("pointermove", mouseHandler);
window.addEventListener("pointerdown", mouseHandler);
window.addEventListener("pointerup", mouseHandler);
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
	// Update action bar position if it exists
	// if (actionBar) {
	// 	actionBar.position = {
	// 		x: width / 2,
	// 		y: height - actionBar.height / 2 - 20
	// 	};
	// }
}
window.addEventListener("resize", setSize);
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

function updateSelection(group: People | undefined) {
    // Deselect all other groups
    nations.forEach(nation => 
        nation.groups.forEach(g => {
            if (g !== group) g.isSelected = false;
        })
    );
    // actionBar.setSelectedGroup(group);
}

setSize();
init();
frame(0);
