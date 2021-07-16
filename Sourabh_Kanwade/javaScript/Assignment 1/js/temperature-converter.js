let convertBtn = document.getElementById("convert"),
    result = document.getElementById("res");

convertBtn.onclick = function () {
    let temp = parseInt(document.getElementById("temp").value);
    result.innerHTML = `${temp} &degC is ${temp * (9 / 5) + 32} &degF`;
};
