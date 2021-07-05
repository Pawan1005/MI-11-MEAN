let sectionA = document.getElementsByClassName("sectionA");
let sectionB = document.getElementsByClassName("sectionB");
let result = document.getElementById("result");
let a = [],
    b = [],
    res = [];
function mergeAndSort() {
    a = [];
    b = [];
    for (let i = 0; i < 5; i++) {
        a.push(parseInt(sectionA[i].value));
        b.push(parseInt(sectionB[i].value));
    }
    res = [...a];
    for (let i = 0; i < b.length; i++) {
        res.push(b[i]);
    }
    mergeSort(res, 0, 9);
    result.innerHTML += "<h3>After Merge</h3>";
    for (let i = 0; i < res.length; i++) {
        result.innerHTML += `<div>${i + 1} : ${res[i]}</div>`;
    }
}

function merge(array, start, mid, end) {
    let temp = [],
        k = 0,
        i = start,
        j = mid + 1;
    while (i <= mid && j <= end) {
        if (array[i] >= array[j]) {
            temp[k] = array[j];
            j++;
            k++;
        } else {
            temp[k] = array[i];
            i++;
            k++;
        }
    }
    while (i <= mid) {
        temp[k] = array[i];
        i++;
        k++;
    }
    while (j <= end) {
        temp[k] = array[j];
        j++;
        k++;
    }
    for (let index = start; index <= end; index++) {
        array[index] = temp[index - start];
    }
}

function mergeSort(array, start, end) {
    if (start < end) {
        let mid = parseInt((start + end) / 2);
        mergeSort(array, start, mid);
        mergeSort(array, mid + 1, end);
        merge(array, start, mid, end);
    }
}
