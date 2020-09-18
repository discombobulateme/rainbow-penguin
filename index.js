const colors = require('colors');

colors.enable();

const messages = require('./messages.json');

function rainbowPenguin() {
  const min = 2;
  const max = 5;

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  console.log(colors.rainbow(`${randomMessage}`));

  let randomTime = Math.floor((Math.random() * (max - min + 1) + min) * 1000 * 60);

  setTimeout(rainbowPenguin, randomTime);
}

module.exports = rainbowPenguin;
