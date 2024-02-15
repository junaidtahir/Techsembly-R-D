let road = document.getElementById('road');
let mountain = document.getElementById('mountain');
let sky = document.getElementById('sky');
let moon = document.getElementById('moon');
let midnightHeading = document.getElementById('midnight-heading');

window.addEventListener('scroll', () => {
    let { scrollY } = window;
    road.style.top = 0.4 * scrollY + 'px';
    mountain.style.top = (160 +0.01 * scrollY) + 'px'; 
    moon.style.left = 1.1 * scrollY + 'px';
    sky.style.top = -1.2 * scrollY + 'px';
    midnightHeading.style.top = (120 + -1.5 * scrollY) + 'px';
});