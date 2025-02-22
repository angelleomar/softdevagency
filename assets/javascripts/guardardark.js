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


document.addEventListener("DOMContentLoaded", function () {
    const isWebView = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        return (
            (/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(userAgent)) || 
            (/\bwv\b/.test(userAgent) || /Android.*Version\/[0-9.]+/.test(userAgent))
        );
    };

    if (isWebView()) {
        const downloadSection = document.getElementById('download-app');
        if (downloadSection) {
            downloadSection.style.display = 'none'; // Solo oculta la sección de descarga
        }
    }
});
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && (event.key === "u" || event.key === "s" || event.key === "i" || event.key === "j")) {
    event.preventDefault();
  }
});
