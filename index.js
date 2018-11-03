var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(18, 'out'); //use GPIO pin 4, and specify that it is output
var blinkInterval = setInterval(blinkLED, 50); //run the blinkLED function every 250ms

function blinkLED() { //function to start blinking
  if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    console.log('change to 1');
    LED.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    console.log('change to 0');
    LED.writeSync(0); //set pin state to 0 (turn LED off)
  }
}

function endBlink() { //function to stop blinking
    clearInterval(blinkInterval); // Stop blink intervals
    LED.writeSync(0); // Turn LED off
    LED.unexport(); // Unexport GPIO to free resources
  }
  
  setTimeout(endBlink, 5000); //stop blinking after 5 seconds