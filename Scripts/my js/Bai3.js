function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;
    var clockEle = document.getElementById("clock");
    if (clockEle) {
        clockEle.innerHTML = timeString;
    }
}

setInterval(updateClock, 1000);

document.addEventListener("DOMContentLoaded", function () {
    updateClock();
});