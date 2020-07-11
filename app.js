// Give values

var min = 0;
var sec = 0;
var msec= 0;

var minscreen = document.getElementById("min");
var secscreen = document.getElementById("sec");
var msecscreen = document.getElementById("msec");

var interval;

function timer(){
    msec++
    msecscreen.innerHTML = msec;
    if (msec >= 100) {
        sec++
        secscreen.innerHTML = sec
        msec = 0
    } else if (sec >= 60) {
        min++
        sec = 0;
        minscreen.innerHTML = min 
        
    }
}

function start(){
    interval = setInterval(timer,10) 
}

function stop(){
    clearInterval(interval)
}

function reset(){
var min = 0;
var sec = 0;
var msec= 0;
minscreen.innerHTML = min;
secscreen.innerHTML = sec;
msecscreen.innerHTML = msec;
}

