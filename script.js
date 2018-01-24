function onLoad() {
    $.getJSON('capacity_and_booking_lead_time.json', function (data) {
        console.log(JSON.stringify(data));
    });
}
document.onload = onLoad();