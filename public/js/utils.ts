export function PRNG(state = Date.now()) {
	return function () {
		state ^= state << 13;
		state ^= state >> 17;
		state ^= state << 5;
		return state >>> 0; // Ensure unsigned integer
	};
}
export type RNG = () => number;
