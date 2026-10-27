import { describe, it, expect } from 'vitest';

describe('isEven', () => {
	it('2 should be even', () => {
		let result = isEven(2)
		let expectedResult = true
		expect(result).toBe(expectedResult); // Erwartung
	});
	it('3 should be odd', () => {
		let result = isEven(3)
		let expectedResult = false
		expect(result).toBe(expectedResult); // Erwartung
	});
	it('40 should be odd', () => {
		let result = isEven(40)
		let expectedResult = true
		expect(result).toBe(expectedResult); // Erwartung
	});
	it('fir null an error should be thrown', () => {
		expect(() => isEven(null)).toThrow(Error); // Erwartung
	});
});

function isEven(n) {
	if (n === null) {
		throw new Error('n should not be null!')
	}
	return n % 2 === 0;
}