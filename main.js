"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
function* countdownTimer(second) {
    // while loop
    while (second > 0) {
        yield second;
        second--;
    }
}
// step 2 counter inilization
let timerIterator = countdownTimer(30);
// function to create a countdownTimer
function displayCountdown() {
    // value below 10
    let result = timerIterator.next();
    // if else condition apply
    if (!result.done) {
        //current date and time
        const now = new Date();
        // calculate minutes in time
        const countdownTimer = new Date(now.getTime() + (result.value * 1000));
        // calculate remaning seconds in time  
        const remainingSeconds = (0, date_fns_1.differenceInSeconds)(countdownTimer, now);
        console.log(`Remaining Seconds: ${remainingSeconds}`);
        setTimeout(displayCountdown, 1000); // 1 second is equal to 1000 micro seconds
    }
    else {
        // display result contdown complete
        console.log("Countdown Complete!");
    }
}
//invoke
displayCountdown();
