var PiServo = require('pi-servo');

// pass the GPIO number
var sv1 = new PiServo(18); 

sv1.open()
    .then(function(){  
        console.log('change to 0');
        sv1.setDegree(0); // 0 - 180
    })
    .then(function(){  
        console.log('change to 180');
        sv1.setDegree(180); // 0 - 180
    })
    .then(function(){  
        console.log('change to 0');
        sv1.setDegree(0); // 0 - 180
    })
    .then(function(){  
        console.log('change to 180');
        sv1.setDegree(180); // 0 - 180
    });