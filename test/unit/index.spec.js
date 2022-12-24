let Math = require("../../myapp/math");
/* test("my first test", () => {
  let a = 5;
  expect(a).toBe(5);
}); */

// false, null , undefined, NaN, 0 , ""
/*describe("first", () => {
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
*/

describe("My calculator class", () => {
  let totalSum = 0;
  //setup
  beforeAll(() => {
    console.log("BEFORE ALL: this will executes only once");
  });

  beforeEach(() => {
    totalSum = 0;
    console.log("BEFORE EACH: executes before every test");
  });

  afterAll(() => {
    console.log("AFTER ALL: This will also executed only once");
  });

  // tear down
  afterEach(() => {
    console.log("AFTER EACH: executes after every test");
  });

  test("add method", () => {
    expect(Math.sum(2, 3)).toBe(5);
    expect(Math.sum(-1, -1)).toBe(-2);
    expect(Math.sum()).toBe("please enter number");
    expect(Math.sum("a", "b")).toBe("please enter number");
  });

  test("square method", () => {
    expect(Math.square(2)).toBe(4);
    expect(Math.square(0)).toBe(0);
    expect(Math.square(-5)).toBe(25);
    expect(Math.square()).toBe("please enter number");
    expect(Math.square(Infinity)).toBe(Infinity);
  });

  test("adds total", () => {
    let total = Math.sum(2, 3);
    totalSum = totalSum + total;
    expect(totalSum).toBe(5);
  });
  test("adds again total", () => {
    let total = Math.sum(5, 3);
    totalSum = totalSum + total;
    expect(totalSum).toBe(8);
  });
});
