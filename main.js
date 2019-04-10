const squere = document.createElement('div');
document.body.appendChild(squere);

let grow = true;
let size = 100;

squere.style.width = 100 + "px";
squere.style.height = 100 + "px";

window.addEventListener('scroll', function () {
    if (size >= window.innerWidth / 2) {
        grow = !grow;
    } else if (size <= 0) {
        grow = !grow;
    }
    if (grow) {
        size += 5;
        squere.style.width = size + "px";
        squere.style.height = size + "px";
    } else {
        size -= 5;
        squere.style.width = size + "px";
        squere.style.height = size + "px";
    }
})