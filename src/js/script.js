document.addEventListener('DOMContentLoaded', function () {
    // Obtén el contenedor del piano
    const piano = document.getElementById('piano');

    // Agrega un evento de clic a cada tecla del piano
    piano.addEventListener('click', function (event) {
        // Verifica si se hizo clic en una tecla (div con clase "key")
        if (event.target.classList.contains('key')) {
            // Obtiene la nota asociada a la tecla
            const nota = event.target.getAttribute('data-noteC');

            // Obtiene el elemento de audio correspo7ndiente a la nota
            const audio = document.getElementById();

            // Reproduce el sonido de la nota
            audio.play();
        }
    });
});