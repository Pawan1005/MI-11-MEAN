function agecheck() {
    var name, age;
    name = document.getElementById("inputname").value;
    age = parseInt(document.getElementById("inputage").value);
    if (age >= 18) {
        document.getElementById("show").innerHTML = `<span style="color: blue;">${name}</span>&nbsp;<span style="color: red;">is eligible to Vote</span>`;
    } else {
        document.getElementById("show").innerHTML = `<span style="color: blue;">${name}</span>&nbsp;<span style="color: red;">is not eligible to Vote</span>`;
    }
}
