import calc from "../calc";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

describe('polyCalc function', () => {
    //Empty array
    test('it returns 0 for empty array', () => {
        expect(calc.polyCalc(5,[])).toBe(0);
    });

    //Linear
    test('it properly calculates linear equation', () => {
        expect(calc.polyCalc(3,[-2,10])).toBe(4);
    });

    //Handles zero values
    test('it properly handles zeroes in the array', () => {
        expect(calc.polyCalc(-2,[1,0,3,-8])).toBe(-22);
    });

    //Handles big polynomial
    test('it properly handles \'big\' polynomial', () => {
        expect(calc.polyCalc(4,[3,2,4,-3,6,-100])).toBe(3716);
    });
});

describe('polyCalcZeroes function', () => {
    //returns zero with aCo of 0 or empty zeroes array
    test('it returns 0 when aCo is 0', () => {
        expect(calc.polyCalcZeroes(100,0,[1,2,3])).toBe(0);
    });

    test('it returns 0 when zArr is empty', () => {
        expect(calc.polyCalcZeroes(100,12,[])).toBe(0);
    });

    test('it properly calculates polynomial value', () => {
        expect(calc.polyCalcZeroes(1,-2,[-3,-2,-1,0,2,3])).toBe(-96);
    });
});

describe('getPolyCos function', () => {
    //returns empty array if no parameter or parameter is an empty array
    test('it returns an empty array if no paramter is passed', () => {
        const cos1 = calc.getPolyCos();
        expect(cos1.length).toBe(0);
    });

    test('it returns an empty array if parameter is empty array', () => {
        const cos1 = calc.getPolyCos([]);
        expect(cos1.length).toBe(0);
    });

    //Properly handles non-trivial cases
    test('it returns linear coefficients when given single x-intercept', () => {
        const cos1 = calc.getPolyCos([-7]);
        expect(cos1[0]).toBe(1);
        expect(cos1[1]).toBe(7);
    });

    test('it returns coefficients properly for quadratic function', () => {
        const cos1 = calc.getPolyCos([-3,5]);
        expect(cos1[0]).toBe(1);
        expect(cos1[1]).toBe(-2);
        expect(cos1[2]).toBe(-15);
    });

    test('it handles difference of squares, inserting zero', () => {
        const cos1 = calc.getPolyCos([-6,6]);
        expect(cos1[0]).toBe(1);
        expect(cos1[1]).toBe(0);
        expect(cos1[2]).toBe(-36);
    });

    test('it handles higher power functions properly', () => {
        const cos1 = calc.getPolyCos([-3,1,2]);
        expect(cos1[0]).toBe(1);
        expect(cos1[1]).toBe(0);
        expect(cos1[2]).toBe(-7);
        expect(cos1[3]).toBe(6);
    });
});

describe('isAsymptotic function', () => {
    //Returns false when at a numerator zero that isn't a denominator zero
    const asymptotic0 = calc.isAsymptotic([1,2,3],[2,3,4],1,1000);
    test('it handles numerator exclusive zeroes properly', () => {
        expect(asymptotic0).toBe(false);
    });
    
    //Returns false at a location that is a zero for neither the numerator nor the denominator
    const asymptotic1 = calc.isAsymptotic([1,2,3],[2,3,4],5,1000);
    test('it handles non-zeroes properly', () => {
        expect(asymptotic1).toBe(false);
    });

    //Returns true if the denominator alone goes to zero
    const asymptotic2 = calc.isAsymptotic([1,2,3],[2,3,4],4,1000);
    test('it handles denominator exclusive zeroes properly', () => {
        expect(asymptotic2).toBe(true);
    });

    //Returns false if the numerator goes to zero with greater multiplicity
    const asymptotic3 = calc.isAsymptotic([1,2,3,4,4],[2,3,4],4,1000);
    test('it handles greater numerator multiplicity properly', () => {
        expect(asymptotic3).toBe(false);
    });

    //Returns true if the denominator goes to zero with greater multiplicity
    const asymptotic4 = calc.isAsymptotic([1,2,3,4,4],[2,3,4,4,4],4,1000);
    test('it handles greater denominator multiplicity properly', () => {
        expect(asymptotic4).toBe(true);
    });
});

describe('calculateRoot function', () => {
    //Returns null if a negative value is passed to an even root function
    const nullRoot1 = calc.calculateRoot(-5,{a: 1, m: 1, b: 1},2);
    test('it properly returns a null value when improper argument passed to even root', () => {
        expect(nullRoot1).toBe(null);
    });
    
    //Returns proper value when negative value passed to odd function
    const oddRoot1 = calc.calculateRoot(-2,{a: 1, m: 3, b: -2},3);
    test('it properly returns a negative value when odd root passed a negative value', () => {
        expect(oddRoot1).toBe(-2);
    })
})