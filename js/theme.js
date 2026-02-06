function initChangeTheme() {
    const toggle = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    if (!toggle || !icon) return;

    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme');

    function updateIcon(theme) {
        icon.src =
            theme === 'dark'
                ? './assets/moon.png' 
                : './assets/sun.png'; 
    }

    if (savedTheme) {
        root.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);
    }

    toggle.addEventListener('click', () => {
        const next =
            root.getAttribute('data-theme') === 'dark'
                ? 'light' 
                : 'dark'; 

        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateIcon(next);
    });
}

export default initChangeTheme;
