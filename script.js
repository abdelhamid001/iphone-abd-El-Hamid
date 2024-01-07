let img = document.querySelector('.img')
let header = document.querySelector('header')

function phones(phone) {
    img.src = phone;
}

function colors(color) {
    header.style.background = color;
}