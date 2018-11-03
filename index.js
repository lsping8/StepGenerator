const Gpio = require('pigpio').Gpio;

const motor = new Gpio(18, {mode: Gpio.OUTPUT});

let pulseWidth = 1000;
let increment = 1000;

setInterval(() => {
  motor.servoWrite(pulseWidth);

  pulseWidth += increment;
  if (pulseWidth >= 2000) {
    increment = -1000;
  } else if (pulseWidth <= 1000) {
    increment = 1000;
  }
}, 5000);