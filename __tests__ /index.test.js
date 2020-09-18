const rainbowPenguin = require('../');
const mockConsole = require('jest-mock-console');
jest.mock('../messages.json');
jest.useFakeTimers();

it('should log a message on every timer tick', () => {
  const restoreConsole = mockConsole();
  rainbowPenguin();
  jest.runOnlyPendingTimers();
  jest.runOnlyPendingTimers();
  expect(console.log).toHaveBeenCalledTimes(3);
  restoreConsole();
});

it('should log the test message', () => {
  const restoreConsole = mockConsole();
  rainbowPenguin();
  expect(console.log).toHaveBeenCalledWith('test message');
  restoreConsole();
});
