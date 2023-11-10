$(document).ready(function() {
    var currentTimestamp = Math.floor(Date.now() / 1000); // Current Unix timestamp in seconds
    var fiveDaysTimestamp = currentTimestamp + (5 * 24 * 60 * 60);

    $('.countdown').final_countdown({
        start: currentTimestamp, // Current Unix timestamp
        end: fiveDaysTimestamp,  // 5 days from the current time
        now: currentTimestamp, // Current Unix timestamp
        selectors: {
            value_seconds: '.clock-seconds .val',
            canvas_seconds: 'canvas_seconds',
            value_minutes: '.clock-minutes .val',
            canvas_minutes: 'canvas_minutes',
            value_hours: '.clock-hours .val',
            canvas_hours: 'canvas_hours',
            value_days: '.clock-days .val',
            canvas_days: 'canvas_days'
        },
        seconds: {
            borderColor: '#7995D5',
            borderWidth: '6'
        },
        minutes: {
            borderColor: '#ACC742',
            borderWidth: '6'
        },
        hours: {
            borderColor: '#ECEFCB',
            borderWidth: '6'
        },
        days: {
            borderColor: '#FF9900',
            borderWidth: '6'
        }
    }, function() {
        // Finish callback
    });
});
