const lib = require("../exercise1");

describe("fizzBuzz", () => {

    test ("should throw exception if not a number", () => {
        expect(() => lib.fizzBuzz("a")).toThrow();
        expect(() => lib.fizzBuzz(null)).toThrow();
        expect(() => lib.fizzBuzz(undefined)).toThrow();
        expect(() => lib.fizzBuzz({})).toThrow();
    });
    
    
    test ("should return 'FizzBuzz' if input is divisible by 3 and 5", () => {
        const result = lib.fizzBuzz(15);
        expect(result).toBe("FizzBuzz");
    });

    test ("should return 'Fizz' if input is only divisible by 3", () => {
        const result = lib.fizzBuzz(6);
        expect(result).toBe("Fizz");
    });

    test ("should return 'Buzz' if input is only divisible by 5", () => {
        const result = lib.fizzBuzz(10);
        expect(result).toBe("Buzz");
    });

    test ("should return the same input if its not divisible by 3 or 5", () => {
        const result = lib.fizzBuzz(8);
        expect(result).toBe(8);
    });
});