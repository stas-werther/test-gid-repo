const box = document.querySelector('.box');
box.style.marginLeft = '0px';

const maxMargin = 200;
let currentMargin = 200;  

do{
    +currentMargin;
    box.style.marginLeft = `${currentMargin}px`;

} while (currentMargin <= 200);