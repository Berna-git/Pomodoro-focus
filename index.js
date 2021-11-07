//Get buttons
let focusPomodoro =  document.getElementById('time-Pomodoro');
let timeShortBreak = document.getElementById('time-short_break');
let timeLongBreak = document.getElementById('time-long_break');
let watchTimer = document.getElementById('div-watch-timer');
//Get button of start timer
let btnTimer = document.getElementById('btn-start_time');   
// Time Of Timer
let timeWork = 25;
let timeShort = 5;
let timeLong = 15;
let seconds = 60;
watchTimer.value = 1;
 
// Add listener
focusPomodoro.addEventListener('click',function(){
    watchTimer.value = 1;
    watchTimer.innerHTML = `<p>${timeWork}:00<p>`
})

timeShortBreak.addEventListener('click',timeShortBreking);

timeLongBreak.addEventListener('click',function(){
    watchTimer.value = 3;
    watchTimer.innerHTML = `<p>${timeLong}:00`
})

function timeShortBreking(){
    watchTimer.value = 2;
    watchTimer.innerHTML = `<p>0${timeShort}:00<p>`
}

/// Start timer
// btnTimer.addEventListener('click',function(){
//     console.log(watchTimer.value)
// })
btnTimer.addEventListener('click',startTimer);
console.log(watchTimer.value)
function startTimer() {
    setInterval(() => {
        if(watchTimer.value == 1) {
            if (seconds > 0){
                seconds = seconds - 1;
                console.log(`${timeWork}:${seconds}`) 
                return seconds;  
            } else if(timeWork > 0) {
                seconds = 60;
                timeWork = timeWork - 1;
                console.log(`${timeWork}:${seconds}`)            
                return seconds, timeWork;
            } else {
                timeWork = 25;
                timeShortBreking();
                btnTimer.removeAttribute('btn-start_time');
            }

        }     
    }, 1);
    
}
// console.log(seconds)
// document.getElementById("myBtn").addEventListener("click", function() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   });