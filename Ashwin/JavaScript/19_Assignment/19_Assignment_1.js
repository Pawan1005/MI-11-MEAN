function addProgramming() {
    let programmingName = document.getElementById('programming');
    let programmingList = document.querySelector('#programmingList');
    let li = document.createElement('li');
    li.innerText = programmingName.value.toUpperCase();
    programmingList.appendChild(li);
    programmingName.value = "";
}
