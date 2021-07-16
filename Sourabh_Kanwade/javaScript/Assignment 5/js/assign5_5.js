function printPattern() {
    let k = 0;
    let pattern = document.getElementById("pattern");
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            for (let j = 0; j <= i; j++) {
                k++;
                pattern.innerHTML += `<span class="patternItems">&nbsp${k}&nbsp</span>`;
            }
            pattern.innerHTML += "<br><br>";
        }, i * 100);
    }
}
