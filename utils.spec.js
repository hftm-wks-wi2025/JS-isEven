import { describe, it, expect } from 'vitest';

describe('isBig', () => {
	it('wert kleiner 100', () => {
		let result = isBig(2)
		let expectedResult = false
		expect(result).toBe(expectedResult); // Erwartung
	});

	it('wert grösser 100', () => {
		let result = isBig(111)
		let expectedResult = true
		expect(result).toBe(expectedResult); // Erwartung
	});

	it('wert genau 100', () => {
		let result = isBig(100)
		let expectedResult = false
		expect(result).toBe(expectedResult); // Erwartung
	});
});


function isBig(n) {
	if (n > 100) {
		return true
	}
	return false;
}


