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
