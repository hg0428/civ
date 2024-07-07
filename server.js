import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { generateMap } from "./public/js/land.js";
import { v4 as uuidv4 } from "uuid";
const fs = require("fs");

const fastify = Fastify({
	logger: true,
});
let maps = {}; //JSON.parse(fs.readFileSync("maps.json"));
fastify.register(fastifyStatic, {
	root: __dirname + "/public",
});
fastify.get("/map/:id", (request, reply) => {
	let id = request.params.id;
	if (!maps[id]) {
		return reply.code(404).send("Map not found");
	}
	return reply.serialize(maps[id]);
});
fastify.post("/generate-map", (request, reply) => {
	let { width, height } = request.body;
	let map = generateMap(width, height);
	let id = uuidv4();
	maps[id] = { map, width, height, id };
	return reply.serialize(maps[id]);
});
function saveMaps() {
	fs.writeFileSync("maps.json", JSON.stringify(maps));
}
// const exitSignals = [
// 	"exit",
// 	"SIGINT",
// 	"SIGTERM",
// 	"SIGUSR1",
// 	"SIGUSR2",
// 	"uncaughtException",
// 	"SIGQUIT",
// ];
// exitSignals.forEach((signal) => {
// 	process.on(signal, () => {
// 		fastify.close();
// 		console.log("\x1b[31mShutting down...\x1b[0m");
// 		saveMaps();
// 		console.log("\x1b[31mData saved. Exiting\x1b[0m");
// 		process.exit(0);
// 	});
// });

const start = async () => {
	try {
		await fastify.listen({ port: 9000 });
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
		// TODO: Enable proper error handling for production environment.
	}
};
start();
