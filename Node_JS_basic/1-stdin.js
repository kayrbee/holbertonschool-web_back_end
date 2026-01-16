const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

rl.on('line', (name) => {
    process.stdout.write(`Your name is: ${name}\r`);
    rl.close();
});

// Handle application exit
rl.on('close', () => {
  console.log('This important software is now closing');
});
