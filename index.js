const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
const LED = new Gpio(18, 'out'); //use GPIO pin 4, and specify that it is output
const blinkInterval = setInterval(handleGpio, 20); //run the blinkLED function every 250ms

function handleGpio() { //function to start blinking
    onGpio();
    setTimeout(offGpio, process.env.PULSE);
}

function onGpio() {
    if (LED.readSync() === 0) {
        console.log('change to 1');
        LED.writeSync(1); 
    }
}

function offGpio() {
    if (LED.readSync() === 1) { 
        console.log('change to 0');
        LED.writeSync(0); 
    }
}

function endBlink() { //function to stop blinking
    clearInterval(blinkInterval); // Stop blink intervals
    LED.writeSync(0); // Turn LED off
    LED.unexport(); // Unexport GPIO to free resources
}
  
  setTimeout(endBlink, 5000); //stop blinking after 5 seconds