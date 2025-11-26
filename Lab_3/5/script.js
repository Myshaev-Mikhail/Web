const images = [
    'img/emblem_FMF.jpg',
    'img/kingdom_FMF.jpg',
    'img/lightning.jpg',
    'img/cave.jpg',
];

let currentImageIndex = 0;

const imgEl = document.getElementById('switch-image');
const btn = document.getElementById('change-image-btn');

btn.addEventListener('click', function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imgEl.src = images[currentImageIndex];
});