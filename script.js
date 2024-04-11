let btn1 = document.querySelector(".button1");
let btn2 = document.querySelector(".button2");
let x = document.querySelector("i");

let time = document.querySelector('.timer');

let intervalstatus = false;

let timerinterval = null;

let timerseconds = 0;
let timerminutes = 0;
let timerhours = 0;
let leadingsec = 0;
let leadingmin = 0;
let leadinghr = 0;



btn1.addEventListener("click", function () {
    if (intervalstatus == true) {
        x.innerText = 'play_arrow';
        window.clearInterval(timerinterval);
        intervalstatus = false;
    }
    else {
        x.innerText = 'pause';
        timerinterval = window.setInterval(changetime, 1000);
        intervalstatus = true;
    }

})

btn2.addEventListener("click", function () {
    timerseconds = 0;
    timerminutes = 0;
    timerhours = 0;
    time.innerText = '00:00:00';
})

function changetime() {
    timerseconds++;

    if ((timerseconds / 60) == 1) {
        timerminutes++;
        timerseconds = 0;
        if ((timerminutes / 60) == 1) {
            timerhours++;
            timerminutes = 0;
        }
    }

    if (timerseconds < 10) {
        leadingsec = '0' + timerseconds.toString();
    }
    else {
        leadingsec = timerseconds;
    }
    if (timerminutes < 10) {
        leadingmin = '0' + timerminutes.toString();
    }
    else {
        leadingmin = timerminutes;
    }
    if (timerhours < 10) {
        leadinghr = '0' + timerhours.toString();
    }
    else {
        leadinghr = timerhours;
    }

    time.innerText = leadinghr + ':' + leadingmin + ':' + leadingsec;


}

