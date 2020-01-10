const lib = require("../lib");

describe("absolute", () => {

    test ("should return positive number if input is positive", () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });
    
    test ("should return positive number if input is negative", () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });
    
    test ("should return 0 number if input is 0", () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });

});

describe("greet", () => {

    test ("should return the greeting message", () => {
        const result = lib.greet("Mosh");
        expect(result).toMatch(/Mosh/);
    });
  
});

describe("getCurrencies", () => {

    test ("should return supported currencies", () => {
        const result = lib.getCurrencies();

       // expect(result).toContain("USD");
        //expect(result).toContain("AUD");
       // expect(result).toContain("EUR");

        expect(result).toEqual(expect.arrayContaining(["USD", "AUD", "EUR"]));
    });
  
});

describe("getProduct", () => {

    test ("should return the product with the given id", () => {
        const result = lib.getProduct(1);

        expect(result).toEqual({ id:1, price: 10 });
      
    });
  
});

describe("registerUser", () => {
    test ("should throw if username is falsy", () => {
        const args = [null, undefined, NaN, "", 0, false];
        args.forEach(a => {
            expect(() => lib.registerUser(a)).toThrow();
        })
    });

    test ("should return a user object if valid username is passed", () => {
        const result = lib.registerUser("mosh");
        expect(result).toMatchObject({ username: "mosh" });
        expect(result.id).toBeGreaterThan(0);
    });
});