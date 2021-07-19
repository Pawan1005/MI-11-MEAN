function getDateAgo(dt, number) {
    days = 86400000;
    DaysAgo = new Date(dt - number * days);
    alert(`${number} days ago of ${dt} is \n${DaysAgo}`);
}
function minusdate() {
    var userdate = document.getElementById("date").value;
    var dt = new Date(userdate);
    getDateAgo(
        dt,
        parseInt(
            prompt(
                "enter the number which you are going to cancel the date with"
            )
        )
    );
}
