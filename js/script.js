var modalTextContent = document.getElementById("modalTextContent");
var myModal = new bootstrap.Modal(document.getElementById("myModal"));

document.addEventListener("click", function (e) {
    const btn = e.target.closest(".openModalBtn");
    if (!btn) return;

    const fileName = btn.dataset.file;

    cargarContenidoTexto(fileName);
    myModal.show();
});

// Función para cargar el contenido del archivo de texto
function cargarContenidoTexto(fileName) {
    fetch(fileName)
        .then(response => response.text())
        .then(data => {
            modalTextContent.innerText = data;
        })
        .catch(error => {
            modalTextContent.innerText = "Error al cargar el archivo: " + error.message;
        });
}

// Alternar Modo Oscuro / Modo Claro
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const themeIcon = document.getElementById("themeIcon");
    const themeText = document.getElementById("themeText");

    function updateThemeIcon(theme) {
        if (!themeToggleBtn) return;
        if (theme === "dark") {
            if (themeIcon) themeIcon.className = "bi bi-sun-fill text-warning";
            if (themeText) themeText.textContent = "Claro";
            themeToggleBtn.setAttribute("title", "Cambiar a modo claro");
            themeToggleBtn.setAttribute("aria-label", "Cambiar a modo claro");
        } else {
            if (themeIcon) themeIcon.className = "bi bi-moon-stars-fill text-primary";
            if (themeText) themeText.textContent = "Oscuro";
            themeToggleBtn.setAttribute("title", "Cambiar a modo oscuro");
            themeToggleBtn.setAttribute("aria-label", "Cambiar a modo oscuro");
        }
    }

    const currentTheme = document.documentElement.getAttribute("data-bs-theme") || "dark";
    updateThemeIcon(currentTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const activeTheme = document.documentElement.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-bs-theme", activeTheme);
            localStorage.setItem("theme", activeTheme);
            updateThemeIcon(activeTheme);
        });
    }
});
