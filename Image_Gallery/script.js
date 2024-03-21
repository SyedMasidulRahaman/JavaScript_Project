let scrollContainer = document.querySelector('.gallery');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');
let sec = document.querySelector('.sec');


scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 1010;
});
backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 1010;
});

scrollContainer.style.scrollBehavior = "smooth";
