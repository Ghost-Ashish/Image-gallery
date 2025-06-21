const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const images = document.querySelectorAll(".gallery .image img");
let currentIndex = 0;

function openLightbox(index) {
  lightbox.style.display = "flex";
  lightboxImg.src = images[index].src;
  currentIndex = index;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeImage(step) {
  currentIndex += step;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  lightboxImg.src = images[currentIndex].src;
}

function filterImages(category) {
  const items = document.querySelectorAll(".gallery .image");
  items.forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
