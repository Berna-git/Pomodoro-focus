//Get buttons
const focusPomodoro =  document.getElementById('time-Pomodoro');
const timeShortBreak = document.getElementById('time-short_break');
const timeLongBreak = document.getElementById('time-long_break');
const watchTimer = document.getElementById('div-watch-timer');
//Get buttons of start timer and pause and clear
const btnTimer = document.getElementById('btn-start_time'); 
const btnClear = document.getElementById('btn-reset')
// Time Of Timer
let timeWork = 25;
let timeShort = 5;
let timeLong = 15;
let seconds = 0;
let startTimer;
watchTimer.value = 1;
 
// Add listener to times
focusPomodoro.addEventListener('click',function(){
    watchTimer.value = 1;
    watchTimer.innerHTML = `<p>${timeWork}:00<p>`
    clearTimers()
})

timeShortBreak.addEventListener('click',function(){
    watchTimer.value = 2;
    watchTimer.innerHTML = `<p>0${timeShort}:00<p>`
    clearTimers()
});

timeLongBreak.addEventListener('click',function(){
    watchTimer.value = 3;
    watchTimer.innerHTML = `<p>${timeLong}:00`
    clearTimers()
})



btnTimer.addEventListener('click',function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer,1000)
    }
});

btnClear.addEventListener('click',clearTimers)


function clearTimers(){
    timeWork = 25;
    timeShort = 5;
    timeLong = 15;
    seconds = 0;
    if(watchTimer.value == 1) {
        watchTimer.innerHTML = `<p>${timeWork}:00<p>`
    } else if (watchTimer.value == 2) {
        watchTimer.innerHTML = `<p>0${timeShort}:00<p>`
    } else {
        watchTimer.innerHTML = `<p>${timeLong}:00`
    }
    clearInterval(startTimer)
    startTimer = undefined;
}

function timer() {
    if(watchTimer.value == 1) {
        timerWork()
    } else if (watchTimer.value == 2) {
        timerShortBreak();
    } else {
        timerLongBreak();
    }
}

function timerWork () {
        if (seconds > 0){
           seconds = seconds - 1;
            addZero(seconds,timeWork)
           return seconds;  
       } else if(timeWork > 0) {
           seconds = 60;
           timeWork = timeWork - 1;
           watchTimer.innerHTML = `<p>${timeWork}:${seconds}</p>`;            
           return seconds, timeWork;
       } else {
           timeWork = 25;
           clearInterval(startTimer)
           watchTimer.innerHTML = `<p>${timeWork}:${seconds}0</p>`;            
           startTimer = undefined
       } 
}

function timerShortBreak(){
    if (seconds > 0){
        seconds = seconds - 1;
            addZero(seconds,timeShort)
        return seconds;  
    }else if(timeShort > 0) {
        seconds = 60;
        timeShort = timeShort - 1;
        watchTimer.innerHTML = `<p>${timeShort}:${seconds}</p>`;            
        return seconds, timeShort;   
    } else {
        timeShort = 5;
        clearInterval(startTimer)
        watchTimer.innerHTML = `<p>0${timeShort}:${seconds}0</p>`;            
        startTimer = undefined
            
    }   
}

function timerLongBreak(){
    if (seconds > 0){
        seconds = seconds - 1;
        addZero(seconds,timeLong);         
        return seconds;  
    } else if(timeLong > 0) {
        seconds = 60;
        timeLong = timeLong - 1;
            
        return seconds, timeLong;
    } else {
        timeLong = 15;
        clearInterval(startTimer)
        watchTimer.innerHTML = `<p>${timeLong}:${seconds}0</p>`;            
        startTimer = undefined
    }   
}

function addZero(sec,mainTime,){
    if(sec < 10 && mainTime < 10) {
        watchTimer.innerHTML = `<p>0${mainTime}:0${seconds}</p>`
    } else if(sec < 10) {
        watchTimer.innerHTML = `<p>${mainTime}:0${seconds}</p>`
    } else if(mainTime < 10) {
        watchTimer.innerHTML = `<p>0${mainTime}:${seconds}</p>`
    } else {
        watchTimer.innerHTML = `<p>${mainTime}:${seconds}</p>`
    } 
}