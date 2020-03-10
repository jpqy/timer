// Beeps after a delay given in seconds
const beep = (delay) => {
  setTimeout(() => { process.stdout.write('\x07'); }, delay * 1000);
};

// Get the times arguments
const times = process.argv.slice(2);

// Beeps if time values are over 0 and a number
for (let time of times) {
  time = Number(time);
  if (typeof time === 'number' && time > 0) {
    beep(time);
  }
}