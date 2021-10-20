
// const {add, multiply} = require ("./src/add" );
const {add = require("../src/add");



// eslint-disable-next-line
describe('Addition ', () => {
    

test("Properly adds two numbers", () => {
    // eslint-disable-next-line
expect ( add(7, 2)).toBe(9)
expect ( add(-1, 5)).toBe(4)
expect (add(-1,-3)).toBe(-4)
    
});

test("It should not add strings," () =>
{
    expect (add("s", 3)).toBe(null)
    expect (add("a", "s")).toBe(null)
    expect (add("f", 4)).toBe(null)
    expect (add(5, "r")).toBe(null)
});


test("It should not add arrays," () =>
{
    expect (add(7, [])).toBe(null)
    expect (add([], [])).toBe(null)
    expect (add(5, [])).toBe(null)


});







});



// // const multiply = require("./add");

// // eslint-disable-next-line
// test("Multiplied successfully", () => {
//     // eslint-disable-next-line
// expect(multiply(2, 5)).toBe(10)
// expect(multiply(4, 5)).toBe(20)
// expect(multiply(-2, 5)).toBe(-10)
// expect(multiply(-2, -4)).toBe(8)
// });
    