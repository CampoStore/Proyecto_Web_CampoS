let currentIndex = 0;
const items = document.querySelectorAll('.carousel');

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
    document.querySelector('.carousel').style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
}

// Agregar event listeners para los botones "Next" y "Prev"
document.getElementById('nextButton').addEventListener('click', nextSlide);
document.getElementById('prevButton').addEventListener('click', prevSlide);

// Cambio automático de diapositivas cada 5 segundos
setInterval(nextSlide, 5000);
