/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/game.ts":
/*!***************************!*\
  !*** ./public/js/game.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mapLayer: () => (/* binding */ mapLayer),\n/* harmony export */   overlayLayer: () => (/* binding */ overlayLayer),\n/* harmony export */   renderGround: () => (/* binding */ renderGround)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array-buffer.detached.js */ \"./node_modules/core-js/modules/es.array-buffer.detached.js\");\n/* harmony import */ var core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array-buffer.transfer.js */ \"./node_modules/core-js/modules/es.array-buffer.transfer.js\");\n/* harmony import */ var core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array-buffer.transfer-to-fixed-length.js */ \"./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js\");\n/* harmony import */ var core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-reversed.js */ \"./node_modules/core-js/modules/es.typed-array.to-reversed.js\");\n/* harmony import */ var core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-sorted.js */ \"./node_modules/core-js/modules/es.typed-array.to-sorted.js\");\n/* harmony import */ var core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.typed-array.with.js */ \"./node_modules/core-js/modules/es.typed-array.with.js\");\n/* harmony import */ var core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n// class Game {\n// \tlayers: {\n// \t\t[key: string]: Thing<any>[];\n// \t};\n// \tInteractiveElements: InteractiveElement<any>[];\n\n// \tconstructor() {\n// \t\tthis.layers = {};\n// \t\tthis.InteractiveElements = [];\n// \t}\n// \tThing(layer: string, options: Partial<Thing<any>> = {}) {\n// \t\tconst element = new Thing(options);\n// \t\t// this.InteractiveElements.push(element);\n// \t\tif (!this.layers[layer]) this.layers[layer] = [];\n// \t\tthis.layers[layer].push(element);\n// \t\treturn element;\n// \t}\n// \tInteractiveElement(\n// \t\tlayer: string,\n// \t\toptions: Partial<InteractiveElement<any>> = {}\n// \t) {\n// \t\tconst element = new InteractiveElement(options);\n// \t\tthis.InteractiveElements.push(element);\n// \t\tif (!this.layers[layer]) this.layers[layer] = [];\n// \t\tthis.layers[layer].push(element);\n// \t\treturn element;\n// \t}\n// \trenderLayer(layer: string, ctx: CanvasRenderingContext2D) {\n// \t\tif (!this.layers[layer]) return;\n// \t\tfor (let element of this.layers[layer]) {\n// \t\t\tdraw(element, ctx);\n// \t\t}\n// \t}\n// }\n\nconst mapLayer = [];\nconst overlayLayer = [];\nfunction renderGround(world) {\n  let seaLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;\n  let width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 157;\n  let height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;\n  let {\n    min,\n    max,\n    data\n  } = world.heightMap;\n  const range = max - min;\n  const colorData = [];\n  for (let i = 0; i < width; i++) {\n    for (let j = 0; j < height; j++) {\n      const z = data[j][i];\n      const level = (z - min) / range;\n      if (z <= seaLevel) {\n        colorData.push(level * 200, level * 200, 255 * (level / 2 + 0.5), 255); // It only works if everything is below sea-level.\n      } else {\n        colorData.push(level * 255, level * 255, level * 255, 255); // This somehow breaks it\n      }\n    }\n  }\n  const imageData = new ImageData(Uint8ClampedArray.from(colorData), width, height);\n  return imageData;\n}\n\n//# sourceURL=webpack://civ/./public/js/game.ts?");

/***/ }),

/***/ "./public/js/index.ts":
/*!****************************!*\
  !*** ./public/js/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_esnext_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.set.difference.v2.js */ \"./node_modules/core-js/modules/esnext.set.difference.v2.js\");\n/* harmony import */ var core_js_modules_esnext_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_esnext_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.set.intersection.v2.js */ \"./node_modules/core-js/modules/esnext.set.intersection.v2.js\");\n/* harmony import */ var core_js_modules_esnext_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_esnext_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.set.is-disjoint-from.v2.js */ \"./node_modules/core-js/modules/esnext.set.is-disjoint-from.v2.js\");\n/* harmony import */ var core_js_modules_esnext_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_esnext_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.set.is-subset-of.v2.js */ \"./node_modules/core-js/modules/esnext.set.is-subset-of.v2.js\");\n/* harmony import */ var core_js_modules_esnext_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_esnext_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.set.is-superset-of.v2.js */ \"./node_modules/core-js/modules/esnext.set.is-superset-of.v2.js\");\n/* harmony import */ var core_js_modules_esnext_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_esnext_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.set.symmetric-difference.v2.js */ \"./node_modules/core-js/modules/esnext.set.symmetric-difference.v2.js\");\n/* harmony import */ var core_js_modules_esnext_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_esnext_set_union_v2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/esnext.set.union.v2.js */ \"./node_modules/core-js/modules/esnext.set.union.v2.js\");\n/* harmony import */ var core_js_modules_esnext_set_union_v2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_union_v2_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _people_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./people.ts */ \"./public/js/people.ts\");\n/* harmony import */ var _shapes_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shapes.ts */ \"./public/js/shapes.ts\");\n/* harmony import */ var _land_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./land.ts */ \"./public/js/land.ts\");\n/* harmony import */ var _interactive_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interactive.ts */ \"./public/js/interactive.ts\");\n/* harmony import */ var _menu_ts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu.ts */ \"./public/js/menu.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\nlet map, imageBitmap;\nconst canvas = document.getElementById(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\nlet pixelDensity = window.devicePixelRatio;\nlet width = window.innerWidth * pixelDensity;\nlet height = window.innerHeight * pixelDensity;\nlet view = {\n  x: 0,\n  y: 0,\n  zoom: 5,\n  move_speed: 1,\n  zoom_speed: 1 / 1000,\n  realZoom: 1\n};\nlet KeysPressed = new Set();\nlet previousTimestamp = 0;\nlet elapsed = 0;\nlet mapResolution = new _shapes_ts__WEBPACK_IMPORTED_MODULE_8__.Rectangle(157, 100);\nlet coordinateToMapRatio = 10;\nconst mapWidth = mapResolution.width * coordinateToMapRatio;\nconst mapHeight = mapResolution.height * coordinateToMapRatio;\nlet screenToMap = {\n  width: 1,\n  height: 1\n};\nlet clampedView = false; // Not working right TODO\nlet minZoom = 1;\nlet maxZoom = 100;\nconst buttonNames = [\"left\", \"right\", \"middle\", \"back\", \"forward\"];\nlet gameEvent = {\n  canvasPosition: {\n    x: width / 2,\n    y: width / 2\n  },\n  mapPosition: new _shapes_ts__WEBPACK_IMPORTED_MODULE_8__.Vector2(0, 0),\n  canvasHeight: height,\n  canvasWidth: width,\n  mapHeight: mapHeight,\n  mapWidth: mapWidth,\n  canvas: canvas,\n  canvasRenderingContext2D: ctx,\n  elapsed: elapsed,\n  type: \"mouseover\",\n  mouseButtons: {\n    left: false,\n    right: false,\n    middle: false,\n    back: false,\n    forward: false\n  }\n};\ngameEvent.mapPosition = getMousePositionOnMap();\nclass ButtonState {\n  constructor() {\n    this.pressed = false;\n    this.pressed_time = 0;\n    this.pressed_position = {\n      x: 0,\n      y: 0\n    };\n  }\n}\nlet clickState = {\n  left: new ButtonState(),\n  right: new ButtonState(),\n  middle: new ButtonState(),\n  back: new ButtonState(),\n  forward: new ButtonState()\n};\nlet clickDistanceThreshold = 8;\nlet clickTimeThreshold = 250;\nfunction drawStroked(text, x, y) {\n  let lines = text.split(\"\\n\");\n  let fontSize = 30;\n  let lineHeight = fontSize + 5;\n  for (let i = 0; i < lines.length; i++) {\n    let line = lines[i];\n    ctx.font = `${fontSize}px Sans-serif`;\n    ctx.strokeStyle = \"black\";\n    ctx.lineWidth = 5;\n    ctx.strokeText(line, x, y + i * lineHeight);\n    ctx.fillStyle = \"white\";\n    ctx.fillText(line, x, y + i * lineHeight);\n  }\n}\nfunction getMousePositionOnMap() {\n  let min = Math.min(screenToMap.width, screenToMap.height);\n  return {\n    x: view.x / min + gameEvent.canvasPosition.x / (min * view.zoom),\n    y: view.y / min + gameEvent.canvasPosition.y / (min * view.zoom)\n  };\n}\nfunction draw(elapsed) {\n  gameEvent.elapsed = elapsed;\n  ctx.clearRect(0, 0, width, height);\n  ctx.fillStyle = \"lightblue\";\n  ctx.fillRect(0, 0, width, height);\n  if (!imageBitmap) return;\n  handleControls(elapsed);\n  runGame(elapsed);\n  // Overlay\n  drawStroked(`X: ${gameEvent.mapPosition.x.toFixed(0)}\\nY: ${gameEvent.mapPosition.y.toFixed(0)}\\nZoom: ${view.zoom.toFixed(2)}`, width - 200, 80);\n  // Minimap\n  let minimapHeight = 300;\n  let minimapWidth = minimapHeight * mapResolution.ratio;\n  let minimapX = width - (minimapWidth + 25);\n  let minimapY = height - (minimapHeight + 25);\n  ctx.drawImage(imageBitmap, minimapX, minimapY, minimapWidth, minimapHeight);\n\n  // Create a rectangle showing where the viewport is on the minimap.\n  let viewportWidthOnMinimap = width / mapWidth * minimapWidth / view.realZoom;\n  let viewportHeightOnMinimap = height / mapHeight * minimapHeight / view.realZoom;\n  let viewportXOnMinimap = minimapX + view.x / mapWidth * minimapWidth / Math.min(screenToMap.width, screenToMap.height);\n  let viewportYOnMinimap = minimapY + view.y / mapHeight * minimapHeight / Math.min(screenToMap.width, screenToMap.height);\n  ctx.strokeStyle = \"red\";\n  ctx.lineWidth = 0.5;\n  ctx.strokeRect(viewportXOnMinimap, viewportYOnMinimap, viewportWidthOnMinimap, viewportHeightOnMinimap);\n  // Create a gradient for the glassy effect\n  let gradient = ctx.createLinearGradient(viewportXOnMinimap, viewportYOnMinimap, viewportXOnMinimap + viewportWidthOnMinimap, viewportYOnMinimap + viewportHeightOnMinimap);\n  gradient.addColorStop(0, \"rgba(255, 100, 100, 0.33)\");\n  gradient.addColorStop(0.5, \"rgba(255, 100, 100, 0.1)\");\n  gradient.addColorStop(1, \"rgba(255, 100, 100, 0.3)\");\n\n  // Apply the gradient fill to the viewport rectangle\n  ctx.fillStyle = gradient;\n  ctx.fillRect(viewportXOnMinimap, viewportYOnMinimap, viewportWidthOnMinimap, viewportHeightOnMinimap);\n  // overlayLayer.map((drawable) => drawable.draw(ctx, elapsed));\n  (0,_menu_ts__WEBPACK_IMPORTED_MODULE_11__.renderMenus)(ctx, elapsed, gameEvent);\n\n  // Mouse\n  // Set the style properties\n  ctx.fillStyle = \"lightblue\";\n  ctx.strokeStyle = \"black\";\n  ctx.lineWidth = 5;\n\n  // Calculate the offset\n  let offset = ctx.lineWidth / 2;\n\n  // Begin the path\n  ctx.beginPath();\n  // Adjust the starting point by the offset\n  ctx.moveTo(gameEvent.canvasPosition.x + offset, gameEvent.canvasPosition.y + offset); // Starting point\n  ctx.lineTo(gameEvent.canvasPosition.x + offset, gameEvent.canvasPosition.y + 45 - offset); // Line down\n  ctx.lineTo(gameEvent.canvasPosition.x + 15 - offset, gameEvent.canvasPosition.y + 30 - offset); // Line to the right and up\n  ctx.lineTo(gameEvent.canvasPosition.x + 37.5 - offset, gameEvent.canvasPosition.y + 30 - offset); // Line to the right\n\n  // Close the path to ensure a complete shape\n  ctx.closePath();\n\n  // Fill and stroke the shape\n  ctx.fill();\n  ctx.stroke();\n}\nfunction runGame(elapsed) {\n  // Prepare state\n  ctx.save();\n  try {\n    view.realZoom = view.zoom * Math.min(screenToMap.width, screenToMap.height);\n    ctx.translate(-view.x * view.zoom, -view.y * view.zoom);\n    ctx.scale(view.realZoom, view.realZoom);\n\n    // Draw Game\n    ctx.drawImage(imageBitmap, 0, 0, mapWidth, mapHeight);\n    _people_ts__WEBPACK_IMPORTED_MODULE_7__.us.groups.map(group => group.draw(ctx, elapsed, gameEvent));\n    // mapLayer.map((drawable) => drawable.draw(ctx, elapsed));\n  } finally {\n    // Restore\n    ctx.restore();\n  }\n}\nfunction handleControls(elapsed) {\n  // TODO: add gamepad support\n  let moved = false;\n  // Zooming with + and -\n  if (KeysPressed.has(\"-\")) {\n    handleZoom(-elapsed * view.zoom_speed * view.zoom);\n  }\n  if (KeysPressed.has(\"=\")) {\n    handleZoom(elapsed * view.zoom_speed * view.zoom);\n  }\n\n  // Panning with Arrow Keys\n  if (KeysPressed.has(\"arrowleft\")) {\n    view.x -= elapsed * view.move_speed / view.zoom;\n    moved = true;\n  }\n  if (KeysPressed.has(\"arrowright\")) {\n    view.x += elapsed * view.move_speed / view.zoom;\n    moved = true;\n  }\n  if (KeysPressed.has(\"arrowup\")) {\n    view.y -= elapsed * view.move_speed / view.zoom;\n    moved = true;\n  }\n  if (KeysPressed.has(\"arrowdown\")) {\n    view.y += elapsed * view.move_speed / view.zoom;\n    moved = true;\n  }\n  // Mouse Panning\n  // if (gameEvent.canvasPosition.x > width - scrollArea)\n  // \tview.x += (elapsed * view.move_speed) / view.zoom;\n  // if (gameEvent.canvasPosition.x < scrollArea) view.x -= (elapsed * view.move_speed) / view.zoom;\n  // if (gameEvent.canvasPosition.y > height - scrollArea)\n  // \tview.y += (elapsed * view.move_speed) / view.zoom;\n  // if (gameEvent.canvasPosition.y < scrollArea) view.y -= (elapsed * view.move_speed) / view.zoom;\n  if (moved) {\n    hoveringCheck(true);\n  }\n  // Clamped View\n  if (clampedView) {\n    view.x = Math.min(Math.max(0, view.x), mapWidth - width / view.realZoom);\n    view.y = Math.min(Math.max(0, view.y), mapHeight - height / view.realZoom);\n  }\n}\nfunction handleZoom(amount) {\n  let newZoom = Math.min(Math.max(minZoom, view.zoom + amount), maxZoom);\n  view.x = gameEvent.canvasPosition.x / view.zoom - gameEvent.canvasPosition.x / newZoom + view.x;\n  view.y = gameEvent.canvasPosition.y / view.zoom - gameEvent.canvasPosition.y / newZoom + view.y;\n  view.zoom = newZoom;\n}\nasync function frame(timestamp) {\n  elapsed = timestamp - previousTimestamp;\n  previousTimestamp = timestamp;\n  draw(elapsed);\n  requestAnimationFrame(frame);\n}\nfunction showMap(map) {\n  let imageData = (0,_land_ts__WEBPACK_IMPORTED_MODULE_9__.renderHeightMap)(map, mapResolution.width, mapResolution.height);\n  createImageBitmap(imageData).then(x => {\n    imageBitmap = x;\n  });\n}\nasync function init() {\n  map = (0,_land_ts__WEBPACK_IMPORTED_MODULE_9__.generateMap)(mapResolution.width, mapResolution.height);\n  showMap(map.heightMap);\n}\nfunction isMouseButtonPressed(buttons, buttonName) {\n  // Use binary `&` with the relevant power of 2 to check if a given button is pressed\n  return Boolean(buttons & 1 << buttonNames.indexOf(buttonName));\n}\nfunction hoveringCheck() {\n  let mapOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  gameEvent.mapPosition = getMousePositionOnMap();\n  _interactive_ts__WEBPACK_IMPORTED_MODULE_10__.InteractiveElements.forEach(element => {\n    let previousValue = element.hovering;\n    if (element.isMapElement) element.hovering = (0,_shapes_ts__WEBPACK_IMPORTED_MODULE_8__.isInBounds)(gameEvent.mapPosition, element);else if (mapOnly) return;else element.hovering = (0,_shapes_ts__WEBPACK_IMPORTED_MODULE_8__.isInBounds)(gameEvent.canvasPosition, element);\n    if (previousValue === false && element.hovering === true) {\n      element.dispatchEvent(createEvent(\"mouseover\"));\n    } else if (previousValue === true && element.hovering === false) {\n      element.dispatchEvent(createEvent(\"mouseout\"));\n    }\n  });\n}\nfunction createEvent(type) {\n  let event = {\n    ...gameEvent,\n    type\n  };\n  return event;\n}\nfunction mouseHandler(event) {\n  event.preventDefault();\n  gameEvent.canvasPosition.x = event.clientX * pixelDensity;\n  gameEvent.canvasPosition.y = event.clientY * pixelDensity;\n  hoveringCheck();\n  for (const buttonName of buttonNames) {\n    gameEvent.mouseButtons[buttonName] = isMouseButtonPressed(event.buttons, buttonName);\n    if (gameEvent.mouseButtons[buttonName]) {\n      clickState[buttonName].pressed = true;\n      clickState[buttonName].pressed_time = performance.now();\n      clickState[buttonName].pressed_position = gameEvent.canvasPosition;\n    } else if (clickState[buttonName].pressed) {\n      // TODO: ONLY DO THIS FOR LEFT CLICK???\n      clickState[buttonName].pressed = false;\n      let pressedDuration = performance.now() - clickState[buttonName].pressed_time;\n      let pressedDistanceMoved = (0,_shapes_ts__WEBPACK_IMPORTED_MODULE_8__.getDistance2D)(clickState[buttonName].pressed_position, gameEvent.canvasPosition);\n      if (pressedDuration < clickTimeThreshold && pressedDistanceMoved < clickDistanceThreshold) {\n        // Click\n        _interactive_ts__WEBPACK_IMPORTED_MODULE_10__.InteractiveElements.forEach(element => {\n          console.log(element.fillStyle, element.hovering, element.listeners);\n          if (element.hovering) element.dispatchEvent(createEvent(\"click\"));\n        });\n      }\n    }\n  }\n}\nwindow.addEventListener(\"pointermove\", mouseHandler);\nwindow.addEventListener(\"pointerdown\", mouseHandler);\nwindow.addEventListener(\"pointerup\", mouseHandler);\nfunction setSize() {\n  pixelDensity = window.devicePixelRatio;\n  width = window.innerWidth * pixelDensity;\n  height = window.innerHeight * pixelDensity;\n  canvas.width = width;\n  canvas.height = height;\n  screenToMap.width = width / mapWidth;\n  screenToMap.height = height / mapHeight;\n  gameEvent.canvasWidth = width;\n  gameEvent.canvasHeight = height;\n}\nwindow.addEventListener(\"resize\", setSize);\nwindow.addEventListener(\"wheel\", event => {\n  let deltaX = event.deltaX;\n  let deltaY = event.deltaY;\n  let deltaZ = event.deltaZ; // 3d mouse\n  if (event.ctrlKey === true) {\n    event.preventDefault();\n    handleZoom(deltaY / 100);\n  } else {\n    // Panning\n    view.x += deltaX / view.zoom;\n    view.y += deltaY / view.zoom;\n    handleZoom(deltaZ / 100);\n    hoveringCheck(true); // Only if panning, because otherwise the mouse will still be hovering the same thing.\n  }\n}, {\n  passive: false\n});\nwindow.addEventListener(\"keydown\", event => {\n  KeysPressed.add(event.key.toLowerCase());\n});\nwindow.addEventListener(\"keyup\", event => {\n  KeysPressed.delete(event.key.toLowerCase());\n  if (event.key == \"t\") showMap(map.heatMap);else if (event.key == \"h\") showMap(map.heightMap);else if (event.key == \"i\") showMap(map.materialMap.Iron);else if (event.key == \"g\") showMap(map.materialMap.Gold);\n});\n\n// Prevent zooming\nlet preventDefault = event => event.preventDefault();\nlet noPassive = {\n  passive: false\n};\ndocument.addEventListener(\"wheel\", preventDefault, noPassive);\ndocument.addEventListener(\"dblclick\", preventDefault, noPassive);\ndocument.addEventListener(\"touchstart\", preventDefault, noPassive);\ndocument.addEventListener(\"gesturestart\", preventDefault, noPassive);\ndocument.addEventListener(\"gesturechange\", preventDefault, noPassive);\ndocument.addEventListener(\"gestureend\", preventDefault, noPassive);\nsetSize();\ninit();\nframe(0);\n\n//# sourceURL=webpack://civ/./public/js/index.ts?");

/***/ }),

/***/ "./public/js/interactive.ts":
/*!**********************************!*\
  !*** ./public/js/interactive.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InteractiveElement: () => (/* binding */ InteractiveElement),\n/* harmony export */   InteractiveElements: () => (/* binding */ InteractiveElements),\n/* harmony export */   hoverEffect: () => (/* binding */ hoverEffect)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shapes_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shapes.ts */ \"./public/js/shapes.ts\");\n\n\nclass InteractiveElement extends _shapes_ts__WEBPACK_IMPORTED_MODULE_1__.Thing {\n  /**\n   * Is the element currently being hovered\n   */\n  hovering = false;\n  /**\n   * The listeners of the element\n   */\n  listeners = {};\n  /**\n   * Whether of not the element is a map element\n   */\n  isMapElement = false;\n  constructor(options) {\n    super(options);\n    this.isMapElement = options.isMapElement ?? false;\n    InteractiveElements.push(this);\n  }\n  addEventListener(type, callback, options) {\n    if (!this.listeners[type]) this.listeners[type] = [];\n    this.listeners[type].push(callback);\n  }\n  removeEventListener(type, callback, options) {\n    this.listeners[type].filter(l => l !== callback);\n  }\n  dispatchEvent(event) {\n    if (!this.listeners[event.type]) return false;\n    this.listeners[event.type].forEach(l => l(event));\n    return true;\n  }\n  remove() {\n    super.remove();\n    InteractiveElements.splice(InteractiveElements.indexOf(this), 1);\n  }\n}\nconst InteractiveElements = [];\nfunction hoverEffect(thing) {\n  let maxScale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.5;\n  let hoveringTransitionSpeed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1 / 150;\n  let defaultScale = 1;\n  let targetScale = maxScale;\n  let currentScale = defaultScale;\n  let hovering = false;\n  let hoverStartTime = null;\n\n  // Save the original draw method\n  const originalDraw = thing.draw;\n\n  // Override the draw method\n  thing.draw = function (ctx, elapsed, gameEvent) {\n    if (thing.hovering && !hovering) {\n      // Start hovering\n      hoverStartTime = performance.now();\n      hovering = true;\n    } else if (!thing.hovering && hovering) {\n      // End hovering\n      hoverStartTime = null;\n      hovering = false;\n    }\n    let previousScale = currentScale;\n    if (hovering && hoverStartTime !== null) {\n      // Calculate the scale factor based on hovering transition speed\n      let scaleChange = elapsed * hoveringTransitionSpeed;\n\n      // Adjust currentScale towards targetScale\n      currentScale = Math.min(currentScale + scaleChange, targetScale);\n    } else if (!hovering) {\n      // Calculate the scale factor based on shrink transition speed\n      let scaleChange = elapsed * hoveringTransitionSpeed;\n\n      // Adjust currentScale back to defaultScale\n      currentScale = Math.max(currentScale - scaleChange, defaultScale);\n    }\n\n    // Apply the current scale to the shape\n    thing.shape.scale(currentScale / previousScale);\n\n    // Call the original draw method with the scaled shape\n    originalDraw.call(thing, ctx, elapsed);\n  };\n}\n// TODO: make events completely custom, not including default mouse event properties\n\n//# sourceURL=webpack://civ/./public/js/interactive.ts?");

/***/ }),

/***/ "./public/js/land.ts":
/*!***************************!*\
  !*** ./public/js/land.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   World: () => (/* binding */ World),\n/* harmony export */   generateHeightMap: () => (/* binding */ generateHeightMap),\n/* harmony export */   generateMap: () => (/* binding */ generateMap),\n/* harmony export */   renderHeightMap: () => (/* binding */ renderHeightMap)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array-buffer.detached.js */ \"./node_modules/core-js/modules/es.array-buffer.detached.js\");\n/* harmony import */ var core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array-buffer.transfer.js */ \"./node_modules/core-js/modules/es.array-buffer.transfer.js\");\n/* harmony import */ var core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array-buffer.transfer-to-fixed-length.js */ \"./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js\");\n/* harmony import */ var core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-reversed.js */ \"./node_modules/core-js/modules/es.typed-array.to-reversed.js\");\n/* harmony import */ var core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-sorted.js */ \"./node_modules/core-js/modules/es.typed-array.to-sorted.js\");\n/* harmony import */ var core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.typed-array.with.js */ \"./node_modules/core-js/modules/es.typed-array.with.js\");\n/* harmony import */ var core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _substance_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./substance.ts */ \"./public/js/substance.ts\");\n/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! simplex-noise */ \"./node_modules/simplex-noise/dist/esm/simplex-noise.js\");\n\n\n\n\n\n\n\n// Land is made up of two independent layers: substance map, height map.\n// Then there are some dependant layers: vegetation map, humidity map, and heat map.\n\n\n\n\n// Use AI map generation?\n\nfunction generateCylindricalHeightmap() {\n  let width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 157;\n  let height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n  let noiseScale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;\n  let octaves = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 6;\n  let scale = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;\n  const noise2D = (0,simplex_noise__WEBPACK_IMPORTED_MODULE_8__.createNoise2D)();\n  // Create the empty heightmap array\n  const terrain = new Array(height);\n  for (let y = 0; y < height; y++) {\n    terrain[y] = new Array(width);\n  }\n\n  // Fill the terrain array with noise values\n  for (let y = 0; y < height; y++) {\n    for (let x = 0; x < width; x++) {\n      // Generate noise based on x, y, noise scale, and octaves\n      let noiseSum = 0;\n      let frequency = 1.0;\n      let amplitude = 1.0;\n      for (let i = 0; i < octaves; i++) {\n        noiseSum += noise2D(x * frequency / noiseScale, y * frequency / noiseScale) * amplitude;\n        frequency *= 2;\n        amplitude *= 0.5;\n      }\n\n      // Normalize noise to 0.0 - 1.0 range\n      // console.log(noiseSum);\n      terrain[y][x] = (noiseSum + 1) / 2 * scale; // Offset for 0-1 range\n    }\n  }\n  // console.log(terrain);\n  return {\n    data: terrain,\n    min: 0,\n    max: scale\n  };\n}\nclass World {\n  materialMap = null;\n  heightMap = null;\n  heatMap = null;\n  vegetationMap = null;\n  humidityMap = null;\n  constructor(width, height) {\n    let materialMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n    let heightMap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n    let heatMap = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n    let vegetationMap = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;\n    let humidityMap = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;\n    this.width = width;\n    this.height = height;\n    this.materialMap = materialMap;\n    this.heightMap = heightMap;\n    this.heatMap = heatMap;\n    this.vegetationMap = vegetationMap;\n    this.humidityMap = humidityMap;\n  }\n}\nfunction generateHeightMap(width, height) {\n  let depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;\n  let rough = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;\n  // const data = ds({\n  // \twidth,\n  // \theight,\n  // \tdepth,\n  // \trough,\n  // });\n  const data = generateCylindricalHeightmap(width, height, 100);\n  return data;\n}\nfunction renderHeightMap(heightMap, width, height) {\n  let {\n    min,\n    max,\n    data\n  } = heightMap;\n  // console.log(min, max, data);\n  const range = max - min;\n  const colorData = [];\n  for (let i = 0; i < height; i++) {\n    for (let j = 0; j < width; j++) {\n      const level = (data[i][j] - min) / range;\n      colorData.push(level * 255, level * 255, level * 255, 255);\n    }\n  }\n  const imageData = new ImageData(Uint8ClampedArray.from(colorData), width, height);\n  return imageData;\n}\nfunction generateMaterialMap(width, height) {\n  let map = {};\n  for (let substance of _substance_ts__WEBPACK_IMPORTED_MODULE_7__.substances) {\n    map[substance.name] = generateHeightMap(width, height, 100 * substance.relative_abundance);\n  }\n  return map;\n}\nfunction generateHeatMap(width, height, heightMap, materialMap) {\n  // Warmest in the middle, coolest at the top and bottom edges\n  // A little randomness. Cooler at higher elevations.\n\n  const heatData = [];\n  let heightRange = heightMap.max - heightMap.min;\n  for (let y = 0; y < height; y++) {\n    heatData[y] = [];\n    for (let x = 0; x < width; x++) {\n      const z = (heightMap.data[y][x] - heightMap.min) / heightRange;\n      const distanceToYMiddle = Math.abs(y - height / 2);\n      const level = 1 / (2 * distanceToYMiddle ** 2 + 2) + z / 2;\n      heatData[y].push(level * 10);\n    }\n  }\n  return {\n    data: heatData,\n    min: 0,\n    max: 1\n  };\n}\n/**\n * Generates all the maps together.\n *\n * @param width - width of the map\n * @param height - height of the map\n * @return description of return value\n */\nfunction generateMap(width, height) {\n  let heightMap = generateHeightMap(width, height);\n  // console.log(\"Generated height map\", heightMap);\n  let materialMap = generateMaterialMap(width, height);\n  // console.log(\"Generated material map\", materialMap);\n  let heatMap = generateHeatMap(width, height, heightMap, materialMap);\n  // console.log(\"Generated heat map\", heatMap);\n\n  return new World(width, height, materialMap, heightMap, heatMap);\n}\n\n\n//# sourceURL=webpack://civ/./public/js/land.ts?");

/***/ }),

/***/ "./public/js/menu.ts":
/*!***************************!*\
  !*** ./public/js/menu.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: () => (/* binding */ Menu),\n/* harmony export */   activeMenus: () => (/* binding */ activeMenus),\n/* harmony export */   renderMenus: () => (/* binding */ renderMenus)\n/* harmony export */ });\n/* harmony import */ var _game_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.ts */ \"./public/js/game.ts\");\n/* harmony import */ var _interactive_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.ts */ \"./public/js/interactive.ts\");\n\n\nconst activeMenus = [];\nclass Menu {\n  elements = [];\n  constructor(elements) {\n    this.elements = elements;\n  }\n  draw(ctx, elapsed, gameEvent) {\n    for (let element of this.elements) {\n      element.draw(ctx, elapsed, gameEvent);\n    }\n  }\n  remove() {\n    for (let element of this.elements) {\n      if (element instanceof _interactive_ts__WEBPACK_IMPORTED_MODULE_1__.InteractiveElement) element.remove();\n    }\n    this.elements = [];\n    activeMenus.filter(m => m !== this);\n    _game_ts__WEBPACK_IMPORTED_MODULE_0__.mapLayer.filter(m => m !== this);\n    _game_ts__WEBPACK_IMPORTED_MODULE_0__.overlayLayer.filter(m => m !== this);\n  }\n}\nfunction renderMenus(ctx, elapsed, gameEvent) {\n  for (let menu of activeMenus) {\n    menu.draw(ctx, elapsed, gameEvent);\n  }\n}\n\n//# sourceURL=webpack://civ/./public/js/menu.ts?");

/***/ }),

/***/ "./public/js/people.ts":
/*!*****************************!*\
  !*** ./public/js/people.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Mental: () => (/* binding */ Mental),\n/* harmony export */   People: () => (/* binding */ People),\n/* harmony export */   Person: () => (/* binding */ Person),\n/* harmony export */   Physical: () => (/* binding */ Physical),\n/* harmony export */   us: () => (/* binding */ us)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.ts */ \"./public/js/utils.ts\");\n/* harmony import */ var _shapes_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes.ts */ \"./public/js/shapes.ts\");\n/* harmony import */ var _interactive_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive.ts */ \"./public/js/interactive.ts\");\n/* harmony import */ var _menu_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.ts */ \"./public/js/menu.ts\");\n\n\n\n\n\n// EVERYTHING IS ON A 0-100 SCALE!!\n\nconst CHANCE_START = 2;\nconst CHANCE_FACTOR = 2; // EXPONENTIAL\nconst NUMBER_LEVELS = 33;\nconst GLOBAL_MAX_DEVIATION = 75;\nconst DEVIATION_SIZE = GLOBAL_MAX_DEVIATION / 34;\nfunction generateValue(rng, average) {\n  const rnd = rng();\n  let max_deviation = Math.max(average, 100 - average);\n  let deviation;\n  for (let a = NUMBER_LEVELS - 1; a >= 0; a--) {\n    if (rnd % (CHANCE_START * CHANCE_FACTOR ** a) === 0) {\n      deviation = DEVIATION_SIZE * (a + 1);\n      break;\n    }\n  }\n  if (!deviation) deviation = DEVIATION_SIZE;\n  deviation = Math.min(deviation, max_deviation);\n  return Math.max(0, Math.min(rng() % deviation * 2 - deviation + average, 100));\n}\nfunction createPropertySet(properties) {\n  return class PropertySet {\n    properties = properties;\n    constructor() {\n      for (let i = 0; i < properties.length; i++) {\n        this[properties[i]] = (i < 0 || arguments.length <= i ? undefined : arguments[i]) ?? 50;\n      }\n    }\n    generateDeviation(rng) {\n      let new_values = [];\n      for (let i = 0; i < properties.length; i++) {\n        new_values.push(generateValue(rng, this[properties[i]]));\n      }\n      return new PropertySet(...new_values);\n    }\n    add(other) {\n      let new_values = [];\n      for (let i = 0; i < properties.length; i++) {\n        new_values.push(this[properties[i]] + other[properties[i]]);\n      }\n      return new PropertySet(...new_values);\n    }\n    subtract(other) {\n      let new_values = [];\n      for (let i = 0; i < properties.length; i++) {\n        new_values.push(this[properties[i]] - other[properties[i]]);\n      }\n      return new PropertySet(...new_values);\n    }\n    scale(x) {\n      let new_values = [];\n      for (let i = 0; i < properties.length; i++) {\n        new_values.push(this[properties[i]] * x);\n      }\n      return new PropertySet(...new_values);\n    }\n  };\n}\nconst Physical = createPropertySet([\"age\", \"height\", \"weight\", \"strength\", \"speed\"]);\nconst Mental = createPropertySet([\"problem_solving\", \"knowledge\", \"creativity\"]);\nclass Person {\n  constructor(first_name, last_name, physical, mental) {\n    this.first_name = first_name;\n    this.last_name = last_name;\n    this.physical = physical;\n    this.mental = mental;\n  }\n}\nclass People {\n  menu = null;\n  constructor(nationality, quantity, average_physical, average_mental, location) {\n    this.nationality = nationality;\n    this.quantity = this.total = quantity;\n    this.physical = average_physical;\n    this.mental = average_mental;\n    this.predefined = [];\n    this.seed = Math.round(Math.random() * 10 ** 10);\n    this.rng = (0,_utils_ts__WEBPACK_IMPORTED_MODULE_1__.PRNG)(this.seed);\n    this.index = 0;\n    this.location = location;\n    this.nationality.groups.push(this);\n    this.element = new _interactive_ts__WEBPACK_IMPORTED_MODULE_3__.InteractiveElement({\n      position: this.location,\n      shape: new _shapes_ts__WEBPACK_IMPORTED_MODULE_2__.Circle(5),\n      fillStyle: this.nationality.colors[0],\n      strokeStyle: this.nationality.colors[1],\n      strokeWidth: 2,\n      isMapElement: true\n    });\n    (0,_interactive_ts__WEBPACK_IMPORTED_MODULE_3__.hoverEffect)(this.element);\n    this.element.addEventListener(\"click\", event => this.click(event));\n  }\n  addPerson(person) {\n    this.total++;\n    this.predefined.push(person);\n    this.physical = this.physical.scale(this.total - 1).add(person.physical).scale(1 / this.total);\n    this.mental = this.mental.scale(this.total - 1).add(person.mental).scale(1 / this.total);\n  }\n  generatePerson() {\n    this.index++;\n    return new Person(\"John\", \"Doe\", this.physical.generateDeviation(this.rng), this.mental.generateDeviation(this.rng));\n  }\n  getPeople() {\n    var _this = this;\n    let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.quantity;\n    return function* () {\n      for (let i = 0; i < n; i++) {\n        yield _this.generatePerson();\n      }\n    }();\n  }\n  getPerson(n) {\n    if (this.index > n) this.reset();\n    let person;\n    while (this.index <= n) {\n      person = this.generatePerson();\n    }\n    return person;\n  }\n  reset() {\n    this.rng = (0,_utils_ts__WEBPACK_IMPORTED_MODULE_1__.PRNG)(this.seed);\n    this.index = 0;\n  }\n  draw(ctx, elapsed, gameEvent) {\n    this.element.draw(ctx, elapsed, gameEvent);\n  }\n  click(event) {\n    console.log(\"clicked\", this.menu);\n    let ctx = event.canvasRenderingContext2D;\n    if (this.menu) return;\n    let menuMargin = 100;\n    if (event.canvasHeight < 500) menuMargin = 0;\n    let box = new _shapes_ts__WEBPACK_IMPORTED_MODULE_2__.Thing({\n      position: {\n        x: event.canvasWidth / 2,\n        y: event.canvasHeight / 2\n      },\n      shape: new _shapes_ts__WEBPACK_IMPORTED_MODULE_2__.Rectangle(event.canvasWidth - menuMargin, event.canvasHeight - menuMargin),\n      fillStyle: \"antiquewhite\",\n      strokeStyle: \"blue\",\n      strokeWidth: 4,\n      lineJoin: \"round\"\n    });\n    let x = new _interactive_ts__WEBPACK_IMPORTED_MODULE_3__.InteractiveElement({\n      position: {\n        x: event.canvasWidth - menuMargin,\n        y: menuMargin\n      },\n      shape: new _shapes_ts__WEBPACK_IMPORTED_MODULE_2__.X(50, 50),\n      strokeStyle: \"red\",\n      strokeWidth: 8,\n      fill: false,\n      lineCap: \"round\"\n    });\n    (0,_interactive_ts__WEBPACK_IMPORTED_MODULE_3__.hoverEffect)(x);\n\n    // Function to create a section displaying properties\n    const createPropertySection = (ctx, x, y, header, properties, values) => {\n      ctx.fillStyle = \"black\";\n      let headerSize = 50;\n      let textSize = 30;\n      let padding = 15;\n      let linePadding = 20;\n      ctx.font = `${headerSize}px Sans-serif`;\n      let offset = padding + headerSize / 2;\n      ctx.fillText(header, x + padding, y + offset);\n      properties.forEach((property, i) => {\n        ctx.font = `${textSize}px Sans-serif`;\n        offset += textSize + linePadding;\n        ctx.fillText(`${property}: ${values[i]}`, x + 30 + padding, y + offset);\n      });\n      offset += textSize + linePadding;\n      return offset;\n    };\n    let physicalProperties = this.physical.properties.map(property => this.physical[property]);\n    let mentalProperties = this.mental.properties.map(property => this.mental[property]);\n    let menu = new _menu_ts__WEBPACK_IMPORTED_MODULE_4__.Menu([box, x, {\n      draw(ctx, elapsed, gameEvent) {\n        let endOffset = createPropertySection(ctx, menuMargin, menuMargin, \"Physical:\", people.physical.properties, physicalProperties);\n        createPropertySection(ctx, menuMargin, menuMargin + endOffset, \"Mental:\", people.mental.properties, mentalProperties);\n      }\n    }]);\n    this.menu = menu;\n    x.addEventListener(\"click\", () => this.removeMenu());\n    _menu_ts__WEBPACK_IMPORTED_MODULE_4__.activeMenus.push(this.menu);\n    return;\n  }\n  removeMenu() {\n    this.menu.remove();\n    this.menu = null;\n  }\n  remove() {\n    this.element.remove();\n    this.menu.remove();\n    this.nationality.groups.splice(this.nationality.groups.indexOf(this), 1);\n  }\n}\nclass Nation {\n  constructor(name, colors) {\n    this.name = name;\n    this.colors = colors;\n    this.groups = [];\n  }\n}\nconst us = new Nation(\"United States\", [\"red\", \"white\", \"blue\"]);\nconst people = new People(us, 100, new Physical(50, 50, 50, 50, 50, 50), new Mental(50, 50, 50), {\n  x: 100,\n  y: 100\n});\n\n// let levels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];\n// let rng = PRNG();\n// for (let i = 0; i < 1_000_000; i++) {\n// \tlet x = generateValue(rng, 50);\n// \tif (x < 10) levels[0]++;\n// \telse if (x < 20) levels[1]++;\n// \telse if (x < 30) levels[2]++;\n// \telse if (x < 40) levels[3]++;\n// \telse if (x < 50) levels[4]++;\n// \telse if (x < 60) levels[5]++;\n// \telse if (x < 70) levels[6]++;\n// \telse if (x < 80) levels[7]++;\n// \telse if (x < 90) levels[8]++;\n// \telse levels[9]++;\n// }\n// console.log(levels);\n// console.log([...people.getPeople(5)]);\n// NAMES: https://github.com/aakashkag/People-Name-List/blob/master/US-People-Names/us_people_names.csv\n\n\n\n//# sourceURL=webpack://civ/./public/js/people.ts?");

/***/ }),

/***/ "./public/js/shapes.ts":
/*!*****************************!*\
  !*** ./public/js/shapes.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Circle: () => (/* binding */ Circle),\n/* harmony export */   Ellipse: () => (/* binding */ Ellipse),\n/* harmony export */   Rectangle: () => (/* binding */ Rectangle),\n/* harmony export */   Square: () => (/* binding */ Square),\n/* harmony export */   Thing: () => (/* binding */ Thing),\n/* harmony export */   Vector2: () => (/* binding */ Vector2),\n/* harmony export */   Vector3: () => (/* binding */ Vector3),\n/* harmony export */   X: () => (/* binding */ X),\n/* harmony export */   draw: () => (/* binding */ draw),\n/* harmony export */   getDistance2D: () => (/* binding */ getDistance2D),\n/* harmony export */   getDistance3D: () => (/* binding */ getDistance3D),\n/* harmony export */   isInBounds: () => (/* binding */ isInBounds)\n/* harmony export */ });\n/* harmony import */ var _game_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.ts */ \"./public/js/game.ts\");\n\nclass Vector2 {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n}\nclass Vector3 extends Vector2 {\n  constructor(x, y, z) {\n    super(x, y);\n    this.z = z;\n  }\n}\nclass Ellipse {\n  constructor(radiusX, radiusY) {\n    let rotation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n    this.radiusX = radiusX;\n    this.radiusY = radiusY;\n    this.rotation = rotation;\n  }\n  scale(x) {\n    let y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;\n    this.radiusX *= x;\n    this.radiusY *= y;\n  }\n}\nclass Circle extends Ellipse {\n  constructor(radius) {\n    super(radius, radius);\n    this.radius = radius;\n  }\n  setRadius(radius) {\n    super.scale(radius / this.radius);\n    this.radius = radius;\n  }\n}\nclass Rectangle {\n  ratio = 1;\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n    this.ratio = width / height;\n  }\n  scale(x) {\n    this.width *= x;\n    this.height *= x;\n  }\n}\nclass Square extends Rectangle {\n  constructor(sideLength) {\n    super(sideLength, sideLength);\n    this.sideLength = sideLength;\n  }\n}\nclass X {\n  constructor(lineOneLength, lineTwoLength) {\n    let lineWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;\n    this.lineOneLength = lineOneLength;\n    this.lineTwoLength = lineTwoLength;\n    this.lineWidth = lineWidth;\n  }\n  scale(x) {\n    this.lineOneLength *= x;\n    this.lineTwoLength *= x;\n    this.lineWidth *= x;\n  }\n}\nclass Thing {\n  /**\n   * The center position of the thing\n   */\n\n  /**\n   * The shape of the thing\n   */\n\n  /**\n   * The fill color of the thing, if applicable\n   */\n\n  /**\n   * The stroke color of the thing, if applicable\n   */\n\n  /**\n   * The stroke width of the thing, if applicable\n   */\n\n  /**\n   * Whether or not the thing should be filled\n   */\n  fill = true;\n  /**\n   * Whether or not the thing should be stroked\n   */\n  stroke = true;\n  /**\n   * The fill rule\n   */\n  fillRule = \"nonzero\";\n  /**\n   * Displayed\n   */\n  display = true;\n  /**\n   * Determines the shape used to draw the end points of lines.\n   *\n   * `butt` - The ends of lines are squared off at the endpoints. Default value.\n   *\n   * `round` - The ends of lines are rounded.\n   *\n   * `square` - The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.\n   */\n  lineCap = \"butt\";\n  /**\n   * Determines the shape used to join two line segments where they meet.\n   *\n   * This property has no effect wherever two connected segments have the same direction, because no joining area will be added in this case. Degenerate segments with a length of zero (i.e., with all endpoints and control points at the exact same position) are also ignored.\n   *\n   * There are three possible values for this property: `round`, `bevel`, and `miter`. The default is `miter`.\n   */\n  lineJoin = \"miter\";\n  /**\n   * Sets the miter limit ratio.\n   * A number specifying the miter limit ratio, in coordinate space units. Zero, negative, Infinity, and NaN values are ignored. The default value is 10.0.\n   */\n  miterLimit = 10;\n  constructor() {\n    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    this.position = options.position ?? new Vector2(0, 0);\n    this.shape = options.shape ?? new Circle(10);\n    this.fillStyle = options.fillStyle;\n    this.strokeStyle = options.strokeStyle;\n    this.strokeWidth = options.strokeWidth;\n    this.fill = options.fill ?? true;\n    this.stroke = options.stroke ?? true;\n    this.fillRule = options.fillRule ?? \"nonzero\";\n    this.display = options.display ?? true;\n    this.lineCap = options.lineCap ?? \"butt\";\n    this.lineJoin = options.lineJoin ?? \"miter\";\n    this.miterLimit = options.miterLimit ?? 10;\n  }\n  draw(ctx, elapsed, gameEvent) {\n    if (!this.display) return;\n    draw(this, ctx);\n  }\n  remove() {\n    _game_ts__WEBPACK_IMPORTED_MODULE_0__.mapLayer.filter(m => m !== this);\n    _game_ts__WEBPACK_IMPORTED_MODULE_0__.overlayLayer.filter(m => m !== this);\n  }\n}\nfunction isInBounds(point, thing) {\n  if (thing.shape instanceof Circle) return (point.x - thing.position.x) ** 2 + (point.y - thing.position.y) ** 2 < thing.shape.radius ** 2;else if (thing.shape instanceof Ellipse) {\n    // Get the transformed point relative to the ellipse center\n    const transformedPoint = new Vector2((point.x - thing.position.x) * Math.cos(-thing.shape.rotation) - (point.y - thing.position.y) * Math.sin(-thing.shape.rotation), (point.x - thing.position.x) * Math.sin(-thing.shape.rotation) + (point.y - thing.position.y) * Math.cos(-thing.shape.rotation));\n    return (transformedPoint.x / thing.shape.radiusX) ** 2 + (transformedPoint.y / thing.shape.radiusY) ** 2 <= 1;\n  } else if (thing.shape instanceof Rectangle) {\n    return point.x >= thing.position.x - thing.shape.width / 2 && point.x <= thing.position.x + thing.shape.width / 2 && point.y >= thing.position.y - thing.shape.height / 2 && point.y <= thing.position.y + thing.shape.height / 2;\n  } else if (thing.shape instanceof X) {\n    // Use an ellipse for bounds check.\n    let radius = Math.max(thing.shape.lineOneLength, thing.shape.lineTwoLength) / 2;\n    return (point.x - thing.position.x) ** 2 + (point.y - thing.position.y) ** 2 < radius ** 2;\n  }\n}\nfunction draw(thing, ctx) {\n  if (!thing.display) return;\n  ctx.beginPath();\n  if (thing.fillStyle) ctx.fillStyle = thing.fillStyle;\n  if (thing.strokeStyle) ctx.strokeStyle = thing.strokeStyle;\n  if (thing.strokeWidth) ctx.lineWidth = thing.strokeWidth;\n  if (thing.lineCap) ctx.lineCap = thing.lineCap;\n  if (thing.lineJoin) ctx.lineJoin = thing.lineJoin;\n  if (thing.miterLimit) ctx.miterLimit = thing.miterLimit;\n  if (thing.shape instanceof Ellipse) {\n    ctx.ellipse(thing.position.x, thing.position.y, thing.shape.radiusX, thing.shape.radiusY, thing.shape.rotation, 0, 2 * Math.PI);\n  } else if (thing.shape instanceof Rectangle) {\n    ctx.rect(thing.position.x - thing.shape.width / 2, thing.position.y - thing.shape.height / 2, thing.shape.width, thing.shape.height);\n  } else if (thing.shape instanceof X) {\n    ctx.lineJoin = \"round\";\n    let sqrt2 = Math.sqrt(2);\n    let lineOneSideLength = thing.shape.lineOneLength / sqrt2;\n    let lineTwoSideLength = thing.shape.lineTwoLength / sqrt2;\n    ctx.moveTo(thing.position.x - lineOneSideLength / 2, thing.position.y - lineOneSideLength / 2);\n    ctx.lineTo(thing.position.x + lineOneSideLength / 2, thing.position.y + lineOneSideLength / 2);\n    ctx.moveTo(thing.position.x - lineTwoSideLength / 2, thing.position.y + lineTwoSideLength / 2);\n    ctx.lineTo(thing.position.x + lineTwoSideLength / 2, thing.position.y - lineTwoSideLength / 2);\n  } else {\n    console.log(\"Unknown shape:\", thing.shape);\n  }\n  if (thing.fill) {\n    ctx.closePath();\n    ctx.fill(thing.fillRule);\n  }\n  if (thing.stroke) ctx.stroke();\n}\nfunction getDistance2D(a, b) {\n  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);\n}\nfunction getDistance3D(a, b) {\n  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2);\n}\n// let t: Thing<Square> = {\n// \tposition: new Vector2(1, 1),\n// \tshape: new Square(2),\n// };\n// console.log(\"isInBounds:\", isInBounds({ x: 1, y: 1 }, t));\n\n//# sourceURL=webpack://civ/./public/js/shapes.ts?");

/***/ }),

/***/ "./public/js/substance.ts":
/*!********************************!*\
  !*** ./public/js/substance.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Substance: () => (/* binding */ Substance),\n/* harmony export */   substances: () => (/* binding */ substances)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n\nlet substances = [];\nclass Substance {\n  constructor(name, render_color, chemical_formula, relative_abundance) {\n    this.name = name;\n    this.render_color = render_color;\n    this.chemical_formula = chemical_formula;\n    this.relative_abundance = relative_abundance / 5; // 1 (Very rare) - 5 (Very common)\n    substances.push(this);\n  }\n}\n\n// Common building materials (all common: 4)\n// new Substance(\"Sand\", \"#F5DD9E\", \"SiO2\", 5);\n// new Substance(\"Clay\", \"#C67D4A\", \"Al2Si2O5(OH)4\", 4);\n// new Substance(\"Limestone\", \"#E0C09B\", \"CaCO3\", 4);\n\n// Commonly used metals (varied abundance)\nnew Substance(\"Gold\", \"#FFD700\", \"Au\", 1); // Rare\nnew Substance(\"Iron\", \"#D4D7D8\", \"Fe\", 4); // Abundant\nnew Substance(\"Copper\", \"#B76B1E\", \"Cu\", 3); // Common\nnew Substance(\"Silver\", \"#C0C0C0\", \"Ag\", 2); // Less common than copper\n\n// Gems and jewelry materials (all rare: 1)\nnew Substance(\"Diamond\", \"#FFF\", \"C\", 1);\n// new Substance(\"Ruby\", \"#DC143C\", \"Al2O3 (impurities)\", 1);\n// new Substance(\"Sapphire\", \"#007FFF\", \"Al2O3 (impurities)\", 1);\n// new Substance(\"Emerald\", \"#2F8030\", \"Be3Al2Si6O18 (impurities)\", 1);\n\n// Other useful substances (varied abundance)\n// new Substance(\"Salt (Rock Salt)\", \"#F0EAEA\", \"NaCl\", 4); // Abundant\n// new Substance(\"Coal\", \"#1B1B1B\", \"C (various)\", 3); // Common\n// new Substance(\"Sulfur\", \"#FFFF00\", \"S\", 2); // Less common\n// new Substance(\"Graphite\", \"#696969\", \"C\", 3); // Common\n\n// Natural materials for tools or art (varied abundance)\n// new Substance(\"Flint\", \"#191919\", \"SiO2\", 2); // Less common\n// new Substance(\"Obsidian\", \"#121212\", \"SiO2, MgO, Fe3O4\", 3); // Common\n// new Substance(\"Amber\", \"#FFC107\", \"C4H10O\", 2); // Less common\n\n// More substances (varied abundance)\n// new Substance(\"Chalk\", \"#F5F5F5\", \"CaCO3\", 4); // Abundant\n// new Substance(\"Marble\", \"#FDFEFE\", \"CaCO3\", 3); // Common\n// new Substance(\"Granite\", \"#C0C0C0\", \"Varies\", 3); // Common\n// new Substance(\"Gypsum\", \"#C2C2F0\", \"CaSO4·2H2O\", 3); // Common\n// new Substance(\"Mica\", \"#EFEFEF\", \"KAl2(AlSi3O10)(OH)2\", 2); // Less common\n// new Substance(\"Sandstone\", \"#F4C430\", \"SiO2\", 4); // Abundant\n\n\n\n//# sourceURL=webpack://civ/./public/js/substance.ts?");

/***/ }),

/***/ "./public/js/utils.ts":
/*!****************************!*\
  !*** ./public/js/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PRNG: () => (/* binding */ PRNG)\n/* harmony export */ });\nfunction PRNG() {\n  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();\n  return function () {\n    state ^= state << 13;\n    state ^= state >> 17;\n    state ^= state << 5;\n    return state >>> 0; // Ensure unsigned integer\n  };\n}\n\n//# sourceURL=webpack://civ/./public/js/utils.ts?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-callable.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-callable.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\n\nvar $TypeError = TypeError;\n\n// `Assert: IsCallable(argument) is true`\nmodule.exports = function (argument) {\n  if (isCallable(argument)) return argument;\n  throw new $TypeError(tryToString(argument) + ' is not a function');\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/a-callable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isPossiblePrototype = __webpack_require__(/*! ../internals/is-possible-prototype */ \"./node_modules/core-js/internals/is-possible-prototype.js\");\n\nvar $String = String;\nvar $TypeError = TypeError;\n\nmodule.exports = function (argument) {\n  if (isPossiblePrototype(argument)) return argument;\n  throw new $TypeError(\"Can't set \" + $String(argument) + ' as a prototype');\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/a-possible-prototype.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/a-set.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar has = (__webpack_require__(/*! ../internals/set-helpers */ \"./node_modules/core-js/internals/set-helpers.js\").has);\n\n// Perform ? RequireInternalSlot(M, [[SetData]])\nmodule.exports = function (it) {\n  has(it);\n  return it;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/a-set.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar $String = String;\nvar $TypeError = TypeError;\n\n// `Assert: Type(argument) is Object`\nmodule.exports = function (argument) {\n  if (isObject(argument)) return argument;\n  throw new $TypeError($String(argument) + ' is not an object');\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-basic-detection.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-basic-detection.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("\n// eslint-disable-next-line es/no-typed-arrays -- safe\nmodule.exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/array-buffer-basic-detection.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-byte-length.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-byte-length.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThisAccessor = __webpack_require__(/*! ../internals/function-uncurry-this-accessor */ \"./node_modules/core-js/internals/function-uncurry-this-accessor.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar $TypeError = TypeError;\n\n// Includes\n// - Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).\n// - If IsSharedArrayBuffer(O) is true, throw a TypeError exception.\nmodule.exports = uncurryThisAccessor(ArrayBuffer.prototype, 'byteLength', 'get') || function (O) {\n  if (classof(O) !== 'ArrayBuffer') throw new $TypeError('ArrayBuffer expected');\n  return O.byteLength;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/array-buffer-byte-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-is-detached.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-is-detached.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar arrayBufferByteLength = __webpack_require__(/*! ../internals/array-buffer-byte-length */ \"./node_modules/core-js/internals/array-buffer-byte-length.js\");\n\nvar slice = uncurryThis(ArrayBuffer.prototype.slice);\n\nmodule.exports = function (O) {\n  if (arrayBufferByteLength(O) !== 0) return false;\n  try {\n    slice(O, 0, 0);\n    return false;\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/array-buffer-is-detached.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-transfer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-transfer.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar uncurryThisAccessor = __webpack_require__(/*! ../internals/function-uncurry-this-accessor */ \"./node_modules/core-js/internals/function-uncurry-this-accessor.js\");\nvar toIndex = __webpack_require__(/*! ../internals/to-index */ \"./node_modules/core-js/internals/to-index.js\");\nvar isDetached = __webpack_require__(/*! ../internals/array-buffer-is-detached */ \"./node_modules/core-js/internals/array-buffer-is-detached.js\");\nvar arrayBufferByteLength = __webpack_require__(/*! ../internals/array-buffer-byte-length */ \"./node_modules/core-js/internals/array-buffer-byte-length.js\");\nvar detachTransferable = __webpack_require__(/*! ../internals/detach-transferable */ \"./node_modules/core-js/internals/detach-transferable.js\");\nvar PROPER_STRUCTURED_CLONE_TRANSFER = __webpack_require__(/*! ../internals/structured-clone-proper-transfer */ \"./node_modules/core-js/internals/structured-clone-proper-transfer.js\");\n\nvar structuredClone = global.structuredClone;\nvar ArrayBuffer = global.ArrayBuffer;\nvar DataView = global.DataView;\nvar TypeError = global.TypeError;\nvar min = Math.min;\nvar ArrayBufferPrototype = ArrayBuffer.prototype;\nvar DataViewPrototype = DataView.prototype;\nvar slice = uncurryThis(ArrayBufferPrototype.slice);\nvar isResizable = uncurryThisAccessor(ArrayBufferPrototype, 'resizable', 'get');\nvar maxByteLength = uncurryThisAccessor(ArrayBufferPrototype, 'maxByteLength', 'get');\nvar getInt8 = uncurryThis(DataViewPrototype.getInt8);\nvar setInt8 = uncurryThis(DataViewPrototype.setInt8);\n\nmodule.exports = (PROPER_STRUCTURED_CLONE_TRANSFER || detachTransferable) && function (arrayBuffer, newLength, preserveResizability) {\n  var byteLength = arrayBufferByteLength(arrayBuffer);\n  var newByteLength = newLength === undefined ? byteLength : toIndex(newLength);\n  var fixedLength = !isResizable || !isResizable(arrayBuffer);\n  var newBuffer;\n  if (isDetached(arrayBuffer)) throw new TypeError('ArrayBuffer is detached');\n  if (PROPER_STRUCTURED_CLONE_TRANSFER) {\n    arrayBuffer = structuredClone(arrayBuffer, { transfer: [arrayBuffer] });\n    if (byteLength === newByteLength && (preserveResizability || fixedLength)) return arrayBuffer;\n  }\n  if (byteLength >= newByteLength && (!preserveResizability || fixedLength)) {\n    newBuffer = slice(arrayBuffer, 0, newByteLength);\n  } else {\n    var options = preserveResizability && !fixedLength && maxByteLength ? { maxByteLength: maxByteLength(arrayBuffer) } : undefined;\n    newBuffer = new ArrayBuffer(newByteLength, options);\n    var a = new DataView(arrayBuffer);\n    var b = new DataView(newBuffer);\n    var copyLength = min(newByteLength, byteLength);\n    for (var i = 0; i < copyLength; i++) setInt8(b, i, getInt8(a, i));\n  }\n  if (!PROPER_STRUCTURED_CLONE_TRANSFER) detachTransferable(arrayBuffer);\n  return newBuffer;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/array-buffer-transfer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-view-core.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-view-core.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar NATIVE_ARRAY_BUFFER = __webpack_require__(/*! ../internals/array-buffer-basic-detection */ \"./node_modules/core-js/internals/array-buffer-basic-detection.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js/internals/define-built-in.js\");\nvar defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ \"./node_modules/core-js/internals/define-built-in-accessor.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar enforceInternalState = InternalStateModule.enforce;\nvar getInternalState = InternalStateModule.get;\nvar Int8Array = global.Int8Array;\nvar Int8ArrayPrototype = Int8Array && Int8Array.prototype;\nvar Uint8ClampedArray = global.Uint8ClampedArray;\nvar Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;\nvar TypedArray = Int8Array && getPrototypeOf(Int8Array);\nvar TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);\nvar ObjectPrototype = Object.prototype;\nvar TypeError = global.TypeError;\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');\nvar TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';\n// Fixing native typed arrays in Opera Presto crashes the browser, see #595\nvar NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';\nvar TYPED_ARRAY_TAG_REQUIRED = false;\nvar NAME, Constructor, Prototype;\n\nvar TypedArrayConstructorsList = {\n  Int8Array: 1,\n  Uint8Array: 1,\n  Uint8ClampedArray: 1,\n  Int16Array: 2,\n  Uint16Array: 2,\n  Int32Array: 4,\n  Uint32Array: 4,\n  Float32Array: 4,\n  Float64Array: 8\n};\n\nvar BigIntArrayConstructorsList = {\n  BigInt64Array: 8,\n  BigUint64Array: 8\n};\n\nvar isView = function isView(it) {\n  if (!isObject(it)) return false;\n  var klass = classof(it);\n  return klass === 'DataView'\n    || hasOwn(TypedArrayConstructorsList, klass)\n    || hasOwn(BigIntArrayConstructorsList, klass);\n};\n\nvar getTypedArrayConstructor = function (it) {\n  var proto = getPrototypeOf(it);\n  if (!isObject(proto)) return;\n  var state = getInternalState(proto);\n  return (state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);\n};\n\nvar isTypedArray = function (it) {\n  if (!isObject(it)) return false;\n  var klass = classof(it);\n  return hasOwn(TypedArrayConstructorsList, klass)\n    || hasOwn(BigIntArrayConstructorsList, klass);\n};\n\nvar aTypedArray = function (it) {\n  if (isTypedArray(it)) return it;\n  throw new TypeError('Target is not a typed array');\n};\n\nvar aTypedArrayConstructor = function (C) {\n  if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;\n  throw new TypeError(tryToString(C) + ' is not a typed array constructor');\n};\n\nvar exportTypedArrayMethod = function (KEY, property, forced, options) {\n  if (!DESCRIPTORS) return;\n  if (forced) for (var ARRAY in TypedArrayConstructorsList) {\n    var TypedArrayConstructor = global[ARRAY];\n    if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {\n      delete TypedArrayConstructor.prototype[KEY];\n    } catch (error) {\n      // old WebKit bug - some methods are non-configurable\n      try {\n        TypedArrayConstructor.prototype[KEY] = property;\n      } catch (error2) { /* empty */ }\n    }\n  }\n  if (!TypedArrayPrototype[KEY] || forced) {\n    defineBuiltIn(TypedArrayPrototype, KEY, forced ? property\n      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);\n  }\n};\n\nvar exportTypedArrayStaticMethod = function (KEY, property, forced) {\n  var ARRAY, TypedArrayConstructor;\n  if (!DESCRIPTORS) return;\n  if (setPrototypeOf) {\n    if (forced) for (ARRAY in TypedArrayConstructorsList) {\n      TypedArrayConstructor = global[ARRAY];\n      if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {\n        delete TypedArrayConstructor[KEY];\n      } catch (error) { /* empty */ }\n    }\n    if (!TypedArray[KEY] || forced) {\n      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable\n      try {\n        return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);\n      } catch (error) { /* empty */ }\n    } else return;\n  }\n  for (ARRAY in TypedArrayConstructorsList) {\n    TypedArrayConstructor = global[ARRAY];\n    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {\n      defineBuiltIn(TypedArrayConstructor, KEY, property);\n    }\n  }\n};\n\nfor (NAME in TypedArrayConstructorsList) {\n  Constructor = global[NAME];\n  Prototype = Constructor && Constructor.prototype;\n  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;\n  else NATIVE_ARRAY_BUFFER_VIEWS = false;\n}\n\nfor (NAME in BigIntArrayConstructorsList) {\n  Constructor = global[NAME];\n  Prototype = Constructor && Constructor.prototype;\n  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;\n}\n\n// WebKit bug - typed arrays constructors prototype is Object.prototype\nif (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {\n  // eslint-disable-next-line no-shadow -- safe\n  TypedArray = function TypedArray() {\n    throw new TypeError('Incorrect invocation');\n  };\n  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {\n    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);\n  }\n}\n\nif (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {\n  TypedArrayPrototype = TypedArray.prototype;\n  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {\n    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);\n  }\n}\n\n// WebKit bug - one more object in Uint8ClampedArray prototype chain\nif (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {\n  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);\n}\n\nif (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {\n  TYPED_ARRAY_TAG_REQUIRED = true;\n  defineBuiltInAccessor(TypedArrayPrototype, TO_STRING_TAG, {\n    configurable: true,\n    get: function () {\n      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;\n    }\n  });\n  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {\n    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);\n  }\n}\n\nmodule.exports = {\n  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,\n  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,\n  aTypedArray: aTypedArray,\n  aTypedArrayConstructor: aTypedArrayConstructor,\n  exportTypedArrayMethod: exportTypedArrayMethod,\n  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,\n  getTypedArrayConstructor: getTypedArrayConstructor,\n  isView: isView,\n  isTypedArray: isTypedArray,\n  TypedArray: TypedArray,\n  TypedArrayPrototype: TypedArrayPrototype\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/array-buffer-view-core.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-from-constructor-and-list.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-from-constructor-and-list.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nmodule.exports = function (Constructor, list, $length) {\n  var index = 0;\n  var length = arguments.length > 2 ? $length : lengthOfArrayLike(list);\n  var result = new Constructor(length);\n  while (length > index) result[index] = list[index++];\n  return result;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/array-from-constructor-and-list.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = lengthOfArrayLike(O);\n    if (length === 0) return !IS_INCLUDES && -1;\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare -- NaN check\n    if (IS_INCLUDES && el !== el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare -- NaN check\n      if (value !== value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.es/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.es/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-set-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/array-set-length.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\n\nvar $TypeError = TypeError;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Safari < 13 does not throw an error in this case\nvar SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {\n  // makes no sense without proper strict mode support\n  if (this !== undefined) return true;\n  try {\n    // eslint-disable-next-line es/no-object-defineproperty -- safe\n    Object.defineProperty([], 'length', { writable: false }).length = 1;\n  } catch (error) {\n    return error instanceof TypeError;\n  }\n}();\n\nmodule.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {\n  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {\n    throw new $TypeError('Cannot set read only .length');\n  } return O.length = length;\n} : function (O, length) {\n  return O.length = length;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/array-set-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-to-reversed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/array-to-reversed.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\n// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed\n// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed\nmodule.exports = function (O, C) {\n  var len = lengthOfArrayLike(O);\n  var A = new C(len);\n  var k = 0;\n  for (; k < len; k++) A[k] = O[len - k - 1];\n  return A;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/array-to-reversed.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-with.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-with.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar $RangeError = RangeError;\n\n// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with\n// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.with\nmodule.exports = function (O, C, index, value) {\n  var len = lengthOfArrayLike(O);\n  var relativeIndex = toIntegerOrInfinity(index);\n  var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;\n  if (actualIndex >= len || actualIndex < 0) throw new $RangeError('Incorrect index');\n  var A = new C(len);\n  var k = 0;\n  for (; k < len; k++) A[k] = k === actualIndex ? value : O[k];\n  return A;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/array-with.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar toString = uncurryThis({}.toString);\nvar stringSlice = uncurryThis(''.slice);\n\nmodule.exports = function (it) {\n  return stringSlice(toString(it), 8, -1);\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar $Object = Object;\n\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/classof.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source, exceptions) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {\n      defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n    }\n  }\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() { /* empty */ }\n  F.prototype.constructor = null;\n  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/correct-prototype-getter.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/define-built-in-accessor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-in-accessor.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ \"./node_modules/core-js/internals/make-built-in.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, name, descriptor) {\n  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });\n  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });\n  return defineProperty.f(target, name, descriptor);\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/define-built-in-accessor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/define-built-in.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-in.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ \"./node_modules/core-js/internals/make-built-in.js\");\nvar defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ \"./node_modules/core-js/internals/define-global-property.js\");\n\nmodule.exports = function (O, key, value, options) {\n  if (!options) options = {};\n  var simple = options.enumerable;\n  var name = options.name !== undefined ? options.name : key;\n  if (isCallable(value)) makeBuiltIn(value, name, options);\n  if (options.global) {\n    if (simple) O[key] = value;\n    else defineGlobalProperty(key, value);\n  } else {\n    try {\n      if (!options.unsafe) delete O[key];\n      else if (O[key]) simple = true;\n    } catch (error) { /* empty */ }\n    if (simple) O[key] = value;\n    else definePropertyModule.f(O, key, {\n      value: value,\n      enumerable: false,\n      configurable: !options.nonConfigurable,\n      writable: !options.nonWritable\n    });\n  } return O;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/define-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/define-global-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/define-global-property.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar defineProperty = Object.defineProperty;\n\nmodule.exports = function (key, value) {\n  try {\n    defineProperty(global, key, { value: value, configurable: true, writable: true });\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/define-global-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// Detect IE8's incomplete defineProperty implementation\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/detach-transferable.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/detach-transferable.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar tryNodeRequire = __webpack_require__(/*! ../internals/try-node-require */ \"./node_modules/core-js/internals/try-node-require.js\");\nvar PROPER_STRUCTURED_CLONE_TRANSFER = __webpack_require__(/*! ../internals/structured-clone-proper-transfer */ \"./node_modules/core-js/internals/structured-clone-proper-transfer.js\");\n\nvar structuredClone = global.structuredClone;\nvar $ArrayBuffer = global.ArrayBuffer;\nvar $MessageChannel = global.MessageChannel;\nvar detach = false;\nvar WorkerThreads, channel, buffer, $detach;\n\nif (PROPER_STRUCTURED_CLONE_TRANSFER) {\n  detach = function (transferable) {\n    structuredClone(transferable, { transfer: [transferable] });\n  };\n} else if ($ArrayBuffer) try {\n  if (!$MessageChannel) {\n    WorkerThreads = tryNodeRequire('worker_threads');\n    if (WorkerThreads) $MessageChannel = WorkerThreads.MessageChannel;\n  }\n\n  if ($MessageChannel) {\n    channel = new $MessageChannel();\n    buffer = new $ArrayBuffer(2);\n\n    $detach = function (transferable) {\n      channel.port1.postMessage(null, [transferable]);\n    };\n\n    if (buffer.byteLength === 2) {\n      $detach(buffer);\n      if (buffer.byteLength === 0) detach = $detach;\n    }\n  }\n} catch (error) { /* empty */ }\n\nmodule.exports = detach;\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/detach-transferable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/does-not-exceed-safe-integer.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("\nvar $TypeError = TypeError;\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991\n\nmodule.exports = function (it) {\n  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');\n  return it;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/does-not-exceed-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-browser.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-browser.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar IS_DENO = __webpack_require__(/*! ../internals/engine-is-deno */ \"./node_modules/core-js/internals/engine-is-deno.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\n\nmodule.exports = !IS_DENO && !IS_NODE\n  && typeof window == 'object'\n  && typeof document == 'object';\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/engine-is-browser.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-deno.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-deno.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\n/* global Deno -- Deno case */\nmodule.exports = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/engine-is-deno.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-node.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-node.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nmodule.exports = classof(global.process) === 'process';\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/engine-is-node.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/engine-user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar Deno = global.Deno;\nvar versions = process && process.versions || Deno && Deno.version;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  // in old Chrome, versions of V8 isn't V8 = Chrome / 10\n  // but their correct versions are not interesting for us\n  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);\n}\n\n// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`\n// so check `userAgent` even if `.v8` exists, but 0\nif (!version && userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = +match[1];\n  }\n}\n\nmodule.exports = version;\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/engine-v8-version.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js/internals/define-built-in.js\");\nvar defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ \"./node_modules/core-js/internals/define-global-property.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\n/*\n  options.target         - name of the target object\n  options.global         - target is the global object\n  options.stat           - export as static methods of target\n  options.proto          - export as prototype methods of target\n  options.real           - real prototype method for the `pure` version\n  options.forced         - export even if the native feature is available\n  options.bind           - bind methods to the target, required for the `pure` version\n  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe         - use the simple assignment of property instead of delete + defineProperty\n  options.sham           - add a flag to not completely full polyfills\n  options.enumerable     - export as enumerable property\n  options.dontCallGetSet - prevent calling a getter on target\n  options.name           - the .name of the function if it does not match the key\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || defineGlobalProperty(TARGET, {});\n  } else {\n    target = global[TARGET] && global[TARGET].prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.dontCallGetSet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty == typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    }\n    defineBuiltIn(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\nmodule.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-native.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-native.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-function-prototype-bind -- safe\n  var test = (function () { /* empty */ }).bind();\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return typeof test != 'function' || test.hasOwnProperty('prototype');\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/function-bind-native.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-call.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-call.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js/internals/function-bind-native.js\");\n\nvar call = Function.prototype.call;\n\nmodule.exports = NATIVE_BIND ? call.bind(call) : function () {\n  return call.apply(call, arguments);\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/function-call.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-name.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-name.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar FunctionPrototype = Function.prototype;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;\n\nvar EXISTS = hasOwn(FunctionPrototype, 'name');\n// additional protection from minified / mangled / dropped function names\nvar PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';\nvar CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));\n\nmodule.exports = {\n  EXISTS: EXISTS,\n  PROPER: PROPER,\n  CONFIGURABLE: CONFIGURABLE\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/function-name.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this-accessor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this-accessor.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\n\nmodule.exports = function (object, key, method) {\n  try {\n    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\n    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));\n  } catch (error) { /* empty */ }\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/function-uncurry-this-accessor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js/internals/function-bind-native.js\");\n\nvar FunctionPrototype = Function.prototype;\nvar call = FunctionPrototype.call;\nvar uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);\n\nmodule.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {\n  return function () {\n    return call.apply(fn, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/function-uncurry-this.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar aFunction = function (argument) {\n  return isCallable(argument) ? argument : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-direct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-direct.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n// `GetIteratorDirect(obj)` abstract operation\n// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect\nmodule.exports = function (obj) {\n  return {\n    iterator: obj,\n    next: obj.next,\n    done: false\n  };\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/get-iterator-direct.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-method.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/get-method.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js/internals/is-null-or-undefined.js\");\n\n// `GetMethod` abstract operation\n// https://tc39.es/ecma262/#sec-getmethod\nmodule.exports = function (V, P) {\n  var func = V[P];\n  return isNullOrUndefined(func) ? undefined : aCallable(func);\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/get-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-set-record.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/get-set-record.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\nvar getIteratorDirect = __webpack_require__(/*! ../internals/get-iterator-direct */ \"./node_modules/core-js/internals/get-iterator-direct.js\");\n\nvar INVALID_SIZE = 'Invalid size';\nvar $RangeError = RangeError;\nvar $TypeError = TypeError;\nvar max = Math.max;\n\nvar SetRecord = function (set, intSize) {\n  this.set = set;\n  this.size = max(intSize, 0);\n  this.has = aCallable(set.has);\n  this.keys = aCallable(set.keys);\n};\n\nSetRecord.prototype = {\n  getIterator: function () {\n    return getIteratorDirect(anObject(call(this.keys, this.set)));\n  },\n  includes: function (it) {\n    return call(this.has, this.set, it);\n  }\n};\n\n// `GetSetRecord` abstract operation\n// https://tc39.es/proposal-set-methods/#sec-getsetrecord\nmodule.exports = function (obj) {\n  anObject(obj);\n  var numSize = +obj.size;\n  // NOTE: If size is undefined, then numSize will be NaN\n  // eslint-disable-next-line no-self-compare -- NaN check\n  if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);\n  var intSize = toIntegerOrInfinity(numSize);\n  if (intSize < 0) throw new $RangeError(INVALID_SIZE);\n  return new SetRecord(obj, intSize);\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/get-set-record.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\nvar check = function (it) {\n  return it && it.Math === Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line es/no-global-this -- safe\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  // eslint-disable-next-line no-restricted-globals -- safe\n  check(typeof self == 'object' && self) ||\n  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||\n  check(typeof this == 'object' && this) ||\n  // eslint-disable-next-line no-new-func -- fallback\n  (function () { return this; })() || Function('return this')();\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/has-own-property.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/has-own-property.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar hasOwnProperty = uncurryThis({}.hasOwnProperty);\n\n// `HasOwnProperty` abstract operation\n// https://tc39.es/ecma262/#sec-hasownproperty\n// eslint-disable-next-line es/no-object-hasown -- safe\nmodule.exports = Object.hasOwn || function hasOwn(it, key) {\n  return hasOwnProperty(toObject(it), key);\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/has-own-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("\nmodule.exports = {};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\n// Thanks to IE8 for its funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a !== 7;\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar $Object = Object;\nvar split = uncurryThis(''.split);\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return !$Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) === 'String' ? split(it, '') : $Object(it);\n} : $Object;\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\nvar functionToString = uncurryThis(Function.toString);\n\n// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper\nif (!isCallable(store.inspectSource)) {\n  store.inspectSource = function (it) {\n    return functionToString(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ \"./node_modules/core-js/internals/weak-map-basic-detection.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar shared = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar OBJECT_ALREADY_INITIALIZED = 'Object already initialized';\nvar TypeError = global.TypeError;\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP || shared.state) {\n  var store = shared.state || (shared.state = new WeakMap());\n  /* eslint-disable no-self-assign -- prototype methods protection */\n  store.get = store.get;\n  store.has = store.has;\n  store.set = store.set;\n  /* eslint-enable no-self-assign -- prototype methods protection */\n  set = function (it, metadata) {\n    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    store.set(it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return store.get(it) || {};\n  };\n  has = function (it) {\n    return store.has(it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return hasOwn(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return hasOwn(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.es/ecma262/#sec-isarray\n// eslint-disable-next-line es/no-array-isarray -- safe\nmodule.exports = Array.isArray || function isArray(argument) {\n  return classof(argument) === 'Array';\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-big-int-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/is-big-int-array.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\n\nmodule.exports = function (it) {\n  var klass = classof(it);\n  return klass === 'BigInt64Array' || klass === 'BigUint64Array';\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/is-big-int-array.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/is-callable.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("\n// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot\nvar documentAll = typeof document == 'object' && document.all;\n\n// `IsCallable` abstract operation\n// https://tc39.es/ecma262/#sec-iscallable\n// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing\nmodule.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {\n  return typeof argument == 'function' || argument === documentAll;\n} : function (argument) {\n  return typeof argument == 'function';\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/is-callable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value === POLYFILL ? true\n    : value === NATIVE ? false\n    : isCallable(detection) ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-null-or-undefined.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/is-null-or-undefined.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\n// we can't use just `it == null` since of `document.all` special case\n// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec\nmodule.exports = function (it) {\n  return it === null || it === undefined;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/is-null-or-undefined.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nmodule.exports = function (it) {\n  return typeof it == 'object' ? it !== null : isCallable(it);\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-possible-prototype.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/is-possible-prototype.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (argument) {\n  return isObject(argument) || argument === null;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/is-possible-prototype.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\nmodule.exports = false;\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-symbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-symbol.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar $Object = Object;\n\nmodule.exports = USE_SYMBOL_AS_UID ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  var $Symbol = getBuiltIn('Symbol');\n  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/is-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterate-simple.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterate-simple.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\n\nmodule.exports = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {\n  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;\n  var next = record.next;\n  var step, result;\n  while (!(step = call(next, iterator)).done) {\n    result = fn(step.value);\n    if (result !== undefined) return result;\n  }\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/iterate-simple.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\n\nmodule.exports = function (iterator, kind, value) {\n  var innerResult, innerError;\n  anObject(iterator);\n  try {\n    innerResult = getMethod(iterator, 'return');\n    if (!innerResult) {\n      if (kind === 'throw') throw value;\n      return value;\n    }\n    innerResult = call(innerResult, iterator);\n  } catch (error) {\n    innerError = true;\n    innerResult = error;\n  }\n  if (kind === 'throw') throw value;\n  if (innerError) throw innerResult;\n  anObject(innerResult);\n  return value;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/iterator-close.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/length-of-array-like.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/length-of-array-like.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\n// `LengthOfArrayLike` abstract operation\n// https://tc39.es/ecma262/#sec-lengthofarraylike\nmodule.exports = function (obj) {\n  return toLength(obj.length);\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/length-of-array-like.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/make-built-in.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/make-built-in.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js/internals/function-name.js\").CONFIGURABLE);\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar enforceInternalState = InternalStateModule.enforce;\nvar getInternalState = InternalStateModule.get;\nvar $String = String;\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar defineProperty = Object.defineProperty;\nvar stringSlice = uncurryThis(''.slice);\nvar replace = uncurryThis(''.replace);\nvar join = uncurryThis([].join);\n\nvar CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {\n  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;\n});\n\nvar TEMPLATE = String(String).split('String');\n\nvar makeBuiltIn = module.exports = function (value, name, options) {\n  if (stringSlice($String(name), 0, 7) === 'Symbol(') {\n    name = '[' + replace($String(name), /^Symbol\\(([^)]*)\\).*$/, '$1') + ']';\n  }\n  if (options && options.getter) name = 'get ' + name;\n  if (options && options.setter) name = 'set ' + name;\n  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {\n    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });\n    else value.name = name;\n  }\n  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {\n    defineProperty(value, 'length', { value: options.arity });\n  }\n  try {\n    if (options && hasOwn(options, 'constructor') && options.constructor) {\n      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });\n    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable\n    } else if (value.prototype) value.prototype = undefined;\n  } catch (error) { /* empty */ }\n  var state = enforceInternalState(value);\n  if (!hasOwn(state, 'source')) {\n    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');\n  } return value;\n};\n\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n// eslint-disable-next-line no-extend-native -- required\nFunction.prototype.toString = makeBuiltIn(function toString() {\n  return isCallable(this) && getInternalState(this).source || inspectSource(this);\n}, 'toString');\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/make-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/math-trunc.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/math-trunc.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\nvar ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `Math.trunc` method\n// https://tc39.es/ecma262/#sec-math.trunc\n// eslint-disable-next-line es/no-math-trunc -- safe\nmodule.exports = Math.trunc || function trunc(x) {\n  var n = +x;\n  return (n > 0 ? floor : ceil)(n);\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/math-trunc.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\nvar V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ \"./node_modules/core-js/internals/v8-prototype-define-bug.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\n\nvar $TypeError = TypeError;\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar $defineProperty = Object.defineProperty;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nvar ENUMERABLE = 'enumerable';\nvar CONFIGURABLE = 'configurable';\nvar WRITABLE = 'writable';\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {\n    var current = $getOwnPropertyDescriptor(O, P);\n    if (current && current[WRITABLE]) {\n      O[P] = Attributes.value;\n      Attributes = {\n        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],\n        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],\n        writable: false\n      };\n    }\n  } return $defineProperty(O, P, Attributes);\n} : $defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return $defineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPropertyKey(P);\n  if (IE8_DOM_DEFINE) try {\n    return $getOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nvar internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.es/ecma262/#sec-object.getownpropertynames\n// eslint-disable-next-line es/no-object-getownpropertynames -- safe\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe\nexports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar $Object = Object;\nvar ObjectPrototype = $Object.prototype;\n\n// `Object.getPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.getprototypeof\n// eslint-disable-next-line es/no-object-getprototypeof -- safe\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {\n  var object = toObject(O);\n  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];\n  var constructor = object.constructor;\n  if (isCallable(constructor) && object instanceof constructor) {\n    return constructor.prototype;\n  } return object instanceof $Object ? ObjectPrototype : null;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/object-get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-is-prototype-of.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-prototype-of.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nmodule.exports = uncurryThis({}.isPrototypeOf);\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/object-is-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar indexOf = (__webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf);\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar push = uncurryThis([].push);\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (hasOwn(O, key = names[i++])) {\n    ~indexOf(result, key) || push(result, key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nvar $propertyIsEnumerable = {}.propertyIsEnumerable;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : $propertyIsEnumerable;\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/* eslint-disable no-proto -- safe */\nvar uncurryThisAccessor = __webpack_require__(/*! ../internals/function-uncurry-this-accessor */ \"./node_modules/core-js/internals/function-uncurry-this-accessor.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"./node_modules/core-js/internals/a-possible-prototype.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n// eslint-disable-next-line es/no-object-setprototypeof -- safe\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n  try {\n    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');\n    setter(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) { /* empty */ }\n  return function setPrototypeOf(O, proto) {\n    requireObjectCoercible(O);\n    aPossiblePrototype(proto);\n    if (!isObject(O)) return O;\n    if (CORRECT_SETTER) setter(O, proto);\n    else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ordinary-to-primitive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar $TypeError = TypeError;\n\n// `OrdinaryToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-ordinarytoprimitive\nmodule.exports = function (input, pref) {\n  var fn, val;\n  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;\n  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  throw new $TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/ordinary-to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar concat = uncurryThis([].concat);\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js/internals/is-null-or-undefined.js\");\n\nvar $TypeError = TypeError;\n\n// `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (isNullOrUndefined(it)) throw new $TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-clone.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/set-clone.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar SetHelpers = __webpack_require__(/*! ../internals/set-helpers */ \"./node_modules/core-js/internals/set-helpers.js\");\nvar iterate = __webpack_require__(/*! ../internals/set-iterate */ \"./node_modules/core-js/internals/set-iterate.js\");\n\nvar Set = SetHelpers.Set;\nvar add = SetHelpers.add;\n\nmodule.exports = function (set) {\n  var result = new Set();\n  iterate(set, function (it) {\n    add(result, it);\n  });\n  return result;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/set-clone.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-difference.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/set-difference.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar aSet = __webpack_require__(/*! ../internals/a-set */ \"./node_modules/core-js/internals/a-set.js\");\nvar SetHelpers = __webpack_require__(/*! ../internals/set-helpers */ \"./node_modules/core-js/internals/set-helpers.js\");\nvar clone = __webpack_require__(/*! ../internals/set-clone */ \"./node_modules/core-js/internals/set-clone.js\");\nvar size = __webpack_require__(/*! ../internals/set-size */ \"./node_modules/core-js/internals/set-size.js\");\nvar getSetRecord = __webpack_require__(/*! ../internals/get-set-record */ \"./node_modules/core-js/internals/get-set-record.js\");\nvar iterateSet = __webpack_require__(/*! ../internals/set-iterate */ \"./node_modules/core-js/internals/set-iterate.js\");\nvar iterateSimple = __webpack_require__(/*! ../internals/iterate-simple */ \"./node_modules/core-js/internals/iterate-simple.js\");\n\nvar has = SetHelpers.has;\nvar remove = SetHelpers.remove;\n\n// `Set.prototype.difference` method\n// https://github.com/tc39/proposal-set-methods\nmodule.exports = function difference(other) {\n  var O = aSet(this);\n  var otherRec = getSetRecord(other);\n  var result = clone(O);\n  if (size(O) <= otherRec.size) iterateSet(O, function (e) {\n    if (otherRec.includes(e)) remove(result, e);\n  });\n  else iterateSimple(otherRec.getIterator(), function (e) {\n    if (has(O, e)) remove(result, e);\n  });\n  return result;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/set-difference.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-helpers.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-helpers.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\n// eslint-disable-next-line es/no-set -- safe\nvar SetPrototype = Set.prototype;\n\nmodule.exports = {\n  // eslint-disable-next-line es/no-set -- safe\n  Set: Set,\n  add: uncurryThis(SetPrototype.add),\n  has: uncurryThis(SetPrototype.has),\n  remove: uncurryThis(SetPrototype['delete']),\n  proto: SetPrototype\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/set-helpers.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-intersection.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/set-intersection.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar aSet = __webpack_require__(/*! ../internals/a-set */ \"./node_modules/core-js/internals/a-set.js\");\nvar SetHelpers = __webpack_require__(/*! ../internals/set-helpers */ \"./node_modules/core-js/internals/set-helpers.js\");\nvar size = __webpack_require__(/*! ../internals/set-size */ \"./node_modules/core-js/internals/set-size.js\");\nvar getSetRecord = __webpack_require__(/*! ../internals/get-set-record */ \"./node_modules/core-js/internals/get-set-record.js\");\nvar iterateSet = __webpack_require__(/*! ../internals/set-iterate */ \"./node_modules/core-js/internals/set-iterate.js\");\nvar iterateSimple = __webpack_require__(/*! ../internals/iterate-simple */ \"./node_modules/core-js/internals/iterate-simple.js\");\n\nvar Set = SetHelpers.Set;\nvar add = SetHelpers.add;\nvar has = SetHelpers.has;\n\n// `Set.prototype.intersection` method\n// https://github.com/tc39/proposal-set-methods\nmodule.exports = function intersection(other) {\n  var O = aSet(this);\n  var otherRec = getSetRecord(other);\n  var result = new Set();\n\n  if (size(O) > otherRec.size) {\n    iterateSimple(otherRec.getIterator(), function (e) {\n      if (has(O, e)) add(result, e);\n    });\n  } else {\n    iterateSet(O, function (e) {\n      if (otherRec.includes(e)) add(result, e);\n    });\n  }\n\n  return result;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/set-intersection.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-is-disjoint-from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/set-is-disjoint-from.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar aSet = __webpack_require__(/*! ../internals/a-set */ \"./node_modules/core-js/internals/a-set.js\");\nvar has = (__webpack_require__(/*! ../internals/set-helpers */ \"./node_modules/core-js/internals/set-helpers.js\").has);\nvar size = __webpack_require__(/*! ../internals/set-size */ \"./node_modules/core-js/internals/set-size.js\");\nvar getSetRecord = __webpack_require__(/*! ../internals/get-set-record */ \"./node_modules/core-js/internals/get-set-record.js\");\nvar iterateSet = __webpack_require__(/*! ../internals/set-iterate */ \"./node_modules/core-js/internals/set-iterate.js\");\nvar iterateSimple = __webpack_require__(/*! ../internals/iterate-simple */ \"./node_modules/core-js/internals/iterate-simple.js\");\nvar iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ \"./node_modules/core-js/internals/iterator-close.js\");\n\n// `Set.prototype.isDisjointFrom` method\n// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom\nmodule.exports = function isDisjointFrom(other) {\n  var O = aSet(this);\n  var otherRec = getSetRecord(other);\n  if (size(O) <= otherRec.size) return iterateSet(O, function (e) {\n    if (otherRec.includes(e)) return false;\n  }, true) !== false;\n  var iterator = otherRec.getIterator();\n  return iterateSimple(iterator, function (e) {\n    if (has(O, e)) return iteratorClose(iterator, 'normal', false);\n  }) !== false;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/set-is-disjoint-from.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-is-subset-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/set-is-subset-of.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar aSet = __webpack_require__(/*! ../internals/a-set */ \"./node_modules/core-js/internals/a-set.js\");\nvar size = __webpack_require__(/*! ../internals/set-size */ \"./node_modules/core-js/internals/set-size.js\");\nvar iterate = __webpack_require__(/*! ../internals/set-iterate */ \"./node_modules/core-js/internals/set-iterate.js\");\nvar getSetRecord = __webpack_require__(/*! ../internals/get-set-record */ \"./node_modules/core-js/internals/get-set-record.js\");\n\n// `Set.prototype.isSubsetOf` method\n// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf\nmodule.exports = function isSubsetOf(other) {\n  var O = aSet(this);\n  var otherRec = getSetRecord(other);\n  if (size(O) > otherRec.size) return false;\n  return iterate(O, function (e) {\n    if (!otherRec.includes(e)) return false;\n  }, true) !== false;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/set-is-subset-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-is-superset-of.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/set-is-superset-of.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar aSet = __webpack_require__(/*! ../internals/a-set */ \"./node_modules/core-js/internals/a-set.js\");\nvar has = (__webpack_require__(/*! ../internals/set-helpers */ \"./node_modules/core-js/internals/set-helpers.js\").has);\nvar size = __webpack_require__(/*! ../internals/set-size */ \"./node_modules/core-js/internals/set-size.js\");\nvar getSetRecord = __webpack_require__(/*! ../internals/get-set-record */ \"./node_modules/core-js/internals/get-set-record.js\");\nvar iterateSimple = __webpack_require__(/*! ../internals/iterate-simple */ \"./node_modules/core-js/internals/iterate-simple.js\");\nvar iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ \"./node_modules/core-js/internals/iterator-close.js\");\n\n// `Set.prototype.isSupersetOf` method\n// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf\nmodule.exports = function isSupersetOf(other) {\n  var O = aSet(this);\n  var otherRec = getSetRecord(other);\n  if (size(O) < otherRec.size) return false;\n  var iterator = otherRec.getIterator();\n  return iterateSimple(iterator, function (e) {\n    if (!has(O, e)) return iteratorClose(iterator, 'normal', false);\n  }) !== false;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/set-is-superset-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-iterate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-iterate.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar iterateSimple = __webpack_require__(/*! ../internals/iterate-simple */ \"./node_modules/core-js/internals/iterate-simple.js\");\nvar SetHelpers = __webpack_require__(/*! ../internals/set-helpers */ \"./node_modules/core-js/internals/set-helpers.js\");\n\nvar Set = SetHelpers.Set;\nvar SetPrototype = SetHelpers.proto;\nvar forEach = uncurryThis(SetPrototype.forEach);\nvar keys = uncurryThis(SetPrototype.keys);\nvar next = keys(new Set()).next;\n\nmodule.exports = function (set, fn, interruptible) {\n  return interruptible ? iterateSimple({ iterator: keys(set), next: next }, fn) : forEach(set, fn);\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/set-iterate.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-method-accept-set-like.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/set-method-accept-set-like.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nvar createSetLike = function (size) {\n  return {\n    size: size,\n    has: function () {\n      return false;\n    },\n    keys: function () {\n      return {\n        next: function () {\n          return { done: true };\n        }\n      };\n    }\n  };\n};\n\nmodule.exports = function (name) {\n  var Set = getBuiltIn('Set');\n  try {\n    new Set()[name](createSetLike(0));\n    try {\n      // late spec change, early WebKit ~ Safari 17.0 beta implementation does not pass it\n      // https://github.com/tc39/proposal-set-methods/pull/88\n      new Set()[name](createSetLike(-1));\n      return false;\n    } catch (error2) {\n      return true;\n    }\n  } catch (error) {\n    return false;\n  }\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/set-method-accept-set-like.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-size.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/set-size.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThisAccessor = __webpack_require__(/*! ../internals/function-uncurry-this-accessor */ \"./node_modules/core-js/internals/function-uncurry-this-accessor.js\");\nvar SetHelpers = __webpack_require__(/*! ../internals/set-helpers */ \"./node_modules/core-js/internals/set-helpers.js\");\n\nmodule.exports = uncurryThisAccessor(SetHelpers.proto, 'size', 'get') || function (set) {\n  return set.size;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/set-size.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-symmetric-difference.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/set-symmetric-difference.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar aSet = __webpack_require__(/*! ../internals/a-set */ \"./node_modules/core-js/internals/a-set.js\");\nvar SetHelpers = __webpack_require__(/*! ../internals/set-helpers */ \"./node_modules/core-js/internals/set-helpers.js\");\nvar clone = __webpack_require__(/*! ../internals/set-clone */ \"./node_modules/core-js/internals/set-clone.js\");\nvar getSetRecord = __webpack_require__(/*! ../internals/get-set-record */ \"./node_modules/core-js/internals/get-set-record.js\");\nvar iterateSimple = __webpack_require__(/*! ../internals/iterate-simple */ \"./node_modules/core-js/internals/iterate-simple.js\");\n\nvar add = SetHelpers.add;\nvar has = SetHelpers.has;\nvar remove = SetHelpers.remove;\n\n// `Set.prototype.symmetricDifference` method\n// https://github.com/tc39/proposal-set-methods\nmodule.exports = function symmetricDifference(other) {\n  var O = aSet(this);\n  var keysIter = getSetRecord(other).getIterator();\n  var result = clone(O);\n  iterateSimple(keysIter, function (e) {\n    if (has(O, e)) remove(result, e);\n    else add(result, e);\n  });\n  return result;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/set-symmetric-difference.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-union.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/set-union.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar aSet = __webpack_require__(/*! ../internals/a-set */ \"./node_modules/core-js/internals/a-set.js\");\nvar add = (__webpack_require__(/*! ../internals/set-helpers */ \"./node_modules/core-js/internals/set-helpers.js\").add);\nvar clone = __webpack_require__(/*! ../internals/set-clone */ \"./node_modules/core-js/internals/set-clone.js\");\nvar getSetRecord = __webpack_require__(/*! ../internals/get-set-record */ \"./node_modules/core-js/internals/get-set-record.js\");\nvar iterateSimple = __webpack_require__(/*! ../internals/iterate-simple */ \"./node_modules/core-js/internals/iterate-simple.js\");\n\n// `Set.prototype.union` method\n// https://github.com/tc39/proposal-set-methods\nmodule.exports = function union(other) {\n  var O = aSet(this);\n  var keysIter = getSetRecord(other).getIterator();\n  var result = clone(O);\n  iterateSimple(keysIter, function (it) {\n    add(result, it);\n  });\n  return result;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/set-union.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar globalThis = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ \"./node_modules/core-js/internals/define-global-property.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});\n\n(store.versions || (store.versions = [])).push({\n  version: '3.37.1',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',\n  license: 'https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE',\n  source: 'https://github.com/zloirock/core-js'\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\nmodule.exports = function (key, value) {\n  return store[key] || (store[key] = value || {});\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/structured-clone-proper-transfer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/structured-clone-proper-transfer.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar V8 = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\nvar IS_BROWSER = __webpack_require__(/*! ../internals/engine-is-browser */ \"./node_modules/core-js/internals/engine-is-browser.js\");\nvar IS_DENO = __webpack_require__(/*! ../internals/engine-is-deno */ \"./node_modules/core-js/internals/engine-is-deno.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\n\nvar structuredClone = global.structuredClone;\n\nmodule.exports = !!structuredClone && !fails(function () {\n  // prevent V8 ArrayBufferDetaching protector cell invalidation and performance degradation\n  // https://github.com/zloirock/core-js/issues/679\n  if ((IS_DENO && V8 > 92) || (IS_NODE && V8 > 94) || (IS_BROWSER && V8 > 97)) return false;\n  var buffer = new ArrayBuffer(8);\n  var clone = structuredClone(buffer, { transfer: [buffer] });\n  return buffer.byteLength !== 0 || clone.byteLength !== 8;\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/structured-clone-proper-transfer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/symbol-constructor-detection.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/symbol-constructor-detection.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/* eslint-disable es/no-symbol -- required for testing */\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar $String = global.String;\n\n// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  var symbol = Symbol('symbol detection');\n  // Chrome 38 Symbol has incorrect toString conversion\n  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances\n  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,\n  // of course, fail.\n  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||\n    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances\n    !Symbol.sham && V8_VERSION && V8_VERSION < 41;\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/symbol-constructor-detection.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toIntegerOrInfinity(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-big-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-big-int.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar $TypeError = TypeError;\n\n// `ToBigInt` abstract operation\n// https://tc39.es/ecma262/#sec-tobigint\nmodule.exports = function (argument) {\n  var prim = toPrimitive(argument, 'number');\n  if (typeof prim == 'number') throw new $TypeError(\"Can't convert number to bigint\");\n  // eslint-disable-next-line es/no-bigint -- safe\n  return BigInt(prim);\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/to-big-int.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-index.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/to-index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\nvar $RangeError = RangeError;\n\n// `ToIndex` abstract operation\n// https://tc39.es/ecma262/#sec-toindex\nmodule.exports = function (it) {\n  if (it === undefined) return 0;\n  var number = toIntegerOrInfinity(it);\n  var length = toLength(number);\n  if (number !== length) throw new $RangeError('Wrong length or index');\n  return length;\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/to-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer-or-infinity.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar trunc = __webpack_require__(/*! ../internals/math-trunc */ \"./node_modules/core-js/internals/math-trunc.js\");\n\n// `ToIntegerOrInfinity` abstract operation\n// https://tc39.es/ecma262/#sec-tointegerorinfinity\nmodule.exports = function (argument) {\n  var number = +argument;\n  // eslint-disable-next-line no-self-compare -- NaN check\n  return number !== number || number === 0 ? 0 : trunc(number);\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/to-integer-or-infinity.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.es/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  var len = toIntegerOrInfinity(argument);\n  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nvar $Object = Object;\n\n// `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return $Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js/internals/is-symbol.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\nvar ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ \"./node_modules/core-js/internals/ordinary-to-primitive.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar $TypeError = TypeError;\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\n\n// `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\nmodule.exports = function (input, pref) {\n  if (!isObject(input) || isSymbol(input)) return input;\n  var exoticToPrim = getMethod(input, TO_PRIMITIVE);\n  var result;\n  if (exoticToPrim) {\n    if (pref === undefined) pref = 'default';\n    result = call(exoticToPrim, input, pref);\n    if (!isObject(result) || isSymbol(result)) return result;\n    throw new $TypeError(\"Can't convert object to primitive value\");\n  }\n  if (pref === undefined) pref = 'number';\n  return ordinaryToPrimitive(input, pref);\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-property-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/to-property-key.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js/internals/is-symbol.js\");\n\n// `ToPropertyKey` abstract operation\n// https://tc39.es/ecma262/#sec-topropertykey\nmodule.exports = function (argument) {\n  var key = toPrimitive(argument, 'string');\n  return isSymbol(key) ? key : key + '';\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/to-property-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\nmodule.exports = String(test) === '[object z]';\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/to-string-tag-support.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/try-node-require.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/try-node-require.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\n\nmodule.exports = function (name) {\n  try {\n    // eslint-disable-next-line no-new-func -- safe\n    if (IS_NODE) return Function('return require(\"' + name + '\")')();\n  } catch (error) { /* empty */ }\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/try-node-require.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/try-to-string.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/try-to-string.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\nvar $String = String;\n\nmodule.exports = function (argument) {\n  try {\n    return $String(argument);\n  } catch (error) {\n    return 'Object';\n  }\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/try-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar id = 0;\nvar postfix = Math.random();\nvar toString = uncurryThis(1.0.toString);\n\nmodule.exports = function (key) {\n  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/* eslint-disable es/no-symbol -- required for testing */\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ \"./node_modules/core-js/internals/symbol-constructor-detection.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  && !Symbol.sham\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// V8 ~ Chrome 36-\n// https://bugs.chromium.org/p/v8/issues/detail?id=3334\nmodule.exports = DESCRIPTORS && fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty(function () { /* empty */ }, 'prototype', {\n    value: 42,\n    writable: false\n  }).prototype !== 42;\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/v8-prototype-define-bug.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/weak-map-basic-detection.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/weak-map-basic-detection.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/weak-map-basic-detection.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ \"./node_modules/core-js/internals/symbol-constructor-detection.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar Symbol = global.Symbol;\nvar WellKnownSymbolsStore = shared('wks');\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!hasOwn(WellKnownSymbolsStore, name)) {\n    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)\n      ? Symbol[name]\n      : createWellKnownSymbol('Symbol.' + name);\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array-buffer.detached.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array-buffer.detached.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ \"./node_modules/core-js/internals/define-built-in-accessor.js\");\nvar isDetached = __webpack_require__(/*! ../internals/array-buffer-is-detached */ \"./node_modules/core-js/internals/array-buffer-is-detached.js\");\n\nvar ArrayBufferPrototype = ArrayBuffer.prototype;\n\nif (DESCRIPTORS && !('detached' in ArrayBufferPrototype)) {\n  defineBuiltInAccessor(ArrayBufferPrototype, 'detached', {\n    configurable: true,\n    get: function detached() {\n      return isDetached(this);\n    }\n  });\n}\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/es.array-buffer.detached.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $transfer = __webpack_require__(/*! ../internals/array-buffer-transfer */ \"./node_modules/core-js/internals/array-buffer-transfer.js\");\n\n// `ArrayBuffer.prototype.transferToFixedLength` method\n// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfertofixedlength\nif ($transfer) $({ target: 'ArrayBuffer', proto: true }, {\n  transferToFixedLength: function transferToFixedLength() {\n    return $transfer(this, arguments.length ? arguments[0] : undefined, false);\n  }\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array-buffer.transfer.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array-buffer.transfer.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $transfer = __webpack_require__(/*! ../internals/array-buffer-transfer */ \"./node_modules/core-js/internals/array-buffer-transfer.js\");\n\n// `ArrayBuffer.prototype.transfer` method\n// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfer\nif ($transfer) $({ target: 'ArrayBuffer', proto: true }, {\n  transfer: function transfer() {\n    return $transfer(this, arguments.length ? arguments[0] : undefined, true);\n  }\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/es.array-buffer.transfer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.push.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.push.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar setArrayLength = __webpack_require__(/*! ../internals/array-set-length */ \"./node_modules/core-js/internals/array-set-length.js\");\nvar doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ \"./node_modules/core-js/internals/does-not-exceed-safe-integer.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar INCORRECT_TO_LENGTH = fails(function () {\n  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;\n});\n\n// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError\n// https://bugs.chromium.org/p/v8/issues/detail?id=12681\nvar properErrorOnNonWritableLength = function () {\n  try {\n    // eslint-disable-next-line es/no-object-defineproperty -- safe\n    Object.defineProperty([], 'length', { writable: false }).push();\n  } catch (error) {\n    return error instanceof TypeError;\n  }\n};\n\nvar FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();\n\n// `Array.prototype.push` method\n// https://tc39.es/ecma262/#sec-array.prototype.push\n$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {\n  // eslint-disable-next-line no-unused-vars -- required for `.length`\n  push: function push(item) {\n    var O = toObject(this);\n    var len = lengthOfArrayLike(O);\n    var argCount = arguments.length;\n    doesNotExceedSafeInteger(len + argCount);\n    for (var i = 0; i < argCount; i++) {\n      O[len] = arguments[i];\n      len++;\n    }\n    setArrayLength(O, len);\n    return len;\n  }\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/es.array.push.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.set.difference.v2.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.set.difference.v2.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar difference = __webpack_require__(/*! ../internals/set-difference */ \"./node_modules/core-js/internals/set-difference.js\");\nvar setMethodAcceptSetLike = __webpack_require__(/*! ../internals/set-method-accept-set-like */ \"./node_modules/core-js/internals/set-method-accept-set-like.js\");\n\n// `Set.prototype.difference` method\n// https://github.com/tc39/proposal-set-methods\n$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('difference') }, {\n  difference: difference\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/es.set.difference.v2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.set.intersection.v2.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.set.intersection.v2.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar intersection = __webpack_require__(/*! ../internals/set-intersection */ \"./node_modules/core-js/internals/set-intersection.js\");\nvar setMethodAcceptSetLike = __webpack_require__(/*! ../internals/set-method-accept-set-like */ \"./node_modules/core-js/internals/set-method-accept-set-like.js\");\n\nvar INCORRECT = !setMethodAcceptSetLike('intersection') || fails(function () {\n  // eslint-disable-next-line es/no-array-from, es/no-set -- testing\n  return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== '3,2';\n});\n\n// `Set.prototype.intersection` method\n// https://github.com/tc39/proposal-set-methods\n$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {\n  intersection: intersection\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/es.set.intersection.v2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar isDisjointFrom = __webpack_require__(/*! ../internals/set-is-disjoint-from */ \"./node_modules/core-js/internals/set-is-disjoint-from.js\");\nvar setMethodAcceptSetLike = __webpack_require__(/*! ../internals/set-method-accept-set-like */ \"./node_modules/core-js/internals/set-method-accept-set-like.js\");\n\n// `Set.prototype.isDisjointFrom` method\n// https://github.com/tc39/proposal-set-methods\n$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isDisjointFrom') }, {\n  isDisjointFrom: isDisjointFrom\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.set.is-subset-of.v2.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar isSubsetOf = __webpack_require__(/*! ../internals/set-is-subset-of */ \"./node_modules/core-js/internals/set-is-subset-of.js\");\nvar setMethodAcceptSetLike = __webpack_require__(/*! ../internals/set-method-accept-set-like */ \"./node_modules/core-js/internals/set-method-accept-set-like.js\");\n\n// `Set.prototype.isSubsetOf` method\n// https://github.com/tc39/proposal-set-methods\n$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isSubsetOf') }, {\n  isSubsetOf: isSubsetOf\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/es.set.is-subset-of.v2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.set.is-superset-of.v2.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar isSupersetOf = __webpack_require__(/*! ../internals/set-is-superset-of */ \"./node_modules/core-js/internals/set-is-superset-of.js\");\nvar setMethodAcceptSetLike = __webpack_require__(/*! ../internals/set-method-accept-set-like */ \"./node_modules/core-js/internals/set-method-accept-set-like.js\");\n\n// `Set.prototype.isSupersetOf` method\n// https://github.com/tc39/proposal-set-methods\n$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isSupersetOf') }, {\n  isSupersetOf: isSupersetOf\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/es.set.is-superset-of.v2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.set.symmetric-difference.v2.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar symmetricDifference = __webpack_require__(/*! ../internals/set-symmetric-difference */ \"./node_modules/core-js/internals/set-symmetric-difference.js\");\nvar setMethodAcceptSetLike = __webpack_require__(/*! ../internals/set-method-accept-set-like */ \"./node_modules/core-js/internals/set-method-accept-set-like.js\");\n\n// `Set.prototype.symmetricDifference` method\n// https://github.com/tc39/proposal-set-methods\n$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('symmetricDifference') }, {\n  symmetricDifference: symmetricDifference\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/es.set.symmetric-difference.v2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.set.union.v2.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.set.union.v2.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar union = __webpack_require__(/*! ../internals/set-union */ \"./node_modules/core-js/internals/set-union.js\");\nvar setMethodAcceptSetLike = __webpack_require__(/*! ../internals/set-method-accept-set-like */ \"./node_modules/core-js/internals/set-method-accept-set-like.js\");\n\n// `Set.prototype.union` method\n// https://github.com/tc39/proposal-set-methods\n$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('union') }, {\n  union: union\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/es.set.union.v2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.to-reversed.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.to-reversed.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar arrayToReversed = __webpack_require__(/*! ../internals/array-to-reversed */ \"./node_modules/core-js/internals/array-to-reversed.js\");\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\nvar getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;\n\n// `%TypedArray%.prototype.toReversed` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.toreversed\nexportTypedArrayMethod('toReversed', function toReversed() {\n  return arrayToReversed(aTypedArray(this), getTypedArrayConstructor(this));\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/es.typed-array.to-reversed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.to-sorted.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.to-sorted.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar arrayFromConstructorAndList = __webpack_require__(/*! ../internals/array-from-constructor-and-list */ \"./node_modules/core-js/internals/array-from-constructor-and-list.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\nvar sort = uncurryThis(ArrayBufferViewCore.TypedArrayPrototype.sort);\n\n// `%TypedArray%.prototype.toSorted` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tosorted\nexportTypedArrayMethod('toSorted', function toSorted(compareFn) {\n  if (compareFn !== undefined) aCallable(compareFn);\n  var O = aTypedArray(this);\n  var A = arrayFromConstructorAndList(getTypedArrayConstructor(O), O);\n  return sort(A, compareFn);\n});\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/es.typed-array.to-sorted.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.with.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.with.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar arrayWith = __webpack_require__(/*! ../internals/array-with */ \"./node_modules/core-js/internals/array-with.js\");\nvar ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ \"./node_modules/core-js/internals/array-buffer-view-core.js\");\nvar isBigIntArray = __webpack_require__(/*! ../internals/is-big-int-array */ \"./node_modules/core-js/internals/is-big-int-array.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\nvar toBigInt = __webpack_require__(/*! ../internals/to-big-int */ \"./node_modules/core-js/internals/to-big-int.js\");\n\nvar aTypedArray = ArrayBufferViewCore.aTypedArray;\nvar getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;\nvar exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;\n\nvar PROPER_ORDER = !!function () {\n  try {\n    // eslint-disable-next-line no-throw-literal, es/no-typed-arrays, es/no-array-prototype-with -- required for testing\n    new Int8Array(1)['with'](2, { valueOf: function () { throw 8; } });\n  } catch (error) {\n    // some early implementations, like WebKit, does not follow the final semantic\n    // https://github.com/tc39/proposal-change-array-by-copy/pull/86\n    return error === 8;\n  }\n}();\n\n// `%TypedArray%.prototype.with` method\n// https://tc39.es/ecma262/#sec-%typedarray%.prototype.with\nexportTypedArrayMethod('with', { 'with': function (index, value) {\n  var O = aTypedArray(this);\n  var relativeIndex = toIntegerOrInfinity(index);\n  var actualValue = isBigIntArray(O) ? toBigInt(value) : +value;\n  return arrayWith(O, getTypedArrayConstructor(O), relativeIndex, actualValue);\n} }['with'], !PROPER_ORDER);\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/es.typed-array.with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.difference.v2.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.set.difference.v2.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ../modules/es.set.difference.v2 */ \"./node_modules/core-js/modules/es.set.difference.v2.js\");\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/esnext.set.difference.v2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.intersection.v2.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.set.intersection.v2.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ../modules/es.set.intersection.v2 */ \"./node_modules/core-js/modules/es.set.intersection.v2.js\");\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/esnext.set.intersection.v2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.is-disjoint-from.v2.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.set.is-disjoint-from.v2.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ../modules/es.set.is-disjoint-from.v2 */ \"./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js\");\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/esnext.set.is-disjoint-from.v2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.is-subset-of.v2.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.set.is-subset-of.v2.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ../modules/es.set.is-subset-of.v2 */ \"./node_modules/core-js/modules/es.set.is-subset-of.v2.js\");\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/esnext.set.is-subset-of.v2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.is-superset-of.v2.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.set.is-superset-of.v2.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ../modules/es.set.is-superset-of.v2 */ \"./node_modules/core-js/modules/es.set.is-superset-of.v2.js\");\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/esnext.set.is-superset-of.v2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.symmetric-difference.v2.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.set.symmetric-difference.v2.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ../modules/es.set.symmetric-difference.v2 */ \"./node_modules/core-js/modules/es.set.symmetric-difference.v2.js\");\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/esnext.set.symmetric-difference.v2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.union.v2.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.set.union.v2.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ../modules/es.set.union.v2 */ \"./node_modules/core-js/modules/es.set.union.v2.js\");\n\n\n//# sourceURL=webpack://civ/./node_modules/core-js/modules/esnext.set.union.v2.js?");

/***/ }),

/***/ "./node_modules/simplex-noise/dist/esm/simplex-noise.js":
/*!**************************************************************!*\
  !*** ./node_modules/simplex-noise/dist/esm/simplex-noise.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildPermutationTable: () => (/* binding */ buildPermutationTable),\n/* harmony export */   createNoise2D: () => (/* binding */ createNoise2D),\n/* harmony export */   createNoise3D: () => (/* binding */ createNoise3D),\n/* harmony export */   createNoise4D: () => (/* binding */ createNoise4D)\n/* harmony export */ });\n/*\n * A fast javascript implementation of simplex noise by Jonas Wagner\n\nBased on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.\nWhich is based on example code by Stefan Gustavson (stegu@itn.liu.se).\nWith Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).\nBetter rank ordering method by Stefan Gustavson in 2012.\n\n Copyright (c) 2022 Jonas Wagner\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n */\n// these #__PURE__ comments help uglifyjs with dead code removal\n// \nconst F2 = /*#__PURE__*/ 0.5 * (Math.sqrt(3.0) - 1.0);\nconst G2 = /*#__PURE__*/ (3.0 - Math.sqrt(3.0)) / 6.0;\nconst F3 = 1.0 / 3.0;\nconst G3 = 1.0 / 6.0;\nconst F4 = /*#__PURE__*/ (Math.sqrt(5.0) - 1.0) / 4.0;\nconst G4 = /*#__PURE__*/ (5.0 - Math.sqrt(5.0)) / 20.0;\n// I'm really not sure why this | 0 (basically a coercion to int)\n// is making this faster but I get ~5 million ops/sec more on the\n// benchmarks across the board or a ~10% speedup.\nconst fastFloor = (x) => Math.floor(x) | 0;\nconst grad2 = /*#__PURE__*/ new Float64Array([1, 1,\n    -1, 1,\n    1, -1,\n    -1, -1,\n    1, 0,\n    -1, 0,\n    1, 0,\n    -1, 0,\n    0, 1,\n    0, -1,\n    0, 1,\n    0, -1]);\n// double seems to be faster than single or int's\n// probably because most operations are in double precision\nconst grad3 = /*#__PURE__*/ new Float64Array([1, 1, 0,\n    -1, 1, 0,\n    1, -1, 0,\n    -1, -1, 0,\n    1, 0, 1,\n    -1, 0, 1,\n    1, 0, -1,\n    -1, 0, -1,\n    0, 1, 1,\n    0, -1, 1,\n    0, 1, -1,\n    0, -1, -1]);\n// double is a bit quicker here as well\nconst grad4 = /*#__PURE__*/ new Float64Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1,\n    0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1,\n    1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1,\n    -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1,\n    1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1,\n    -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1,\n    1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0,\n    -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);\n/**\n * Creates a 2D noise function\n * @param random the random function that will be used to build the permutation table\n * @returns {NoiseFunction2D}\n */\nfunction createNoise2D(random = Math.random) {\n    const perm = buildPermutationTable(random);\n    // precalculating this yields a little ~3% performance improvement.\n    const permGrad2x = new Float64Array(perm).map(v => grad2[(v % 12) * 2]);\n    const permGrad2y = new Float64Array(perm).map(v => grad2[(v % 12) * 2 + 1]);\n    return function noise2D(x, y) {\n        // if(!isFinite(x) || !isFinite(y)) return 0;\n        let n0 = 0; // Noise contributions from the three corners\n        let n1 = 0;\n        let n2 = 0;\n        // Skew the input space to determine which simplex cell we're in\n        const s = (x + y) * F2; // Hairy factor for 2D\n        const i = fastFloor(x + s);\n        const j = fastFloor(y + s);\n        const t = (i + j) * G2;\n        const X0 = i - t; // Unskew the cell origin back to (x,y) space\n        const Y0 = j - t;\n        const x0 = x - X0; // The x,y distances from the cell origin\n        const y0 = y - Y0;\n        // For the 2D case, the simplex shape is an equilateral triangle.\n        // Determine which simplex we are in.\n        let i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords\n        if (x0 > y0) {\n            i1 = 1;\n            j1 = 0;\n        } // lower triangle, XY order: (0,0)->(1,0)->(1,1)\n        else {\n            i1 = 0;\n            j1 = 1;\n        } // upper triangle, YX order: (0,0)->(0,1)->(1,1)\n        // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and\n        // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where\n        // c = (3-sqrt(3))/6\n        const x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords\n        const y1 = y0 - j1 + G2;\n        const x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords\n        const y2 = y0 - 1.0 + 2.0 * G2;\n        // Work out the hashed gradient indices of the three simplex corners\n        const ii = i & 255;\n        const jj = j & 255;\n        // Calculate the contribution from the three corners\n        let t0 = 0.5 - x0 * x0 - y0 * y0;\n        if (t0 >= 0) {\n            const gi0 = ii + perm[jj];\n            const g0x = permGrad2x[gi0];\n            const g0y = permGrad2y[gi0];\n            t0 *= t0;\n            // n0 = t0 * t0 * (grad2[gi0] * x0 + grad2[gi0 + 1] * y0); // (x,y) of grad3 used for 2D gradient\n            n0 = t0 * t0 * (g0x * x0 + g0y * y0);\n        }\n        let t1 = 0.5 - x1 * x1 - y1 * y1;\n        if (t1 >= 0) {\n            const gi1 = ii + i1 + perm[jj + j1];\n            const g1x = permGrad2x[gi1];\n            const g1y = permGrad2y[gi1];\n            t1 *= t1;\n            // n1 = t1 * t1 * (grad2[gi1] * x1 + grad2[gi1 + 1] * y1);\n            n1 = t1 * t1 * (g1x * x1 + g1y * y1);\n        }\n        let t2 = 0.5 - x2 * x2 - y2 * y2;\n        if (t2 >= 0) {\n            const gi2 = ii + 1 + perm[jj + 1];\n            const g2x = permGrad2x[gi2];\n            const g2y = permGrad2y[gi2];\n            t2 *= t2;\n            // n2 = t2 * t2 * (grad2[gi2] * x2 + grad2[gi2 + 1] * y2);\n            n2 = t2 * t2 * (g2x * x2 + g2y * y2);\n        }\n        // Add contributions from each corner to get the final noise value.\n        // The result is scaled to return values in the interval [-1,1].\n        return 70.0 * (n0 + n1 + n2);\n    };\n}\n/**\n * Creates a 3D noise function\n * @param random the random function that will be used to build the permutation table\n * @returns {NoiseFunction3D}\n */\nfunction createNoise3D(random = Math.random) {\n    const perm = buildPermutationTable(random);\n    // precalculating these seems to yield a speedup of over 15%\n    const permGrad3x = new Float64Array(perm).map(v => grad3[(v % 12) * 3]);\n    const permGrad3y = new Float64Array(perm).map(v => grad3[(v % 12) * 3 + 1]);\n    const permGrad3z = new Float64Array(perm).map(v => grad3[(v % 12) * 3 + 2]);\n    return function noise3D(x, y, z) {\n        let n0, n1, n2, n3; // Noise contributions from the four corners\n        // Skew the input space to determine which simplex cell we're in\n        const s = (x + y + z) * F3; // Very nice and simple skew factor for 3D\n        const i = fastFloor(x + s);\n        const j = fastFloor(y + s);\n        const k = fastFloor(z + s);\n        const t = (i + j + k) * G3;\n        const X0 = i - t; // Unskew the cell origin back to (x,y,z) space\n        const Y0 = j - t;\n        const Z0 = k - t;\n        const x0 = x - X0; // The x,y,z distances from the cell origin\n        const y0 = y - Y0;\n        const z0 = z - Z0;\n        // For the 3D case, the simplex shape is a slightly irregular tetrahedron.\n        // Determine which simplex we are in.\n        let i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords\n        let i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords\n        if (x0 >= y0) {\n            if (y0 >= z0) {\n                i1 = 1;\n                j1 = 0;\n                k1 = 0;\n                i2 = 1;\n                j2 = 1;\n                k2 = 0;\n            } // X Y Z order\n            else if (x0 >= z0) {\n                i1 = 1;\n                j1 = 0;\n                k1 = 0;\n                i2 = 1;\n                j2 = 0;\n                k2 = 1;\n            } // X Z Y order\n            else {\n                i1 = 0;\n                j1 = 0;\n                k1 = 1;\n                i2 = 1;\n                j2 = 0;\n                k2 = 1;\n            } // Z X Y order\n        }\n        else { // x0<y0\n            if (y0 < z0) {\n                i1 = 0;\n                j1 = 0;\n                k1 = 1;\n                i2 = 0;\n                j2 = 1;\n                k2 = 1;\n            } // Z Y X order\n            else if (x0 < z0) {\n                i1 = 0;\n                j1 = 1;\n                k1 = 0;\n                i2 = 0;\n                j2 = 1;\n                k2 = 1;\n            } // Y Z X order\n            else {\n                i1 = 0;\n                j1 = 1;\n                k1 = 0;\n                i2 = 1;\n                j2 = 1;\n                k2 = 0;\n            } // Y X Z order\n        }\n        // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),\n        // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and\n        // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where\n        // c = 1/6.\n        const x1 = x0 - i1 + G3; // Offsets for second corner in (x,y,z) coords\n        const y1 = y0 - j1 + G3;\n        const z1 = z0 - k1 + G3;\n        const x2 = x0 - i2 + 2.0 * G3; // Offsets for third corner in (x,y,z) coords\n        const y2 = y0 - j2 + 2.0 * G3;\n        const z2 = z0 - k2 + 2.0 * G3;\n        const x3 = x0 - 1.0 + 3.0 * G3; // Offsets for last corner in (x,y,z) coords\n        const y3 = y0 - 1.0 + 3.0 * G3;\n        const z3 = z0 - 1.0 + 3.0 * G3;\n        // Work out the hashed gradient indices of the four simplex corners\n        const ii = i & 255;\n        const jj = j & 255;\n        const kk = k & 255;\n        // Calculate the contribution from the four corners\n        let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;\n        if (t0 < 0)\n            n0 = 0.0;\n        else {\n            const gi0 = ii + perm[jj + perm[kk]];\n            t0 *= t0;\n            n0 = t0 * t0 * (permGrad3x[gi0] * x0 + permGrad3y[gi0] * y0 + permGrad3z[gi0] * z0);\n        }\n        let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;\n        if (t1 < 0)\n            n1 = 0.0;\n        else {\n            const gi1 = ii + i1 + perm[jj + j1 + perm[kk + k1]];\n            t1 *= t1;\n            n1 = t1 * t1 * (permGrad3x[gi1] * x1 + permGrad3y[gi1] * y1 + permGrad3z[gi1] * z1);\n        }\n        let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;\n        if (t2 < 0)\n            n2 = 0.0;\n        else {\n            const gi2 = ii + i2 + perm[jj + j2 + perm[kk + k2]];\n            t2 *= t2;\n            n2 = t2 * t2 * (permGrad3x[gi2] * x2 + permGrad3y[gi2] * y2 + permGrad3z[gi2] * z2);\n        }\n        let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;\n        if (t3 < 0)\n            n3 = 0.0;\n        else {\n            const gi3 = ii + 1 + perm[jj + 1 + perm[kk + 1]];\n            t3 *= t3;\n            n3 = t3 * t3 * (permGrad3x[gi3] * x3 + permGrad3y[gi3] * y3 + permGrad3z[gi3] * z3);\n        }\n        // Add contributions from each corner to get the final noise value.\n        // The result is scaled to stay just inside [-1,1]\n        return 32.0 * (n0 + n1 + n2 + n3);\n    };\n}\n/**\n * Creates a 4D noise function\n * @param random the random function that will be used to build the permutation table\n * @returns {NoiseFunction4D}\n */\nfunction createNoise4D(random = Math.random) {\n    const perm = buildPermutationTable(random);\n    // precalculating these leads to a ~10% speedup\n    const permGrad4x = new Float64Array(perm).map(v => grad4[(v % 32) * 4]);\n    const permGrad4y = new Float64Array(perm).map(v => grad4[(v % 32) * 4 + 1]);\n    const permGrad4z = new Float64Array(perm).map(v => grad4[(v % 32) * 4 + 2]);\n    const permGrad4w = new Float64Array(perm).map(v => grad4[(v % 32) * 4 + 3]);\n    return function noise4D(x, y, z, w) {\n        let n0, n1, n2, n3, n4; // Noise contributions from the five corners\n        // Skew the (x,y,z,w) space to determine which cell of 24 simplices we're in\n        const s = (x + y + z + w) * F4; // Factor for 4D skewing\n        const i = fastFloor(x + s);\n        const j = fastFloor(y + s);\n        const k = fastFloor(z + s);\n        const l = fastFloor(w + s);\n        const t = (i + j + k + l) * G4; // Factor for 4D unskewing\n        const X0 = i - t; // Unskew the cell origin back to (x,y,z,w) space\n        const Y0 = j - t;\n        const Z0 = k - t;\n        const W0 = l - t;\n        const x0 = x - X0; // The x,y,z,w distances from the cell origin\n        const y0 = y - Y0;\n        const z0 = z - Z0;\n        const w0 = w - W0;\n        // For the 4D case, the simplex is a 4D shape I won't even try to describe.\n        // To find out which of the 24 possible simplices we're in, we need to\n        // determine the magnitude ordering of x0, y0, z0 and w0.\n        // Six pair-wise comparisons are performed between each possible pair\n        // of the four coordinates, and the results are used to rank the numbers.\n        let rankx = 0;\n        let ranky = 0;\n        let rankz = 0;\n        let rankw = 0;\n        if (x0 > y0)\n            rankx++;\n        else\n            ranky++;\n        if (x0 > z0)\n            rankx++;\n        else\n            rankz++;\n        if (x0 > w0)\n            rankx++;\n        else\n            rankw++;\n        if (y0 > z0)\n            ranky++;\n        else\n            rankz++;\n        if (y0 > w0)\n            ranky++;\n        else\n            rankw++;\n        if (z0 > w0)\n            rankz++;\n        else\n            rankw++;\n        // simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.\n        // Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w\n        // impossible. Only the 24 indices which have non-zero entries make any sense.\n        // We use a thresholding to set the coordinates in turn from the largest magnitude.\n        // Rank 3 denotes the largest coordinate.\n        // Rank 2 denotes the second largest coordinate.\n        // Rank 1 denotes the second smallest coordinate.\n        // The integer offsets for the second simplex corner\n        const i1 = rankx >= 3 ? 1 : 0;\n        const j1 = ranky >= 3 ? 1 : 0;\n        const k1 = rankz >= 3 ? 1 : 0;\n        const l1 = rankw >= 3 ? 1 : 0;\n        // The integer offsets for the third simplex corner\n        const i2 = rankx >= 2 ? 1 : 0;\n        const j2 = ranky >= 2 ? 1 : 0;\n        const k2 = rankz >= 2 ? 1 : 0;\n        const l2 = rankw >= 2 ? 1 : 0;\n        // The integer offsets for the fourth simplex corner\n        const i3 = rankx >= 1 ? 1 : 0;\n        const j3 = ranky >= 1 ? 1 : 0;\n        const k3 = rankz >= 1 ? 1 : 0;\n        const l3 = rankw >= 1 ? 1 : 0;\n        // The fifth corner has all coordinate offsets = 1, so no need to compute that.\n        const x1 = x0 - i1 + G4; // Offsets for second corner in (x,y,z,w) coords\n        const y1 = y0 - j1 + G4;\n        const z1 = z0 - k1 + G4;\n        const w1 = w0 - l1 + G4;\n        const x2 = x0 - i2 + 2.0 * G4; // Offsets for third corner in (x,y,z,w) coords\n        const y2 = y0 - j2 + 2.0 * G4;\n        const z2 = z0 - k2 + 2.0 * G4;\n        const w2 = w0 - l2 + 2.0 * G4;\n        const x3 = x0 - i3 + 3.0 * G4; // Offsets for fourth corner in (x,y,z,w) coords\n        const y3 = y0 - j3 + 3.0 * G4;\n        const z3 = z0 - k3 + 3.0 * G4;\n        const w3 = w0 - l3 + 3.0 * G4;\n        const x4 = x0 - 1.0 + 4.0 * G4; // Offsets for last corner in (x,y,z,w) coords\n        const y4 = y0 - 1.0 + 4.0 * G4;\n        const z4 = z0 - 1.0 + 4.0 * G4;\n        const w4 = w0 - 1.0 + 4.0 * G4;\n        // Work out the hashed gradient indices of the five simplex corners\n        const ii = i & 255;\n        const jj = j & 255;\n        const kk = k & 255;\n        const ll = l & 255;\n        // Calculate the contribution from the five corners\n        let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;\n        if (t0 < 0)\n            n0 = 0.0;\n        else {\n            const gi0 = ii + perm[jj + perm[kk + perm[ll]]];\n            t0 *= t0;\n            n0 = t0 * t0 * (permGrad4x[gi0] * x0 + permGrad4y[gi0] * y0 + permGrad4z[gi0] * z0 + permGrad4w[gi0] * w0);\n        }\n        let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;\n        if (t1 < 0)\n            n1 = 0.0;\n        else {\n            const gi1 = ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]];\n            t1 *= t1;\n            n1 = t1 * t1 * (permGrad4x[gi1] * x1 + permGrad4y[gi1] * y1 + permGrad4z[gi1] * z1 + permGrad4w[gi1] * w1);\n        }\n        let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;\n        if (t2 < 0)\n            n2 = 0.0;\n        else {\n            const gi2 = ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]];\n            t2 *= t2;\n            n2 = t2 * t2 * (permGrad4x[gi2] * x2 + permGrad4y[gi2] * y2 + permGrad4z[gi2] * z2 + permGrad4w[gi2] * w2);\n        }\n        let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;\n        if (t3 < 0)\n            n3 = 0.0;\n        else {\n            const gi3 = ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]];\n            t3 *= t3;\n            n3 = t3 * t3 * (permGrad4x[gi3] * x3 + permGrad4y[gi3] * y3 + permGrad4z[gi3] * z3 + permGrad4w[gi3] * w3);\n        }\n        let t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;\n        if (t4 < 0)\n            n4 = 0.0;\n        else {\n            const gi4 = ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]];\n            t4 *= t4;\n            n4 = t4 * t4 * (permGrad4x[gi4] * x4 + permGrad4y[gi4] * y4 + permGrad4z[gi4] * z4 + permGrad4w[gi4] * w4);\n        }\n        // Sum up and scale the result to cover the range [-1,1]\n        return 27.0 * (n0 + n1 + n2 + n3 + n4);\n    };\n}\n/**\n * Builds a random permutation table.\n * This is exported only for (internal) testing purposes.\n * Do not rely on this export.\n * @private\n */\nfunction buildPermutationTable(random) {\n    const tableSize = 512;\n    const p = new Uint8Array(tableSize);\n    for (let i = 0; i < tableSize / 2; i++) {\n        p[i] = i;\n    }\n    for (let i = 0; i < tableSize / 2 - 1; i++) {\n        const r = i + ~~(random() * (256 - i));\n        const aux = p[i];\n        p[i] = p[r];\n        p[r] = aux;\n    }\n    for (let i = 256; i < tableSize; i++) {\n        p[i] = p[i - 256];\n    }\n    return p;\n}\n//# sourceMappingURL=simplex-noise.js.map\n\n//# sourceURL=webpack://civ/./node_modules/simplex-noise/dist/esm/simplex-noise.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("abecf0e88738ed073db3")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "civ:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateciv"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/index.ts");
/******/ 	
/******/ })()
;