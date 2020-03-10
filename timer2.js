const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// Beeps after a delay given in seconds
const beep = (delay = 0) => {
  setTimeout(() => { process.stdout.write('\x07'); }, delay * 1000);
};

////////////
// Event Handling for User Input
////////////
stdin.on('data', (key) => {

  // Beep immediately if b is pressed
  if (key === 'b') {
    beep();
  }

  // If user types a number 1-9, print a message and beep 
  // after that many seconds
  if (key >= '1' && key <= '9') {
    console.log(`setting timer for ${key} seconds...`);
    beep(Number(key));
  }
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
});