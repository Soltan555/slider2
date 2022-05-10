let i = 0;
let images = [];


images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg'];


function test() {
    let slide = document.getElementById("slide")

    slide.src = images[i];

    if (i < 0) {
        i++;
    } else {
        i = 0;
    }

};