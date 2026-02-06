function initMenuMobile() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navContainer = document.querySelector('.nav-container');

    menuBtn.addEventListener('click', () => {
        navContainer.classList.toggle('active');

        menuBtn.classList.toggle('open');
    });

    document.querySelectorAll('.nav-container a').forEach(link => {
        link.addEventListener('click', () => {
            navContainer.classList.remove('active');
        });
    });
}

export default initMenuMobile;