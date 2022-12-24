let promiseFunc = () => {
  return new Promise((resolve, reject) => {
    resolve("i am a promise");
    reject("i am rejected");
  });
};

describe("async JS", () => {
  test("test your promise", () => {
    promiseFunc()
      .then((data) => {
        expect(data).toBe("i am a promise");
      })
      .catch((err) => {
        expect(err).toBe("i am rejected");
      });
  });

  test("test your async/await", async () => {
    try {
      let output = await promiseFunc();
      expect(output).toBe("i am a promise");
    } catch (err) {
      expect(err).toBe("i am rejected");
    }
  });
});
