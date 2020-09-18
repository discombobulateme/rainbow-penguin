const colors = require('colors');

colors.enable();

const messages = require('./messages.json');

function rainbowPenguin() {
  const min = 5;
  const max = 25;

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  const asterisks = '*'.repeat(randomMessage.length).rainbow;
  console.log(`${asterisks}\n${randomMessage.bold}\n${asterisks}`);

  const randomTime = Math.floor((Math.random() * (max - min + 1) + min) * 1000 * 60);

  setTimeout(rainbowPenguin, randomTime);
}

module.exports = rainbowPenguin;
