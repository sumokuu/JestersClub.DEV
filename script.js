// Pixel animation placeholder
const pixelAnimation = document.getElementById("pixel-animation");

function animatePixel() {
    pixelAnimation.style.backgroundColor = pixelAnimation.style.backgroundColor === 'gray' ? '#ff9900' : 'gray';
}

setInterval(animatePixel, 500);
