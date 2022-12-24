let sum = (a, b) => {
  if (typeof a != "number" || typeof b != "number")
    return "please enter number";
  if (a && b) {
    return a + b;
  }
};

let square = (a) => {
  if (typeof a != "number") return "please enter number";
  return a * a;
};
module.exports = { sum, square };
