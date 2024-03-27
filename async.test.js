const { fetchData, fetchPromise } = require("./asyncCode");

test("The data is hello world", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("hello world");
      done();
    } catch {
      done(error);
    }
  }

  fetchData(callback);
});

test("The promise is hello World", () => {
  return expect(fetchPromise()).resolves.toBe("hello world");
});

// test("The promise fails", () => {
//   return expect(fetchPromise()).rejects.toThrow("error");
// });

// using async await
test("The data is peanut butter", async () => {
  const data = await fetchPromise();
  expect(data).toBe("hello world");
});
