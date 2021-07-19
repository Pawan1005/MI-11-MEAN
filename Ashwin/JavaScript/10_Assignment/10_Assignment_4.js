function checkdate() {
    var regExp, str;
   str = document.getElementById("input").value;
   regExp = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
   if (regExp.test(str)) {
       document.getElementById("show").innerHTML = "Date format";
   } else {
       document.getElementById("show").innerHTML = "Invalid Date format";
   }
}
