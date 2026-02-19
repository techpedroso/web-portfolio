function initMenuMobile() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navContainer = document.querySelector('.nav-container');

    let touchStartX = 0;
    let touchEndX = 0;

    function closeMenu() {
        navContainer.classList.remove('active');
        menuBtn.classList.remove('open');
    }

    function openMenu() {
        navContainer.classList.add('active');
        menuBtn.classList.add('open');
    }

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navContainer.classList.toggle('active');
        menuBtn.classList.toggle('open');
    });

    document.querySelectorAll('.nav-container a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
        const isClickInsideMenu = navContainer.contains(event.target);
        const isClickOnButton = menuBtn.contains(event.target);

        if (!isClickInsideMenu && !isClickOnButton) {
            closeMenu();
        }
    });

    // SWIPE PARA FECHAR
    navContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
    });

    navContainer.addEventListener('touchmove', (e) => {
        touchEndX = e.changedTouches[0].clientX;
    });

    navContainer.addEventListener('touchend', () => {
        const swipeDistance = touchEndX - touchStartX;

        // Se arrastar mais de 70px para direita → fecha
        if (swipeDistance > 70) {
            closeMenu();
        }
    });
}

export default initMenuMobile;
