const Gpio = require('pigpio').Gpio;

const motor = new Gpio(18, {mode: Gpio.OUTPUT});

let pulseWidth = 500;
let rotateClockWise = true;

setInterval(() => {
    motor.servoWrite(pulseWidth);

    if (rotateClockWise) {
        rotateClockWise = false;
        pulseWidth = 2500;
    } else {
        rotateClockWise = true;
        pulseWidth = 500;
    }
}, process.env.DELAY);