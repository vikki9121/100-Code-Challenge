// Set the target date for the countdown (e.g., December 31, 2023)
const targetDate = new Date('2023-10-19').getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Customize the format as desired (e.g., "2d 5h 30m 15s")
    const countdownText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    document.getElementById('countdown').innerHTML = countdownText;

    if (timeRemaining <= 0) {
        document.getElementById('countdown').innerHTML = 'Countdown Expired';
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

