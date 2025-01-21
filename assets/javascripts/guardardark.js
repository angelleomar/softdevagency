

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
