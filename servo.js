const five = require("johnny-five");
const board = new five.Board();

board.on("ready", () => {
  const servo = new five.Servo(18);
  servo.center();
})