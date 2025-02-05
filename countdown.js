function updateCountdown() {
    const now = new Date();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let nextInterval;
    let nextInterval2;

    if (minutes % 30 === 0 && seconds === 0) {
        document.getElementById("countdown").textContent = "Shuttle Departing Now!";
        return;
    }
    
    if (minutes % 30 >= 25) {
        document.getElementById("countdown").textContent = "Shuttle Arriving Now!";
        return;
    }
    
    if (minutes % 30 >= 29) {
        document.getElementById("countdown").textContent = "Shuttle Departing Soon!";
        return;
    }
    
    if (minutes < 30) {
        nextInterval = 30 - minutes;
    } else {
        nextInterval = 60 - minutes;
    }
    if (minutes < 15) {
        nextInterval2 = 15 - minutes;
    } else if (minutes < 45) {
        nextInterval2 = 45 - minutes;
    } else {
        nextInterval2 = 60 - minutes + 15;
    }

    if ((minutes === 15) || (minutes === 45) && seconds === 0) {
        document.getElementById("countdown-2").textContent = "Shuttle Departing Now!";
        return;
    }
    
    if (minutes % 30 >= 10 && minutes % 30 < 15) {
        document.getElementById("countdown-2").textContent = "Shuttle Arriving Now!";
        return;
    }
    
    if (minutes % 30 === 14) {
        document.getElementById("countdown-2").textContent = "Shuttle Departing Soon!";
        return;
    }
    

    document.getElementById("countdown").textContent = `Next shuttle in ${nextInterval - 1} minutes and ${60 - seconds} seconds`;

    document.getElementById("countdown-2").textContent = `Next shuttle in ${nextInterval2 - 1} minutes and ${60 - seconds} seconds`;
}


    setInterval(updateCountdown, 1000);
    setInterval2(updateCountdown, 1000);
    updateCountdown();
    
    