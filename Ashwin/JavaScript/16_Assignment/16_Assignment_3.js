let isChange = 0;
function imageWithHeadingChange() {
    let img = document.getElementById('legends');
    let heading = document.getElementById('heading');

    if (isChange == 0) {
        img.src = 'Images/2.jpg';
        img.alt = 'Virat Kohli';
        heading.innerText = 'Virat Kohli';
        isChange = 1;
    }
    else if (isChange == 1) {
        img.src = 'Images/5.jpg';
        img.alt = 'Images/5.jpg';
        heading.innerText = 'Mahendra Singh Dhoni';
        isChange = 2;
    }
    else {
        img.src = './Images/3.jpg';
        img.alt = 'Amc';
        heading.innerText = 'Sachin Tendulkar';
        isChange = 0;
    }
}
