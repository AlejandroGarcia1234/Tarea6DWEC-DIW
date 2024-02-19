let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', () => {
   navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
   navigate(1);
});

function navigate(direction) {
   const galleryContainer = document.querySelector('.gallery-container');
   const totalImages = document.querySelectorAll('.gallery-item').length;

   currentIndex = (currentIndex + direction + totalImages) % totalImages;
   const offset = -currentIndex * 100;

   galleryContainer.style.transform = `translateX(${offset}%)`;
}

document.querySelectorAll('.gallery-item img').forEach((image, index) => {
    image.addEventListener('click', () => {
        showImage(index);
    });
});

document.querySelector('.close').addEventListener('click', () => {
    closeImage();
});

document.getElementById('overlay').addEventListener('click', (event) => {
    if (event.target === document.getElementById('overlay')) {
        closeImage();
    }
});

function showImage(index) {
    const imageUrl = document.querySelectorAll('.gallery-item img')[index].src;
    const modalImage = document.getElementById('modal-image');
    modalImage.src = imageUrl;

    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
}

function closeImage() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

