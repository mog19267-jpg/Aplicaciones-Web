document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formularioContacto");
    const respuesta = document.getElementById("respuestaFormulario");
    if (formulario && respuesta) {
        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();
            if (!formulario.checkValidity()) {
                formulario.reportValidity();
                return;
            }
            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            if (nombre.length < 2) {
                respuesta.textContent = "Escribe un nombre válido.";
                return;
            }
            if (!correo.includes("@")) {
                respuesta.textContent = "Escribe un correo electrónico válido.";
                return;
            }
            if (mensaje.length < 10) {
                respuesta.textContent =
                    "El mensaje debe tener al menos 10 caracteres.";
                return;
            }
            respuesta.textContent =
                "Gracias, " + nombre +
                ". El formulario se validó correctamente, pero no envía correos reales.";

            formulario.reset();
        });
    }
    const enlaces = document.querySelectorAll(".menu a");
    let paginaActual = window.location.pathname.split("/").pop();

    if (paginaActual === "") {
        paginaActual = "index.html";
    }
    enlaces.forEach(function (enlace) {
        const destino = enlace.getAttribute("href");

        if (destino === paginaActual) {
            enlace.classList.add("activo");
        } else {
            enlace.classList.remove("activo");
        }
    });

});
