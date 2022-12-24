let calculateEmailSent = (n, sendEmail) => {
  let isSystemWorking = false;
  for (let i = 0; i < n; i++) {
    let delivary = sendEmail();
    isSystemWorking = delivary.passed > delivary.failed;
  }
  return isSystemWorking;
};
describe("Mock function", () => {
  let delivary = {
    passed: 3,
    failed: 2,
  };
  let sendEmail = jest.fn().mockReturnValue(delivary);
  test("first mock ex", () => {
    expect(calculateEmailSent(5, sendEmail)).toBe(true);
  });
});
