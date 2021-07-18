function age() {
    function calculate_age(dob) {
        var dif_date = Date.now() - dob.getTime();
        var age_date = new Date(dif_date);
        return Math.abs(age_date.getUTCFullYear() - 1970);
    }
    let date = document.getElementById("num").value;
    alert("Age is  :   " + calculate_age(new Date(date)) + " year ");
    let age = calculate_age(new Date(date));
    document.getElementById("num1").innerHTML = +age + " year ";
}
