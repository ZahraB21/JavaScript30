const timeLeft = document.querySelector('.display_time-left');
const endTime = document.querySelector('.display_end-time');

function timer(seconds){
    const now = Date.now();
    let then = now + seconds * 1000;
    displayTimer(then);

    setInterval( () => {
        then -= 1000;
        if (then > 0){
            displayTimer(then);
        }
    }, 1000);
}

function displayTimer(timestamp){
    let time = new Date(timestamp);
    let minutes = (new Date(Date.now())).getMinutes() - time.getMinutes();
    let seconds = time.getSeconds();
    timeLeft.textContent = `${minutes}:${seconds > 10 ? '' : '0'}${seconds}`;
}

