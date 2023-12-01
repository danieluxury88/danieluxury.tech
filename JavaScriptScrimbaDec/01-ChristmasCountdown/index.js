const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(month, day) {
    const now = new Date();
    const date = now.getDate();

    var today = new Date();
    var year = today.getFullYear();

    var christmas = new Date(year, month -1, day);

    if (today > christmas) {
        christmas.setFullYear(year + 1);
    }

    var oneDay = 24 * 60 * 60 * 1000;
    var diff = Math.ceil((christmas.getTime() - today.getTime()) / oneDay);

    countdownDisplay.textContent = diff;


    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
}

renderCountdown(12,25)