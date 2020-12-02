const timeLeft = document.querySelector('.display_time-left');
const endTime = document.querySelector('.display_end-time');
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

