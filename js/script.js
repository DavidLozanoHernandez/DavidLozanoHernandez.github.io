// Obtener todos los botones con la clase .openModalBtn
var openModalBtns = document.querySelectorAll('.openModalBtn');
var modalTextContent = document.getElementById("modalTextContent");
var myModal = new bootstrap.Modal(document.getElementById("myModal"));

// Agregar un listener de clic a cada botón
openModalBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        var fileName = btn.getAttribute("data-file");  // Obtener el nombre del archivo del botón
        console.log(fileName)
        cargarContenidoTexto(fileName);  // Cargar el contenido del archivo
        myModal.show();  // Mostrar el modal
    });
});

// Función para cargar el contenido del archivo de texto
function cargarContenidoTexto(fileName) {
    fetch(fileName)
    .then(response => response.text())
    .then(data => {
        modalTextContent.innerText = data;  // Inyectar el contenido del archivo en el modal
        console.log(data)
    })
    .catch(error => {
        modalTextContent.innerText = "Error al cargar el archivo: " + error.message;
    });
}
