// ==============================
// VENTANA DE CONTACTO
// ==============================

const contactoBtn = document.getElementById("contactoBtn");
const contactoModal = document.getElementById("contactoModal");
const cerrarContacto = document.getElementById("cerrarContacto");


// Abrir contacto
contactoBtn.addEventListener("click", function () {
    contactoModal.classList.add("activo");
});


// Cerrar contacto con la X
cerrarContacto.addEventListener("click", function () {
    contactoModal.classList.remove("activo");
});


// Cerrar haciendo clic fuera de la ventana
contactoModal.addEventListener("click", function (e) {
    if (e.target === contactoModal) {
        contactoModal.classList.remove("activo");
    }
});
// ==============================
// REPRODUCTOR DE RADIO
// ==============================

const playBtn = document.getElementById("playBtn");
const audioRadio = document.getElementById("audioRadio");

playBtn.addEventListener("click", function () {

    if (audioRadio.paused) {

        audioRadio.play();

        playBtn.textContent = "❚❚";

    } else {

        audioRadio.pause();

        playBtn.textContent = "▶";

    }

});


// Cuando termina el audio
audioRadio.addEventListener("ended", function () {

    playBtn.textContent = "▶";

});