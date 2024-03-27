function fetchData(callback) {
  setTimeout(() => {
    callback("hello world");
  }, 1000);
}

function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello world");
    }, 1000);
  });
}

module.exports = {
  fetchData, fetchPromise
};
