import changeTheme from "./js/theme.js";

const menuBtn = document.querySelector('.mobile-menu-btn');
const navContainer = document.querySelector('.nav-container');

menuBtn.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    
    // Opcional: Animação básica do hambúrguer virando "X"
    menuBtn.classList.toggle('open');
});

// Fechar o menu ao clicar em um link
document.querySelectorAll('.nav-container a').forEach(link => {
    link.addEventListener('click', () => {
        navContainer.classList.remove('active');
    });
});

changeTheme();
