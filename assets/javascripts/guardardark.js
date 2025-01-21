const darkModeButton = document.getElementById('darkmode-button');
const root = document.documentElement;  // <html> element

function applyDarkMode(isDarkMode) {
    if (isDarkMode) {
        root.classList.add('dark');  // Aplica la clase 'dark' en el <html>
    } else {
        root.classList.remove('dark');  // Elimina la clase 'dark'
    }
    updateButtonIcon(isDarkMode);  // Actualiza el ícono del botón
}

function updateButtonIcon(isDarkMode) {
    const icon = darkModeButton.querySelector('i');
    if (icon) {
        icon.className = isDarkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    }
}

function toggleDarkMode() {
    const isDarkMode = root.classList.toggle('dark');  // Alterna la clase 'dark' en <html>
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');  // Guarda la preferencia en localStorage
    updateButtonIcon(isDarkMode);  // Actualiza el ícono al alternar
}

document.addEventListener('DOMContentLoaded', () => {
    const darkModeSetting = localStorage.getItem('darkMode');
    const isDarkMode = darkModeSetting === 'enabled';  // Recupera la preferencia guardada

    applyDarkMode(isDarkMode);  // Aplica el modo oscuro o claro según el estado guardado

    darkModeButton.addEventListener('click', toggleDarkMode);
});

document.addEventListener('DOMContentLoaded', () => {
    const isWebView = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Detecta si está en un WebView en Android o iOS
        return (
            (/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(userAgent)) || // iOS WebView
            (/\bwv\b/.test(userAgent) || /Android.*Version\/[0-9.]+/.test(userAgent)) // Android WebView
        );
    };

    // Si está en WebView, oculta el apartado de descarga de la app
    if (isWebView()) {
        const downloadSection = document.getElementById('download-app');
        if (downloadSection) {
            downloadSection.style.display = 'none'; // Ocultar sección
        }
    }
});