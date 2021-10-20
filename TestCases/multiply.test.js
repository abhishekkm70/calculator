const multiply = require("./src/multiply");

// eslint-disable-next-line


describe('Multiplication ', () => {


test("Multiplied successfully", () => {
    // eslint-disable-next-line
expect(multiply(2, 5)).toBe(10)
expect(multiply(4, 5)).toBe(20)
expect(multiply(-2, 5)).toBe(-10)
expect(multiply(-2, -4)).toBe(8)
});

test("It should not multipy strings," () =>
{
    expect (multiply("s", 3)).toBe(null)
    expect (multiply("a", "s")).toBe(null)
    expect (multiply("f", 4)).toBe(null)
    expect (multiply(5, "r")).toBe(null)
});


// test("It should not multiply arrays," () =>
// {
//     expect (multiply(7, [])).toBe(null)
//     expect (multiply([], [])).toBe(null)
//     expect (multiply(5, [])).toBe(null)


// });


});