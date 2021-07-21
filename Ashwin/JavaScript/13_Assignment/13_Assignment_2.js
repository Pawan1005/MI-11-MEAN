function getWeekday(date) {
    let weekDayName = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    let weekDayNumber = date.getDay();
    return weekDayName[weekDayNumber];
}
function getWeekDayFunction() {   
    let dateInput = document.getElementById('dateInput').value;
    let date = new Date(dateInput);
    alert(getWeekday(date));
}
