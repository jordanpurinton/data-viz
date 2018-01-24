function onLoad() {
    $.getJSON('https://raw.githubusercontent.com/jordanpurinton/data-viz/master/capacity_and_booking_lead_time.json', function (data) {
        console.log(JSON.stringify(data));
    });
}
document.onload = onLoad();