document.getElementById("output").innerText = `Grade : ${"-"}`;
const inputs = document.getElementsByTagName("input");
let numbers = [];
Array.from(inputs).forEach((input) => {
    input.addEventListener("change", (e) => {
        numbers.push(parseInt(e.target.value));
    });
});
let findGrade = () => {
    let total = 0;
    for (let index = 0; index < numbers.length; index++) {
        total += numbers[index];
    }
    per = total / numbers.length;
    let grade = "";
    switch (true) {
        case per > 75: {
            grade = "A";
            break;
        }
        case per > 60: {
            grade = "B";
            break;
        }
        case per > 40: {
            grade = "C";
            break;
        }
        case per > 30: {
            grade = "D";
            break;
        }
        default: {
            grade = "F";
        }
    }
    document.getElementById("output").innerText = `Grade : ${grade}`;
};
