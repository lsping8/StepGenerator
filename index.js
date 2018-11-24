const Gpio = require('pigpio').Gpio;

const motor = new Gpio(18, {mode: Gpio.OUTPUT});

let pulseWidth = 1000;
let rotateClockWise = true;

setInterval(() => {
    console.log('process.env.CENTER', process.env.CENTER);
    motor.servoWrite(process.env.CENTER || 1500);

    // if (rotateClockWise) {
    //     rotateClockWise = false;
    //     pulseWidth = 1500;
    // } else {
    //     rotateClockWise = true;
    //     pulseWidth = 1000;
    // }
}, 350);