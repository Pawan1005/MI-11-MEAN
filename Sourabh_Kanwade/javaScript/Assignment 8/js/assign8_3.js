let subjects = document.getElementsByClassName("subjects");
let result = document.getElementById("result");
let arr = [],
    flag = false;
function calculate() {
    result.innerHTML = "";
    arr = [];
    for (let i = 0; i < subjects.length; i++) {
        subjects[i].style.border = "1px solid ";
        if (parseInt(subjects[i].value) <= 80) {
            arr.push(parseInt(subjects[i].value));
        } else {
            subjects[i].style.border = "2px solid red";
        }
    }
    console.log(arr);
    if (arr.length != 10) {
        alert("All values must be less than 80.");
    } else {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = parseInt(arr[i] + arr[i] * 0.2);
            result.innerHTML += `<div>Total marks ${i + 1} : ${arr[i]}</div>`;
        }
        let choice = parseInt(
            prompt(
                "1 – Bubble sort (Press 1)\n2 – Insertion sort (Press 2)\n3 – selection sort(Press 3)\n4 – Quick Sort(Press 4)\n5 – Exit (Press X or Cancel or 5)"
            )
        );
        switch (choice) {
            case 1:
                flag = true;
                bubbleSort(arr, arr.length);
                break;
            case 2:
                flag = true;
                insertionSort(arr);
                break;
            case 3:
                flag = true;
                selectionSort(arr);
                break;
            case 4:
                flag = true;
                quickSort(arr, 0, 9);
                break;
            default:
                flag = false;
                break;
        }
        if (flag) {
            result.innerHTML += `<h2>Total marks after sort </h2>`;
            for (let i = 0; i < arr.length; i++) {
                result.innerHTML += `<div>Total marks ${i + 1} : ${arr[i]}</div>`;
            }
        }
    }
}
function partition(arr, low, high) {
    let pivot = arr[high],
        i = low - 1,
        temp;
    for (let j = low; j <= high; j++) {
        if (pivot > arr[j]) {
            i++;
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    temp = arr[high];
    arr[high] = arr[i + 1];
    arr[i + 1] = temp;
    return i + 1;
}
function quickSort(arr, low, high) {
    if (low < high) {
        pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
bubbleSort = (arr, n) => {
    let swapped;
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
};
insertionSort = (array) => {
    let key, j;
    for (let i = 1; i < array.length; i++) {
        key = array[i];
        j = i - 1;
        while (j >= 0 && key < array[j]) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
};
selectionSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
};
