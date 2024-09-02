document.addEventListener('DOMContentLoaded', function() {
    // Elementos de las Modales
    const cookieConsentModal = document.getElementById('cookieConsentModal');
    const privacyOptionsModal = document.getElementById('privacyOptionsModal');

    // Botones
    const customizeBtn = document.getElementById('customizeBtn');
    const acceptBtn = document.getElementById('acceptBtn');
    const rejectBtn = document.getElementById('rejectBtn');
    const backBtn = document.getElementById('backBtn');
    const rejectAllBtn = document.getElementById('rejectAllBtn');
    const acceptAllBtn = document.getElementById('acceptAllBtn');
    const saveBtn = document.getElementById('saveBtn');

    // Mostrar el modal de consentimiento de cookies al cargar la página
    cookieConsentModal.style.display = 'flex';

    // Abrir la ventana de personalización al hacer clic en "Saber más y personalizar"
    customizeBtn.addEventListener('click', function() {
        cookieConsentModal.style.display = 'none';
        privacyOptionsModal.style.display = 'flex';
    });

    // Cerrar el modal de personalización y volver al modal inicial
    backBtn.addEventListener('click', function() {
        privacyOptionsModal.style.display = 'none';
        cookieConsentModal.style.display = 'flex';
    });

    // Aceptar todas las cookies y cerrar el modal
    acceptBtn.addEventListener('click', function() {
        cookieConsentModal.style.display = 'none';
    });

    // Rechazar todas las cookies y cerrar el modal
    rejectBtn.addEventListener('click', function() {
        cookieConsentModal.style.display = 'none';
    });

    // Aceptar todas las cookies desde la segunda ventana
    acceptAllBtn.addEventListener('click', function() {
        privacyOptionsModal.style.display = 'none';
    });

    // Rechazar todas las cookies desde la segunda ventana
    rejectAllBtn.addEventListener('click', function() {
        privacyOptionsModal.style.display = 'none';
    });

    // Guardar y continuar
    saveBtn.addEventListener('click', function() {
        privacyOptionsModal.style.display = 'none';
    });
});
