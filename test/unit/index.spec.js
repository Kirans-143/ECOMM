/* test("my first test", () => {
  let a = 5;
  expect(a).toBe(5);
}); */

// false, null , undefined, NaN, 0 , ""
describe("first", () => {
  test("checking Null", () => {
    let a = null;
    expect(a).toBeNull();
    expect(a).toBeFalsy();
  });

  test("checking Undefined", () => {
    let a = undefined;
    expect(a).toBeUndefined();
  });
});
