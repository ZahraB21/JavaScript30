const timeLeft = document.querySelector('.display_time-left');
const endTime = document.querySelector('.display_end-time');
const buttons = document.querySelectorAll('.timer_button');
let timerStop;

function timer(seconds){
    clearInterval(timerStop);
    const now = Date.now();
    let then = now + seconds * 1000;
    displayTimer(seconds);
    displayComeBack(then);

    timerStop = setInterval( () => {
        seconds--;
        if (seconds >= 0){
            displayTimer(seconds);
        } else {
            clearInterval(timerStop);
            return;
        }
    }, 1000);
}

function displayTimer(seconds){
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    timeLeft.textContent = `${minutes}: ${remainingSeconds >= 10 ? '' : '0'}${remainingSeconds}`;
}

function displayComeBack(timestamp){
    let time = new Date(timestamp);
    let hours = time.getHours();
    let minutes = time.getMinutes();
    endTime.textContent = `${hours}:${minutes > 10 ? '' : '0'}${minutes}`;
}

buttons.forEach(button => button.addEventListener('click', function() {
    const time = this.dataset.time;
    timer(time);
}));

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const time = (this.minutes.value * 60);
    timer(time);
    this.reset();
})