const rainbowPenguin = require('../index');
jest.useFakeTimers();

// test random number
// expect.any(constructor) for Math.random
test('randocall calls its callback with a number', () => {
  const mock = jest.fn();
  randomTime(mock);
  expect(mock).toBeCalledWith(expect.any(Number));
});

// // tests setTimeOut
// test("waits timeOut interval time to call the function", () => {
//   rainbowPenguin();

//   expect(jest.fn()).toHaveBeenCalledTimes(1);
//   expect(jest.fn()).toHaveBeenLastCalled(expect.any(Function), 1000);
// });

// // test console.log messages
// describe("log a message with colors"),
//   () => {
//     // define input
//     test("it should log a message", () => {
//       const expectedOutput = "Hi hi";
//       const actualOutput = "No no";
//       // define output
//       expect(actualOutput).toBe(expectedOutput);
//     });
//   };
