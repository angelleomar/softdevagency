// Selecciona elementos del DOM
const darkModeButton = document.getElementById('darkmode-button');
const root = document.documentElement; // <html> element

// Función para aplicar el modo oscuro o claro
function applyDarkMode(isDarkMode) {
    if (isDarkMode) {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }
    updateButtonIcon(isDarkMode);
}

// Función para actualizar el ícono del botón
function updateButtonIcon(isDarkMode) {
    const icon = darkModeButton.querySelector('i');
    if (icon) {
        icon.className = isDarkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    }
}

// Alternar el modo oscuro
function toggleDarkMode() {
    const isDarkMode = root.classList.toggle('dark');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    updateButtonIcon(isDarkMode);
}

// Configurar el estado inicial al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const darkModeSetting = localStorage.getItem('darkMode');
    const isDarkMode = darkModeSetting === 'enabled';

    // Aplica el estado inicial
    applyDarkMode(isDarkMode);

    // Añadir evento al botón
    darkModeButton.addEventListener('click', toggleDarkMode);
});
