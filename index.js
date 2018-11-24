const Gpio = require('pigpio').Gpio;

const motor = new Gpio(18, {mode: Gpio.OUTPUT});

let pulseWidth = 1200;
let rotateClockWise = true;

setInterval(() => {
    console.log('process.env.CENTER', process.env.CENTER);
    motor.servoWrite(process.env.CENTER || pulseWidth);

    if (rotateClockWise) {
        rotateClockWise = false;
        pulseWidth = 1400;
    } else {
        rotateClockWise = true;
        pulseWidth = 1000;
    }
}, 350);