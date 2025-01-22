// Elementos y configuración inicial
const darkModeButton = document.getElementById('darkmode-button');
const root = document.documentElement; // <html> element

// Función para aplicar el modo oscuro o claro
function applyDarkMode(isDarkMode) {
    root.classList.toggle('dark', isDarkMode); // Cambia la clase 'dark'
    updateButtonIcon(isDarkMode); // Actualiza el ícono del botón
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled'); // Guarda la preferencia
}

// Función para actualizar el ícono del botón
function updateButtonIcon(isDarkMode) {
    const icon = darkModeButton.querySelector('i');
    if (icon) {
        icon.className = isDarkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'; // Cambia el ícono
    }
}

// Alterna el modo oscuro al hacer clic en el botón
function toggleDarkMode() {
    const isDarkMode = root.classList.contains('dark'); // Verifica el estado actual
    applyDarkMode(!isDarkMode); // Alterna el estado y aplica cambios
}

// Inicializa la configuración del modo oscuro al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const darkModeSetting = localStorage.getItem('darkMode');
    const isDarkMode = darkModeSetting === 'enabled'; // Recupera la preferencia guardada
    applyDarkMode(isDarkMode); // Aplica el modo guardado

    // Asigna el evento de clic al botón
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