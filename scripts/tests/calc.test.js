const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("shuld return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        })
        test("shuld return 85 for 42 + 43", () => {
            expect(addition(42, 43)).toBe(85);
        })
    })
    describe("Substraction function", () => {

    })
    describe("Multiply function", () => {
        
    })
    describe("Division function", () => {
        
    })
})