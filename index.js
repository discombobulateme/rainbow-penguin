const colors = require('colors');

const messages = require('./messages.json');

function rainbowPenguin() {
  let min = 5;
  let max = 30;

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  console.log(colors.rainbow(`${randomMessage}`));

  let randomTime = Math.floor((Math.random() * (max - min + 1) + min) * 1000 * 60);

  setTimeout(rainbowPenguin, randomTime);
}

module.exports = rainbowPenguin;
