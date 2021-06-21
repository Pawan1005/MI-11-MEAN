const inputs = document.getElementsByTagName("input");
let numbers = [];
Array.from(inputs).forEach((input) => {
    input.addEventListener("change", (e) => {
        numbers.push(parseInt(e.target.value));
    });
});
let secondLarge = () => {
    let firstMax = 0;
    let secondMax = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (firstMax < numbers[i]) {
            secondmax = firstMax;
            firstMax = numbers[i];
        }
        if (numbers[i] != firstMax && numbers[i] > secondMax) {
            secondMax = numbers[i];
        }
    }
    document.getElementsByClassName(
        "output"
    )[0].innerText = `The second largest element is ${secondMax}`;
};
