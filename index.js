const colors = require('colors');

colors.enable();

const messages = require('./messages.json');

function rainbowPenguin() {
  const min = 5;
  const max = 25;

  const randomMessage = '🌈 🐧: ' + messages[Math.floor(Math.random() * messages.length)];

  const asterisks = colors.rainbow('*'.repeat(randomMessage.length));
  console.log(`${asterisks}\n${colors.bold(randomMessage)}\n${asterisks}`);

  const randomTime = Math.floor((Math.random() * (max - min + 1) + min) * 1000 * 60);

  setTimeout(rainbowPenguin, randomTime);
}

module.exports = rainbowPenguin;
