
let button = document.getElementById('button');
button.addEventListener('click', set);

function set() {
        setInterval(() => {
        countDown();
    }, 1000);
}

function countDown() {

    let input = document.getElementById('input').value;
    let futureTime = Date.parse(input);

    let today = new Date()

    let diff = (futureTime - today);
    console.log(diff);

    let dDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    let dHour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let dMin = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let dSec = Math.floor((diff % (1000 * 60)) / 1000);
    console.log(dHour, dMin, dSec)

    let counter = document.getElementById("display");

    counter.innerHTML = `<div> ${dDay}  <span> Days </span></div>` +
        `<div> ${dHour}  <span> Hours </span></div>` +
        `<div> ${dMin}  <span> Min </span></div>` +
        `<div> ${dSec}  <span> Sec </span></div>`;

    if (diff <= 0) {
        clearInterval(x);
        counter.innerHTML = "EXPIRED";
    }
}

