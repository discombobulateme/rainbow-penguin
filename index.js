const colors = require("colors");
const messages = require("./messages.json");

function rainbowPenguin() {
  let min = 5;
  let max = 30;

  //Generate Random number between 5 and 200 seconds
  let rand = Math.floor((Math.random() * (max - min + 1) + min) * 1000 * 60);
  // Randomize message
  const randomMessages = messages[Math.floor(Math.random() * messages.length)];
  console.log(colors.rainbow(`${randomMessages}`));

  setTimeout(rainbowPenguin, rand);
}

rainbowPenguin();
