function carousel() {
    const track = document.getElementById('track');
    const items = document.querySelectorAll('.item');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    let index = 0;
    const gap = 20;

    function updateCarousel() {
        const itemWidth = items[0].offsetWidth;
        const amountToMove = (itemWidth + gap) * index;
        track.style.transform = `translateX(-${amountToMove}px)`;
    }

    function nextSlide() {
        index = (index + 1) % items.length;
        updateCarousel();
        resetTimer();
    }

    function prevSlide() {
        index = (index - 1 + items.length) % items.length;
        updateCarousel();
        resetTimer();
    }

    // Eventos dos Botões
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Lógica do Autoplay
    let autoPlay = setInterval(nextSlide, 5000);

    function resetTimer() {
        clearInterval(autoPlay);
        autoPlay = setInterval(nextSlide, 5000);
    }

    // Pausa ao passar o mouse
    const wrapper = document.getElementById('wrapper');
    wrapper.addEventListener('mouseenter', () => clearInterval(autoPlay));
    wrapper.addEventListener('mouseleave', () => autoPlay = setInterval(nextSlide, 5000));
}

export default carousel;