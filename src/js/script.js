
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
/*script.js nav bar*/

const toggleMenuElement = document.getElementById('toggle-menu');/*el icono de la hamburguesa*/ 
const mainMenuElement= document.getElementById('main-menu');/*el menu*/ 

toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('main-menu--show')
});

/*Yo quiero escuchar un click, que sría mi Event Listener y cuando haga click a ese mainMenuElement, quier cambiarle la clase(Esto lo hago con el classList?? y qiero ir a main-menu--show(esto esta en el css))*/ 
/*script.js nav bar*/
function reproducirAudio() {
    // Crear un elemento de audio
    const audio = new Audio('C:\Users\Administrator\desktop\proyectomusica\harmonyheaven\public\assets\audio\nota LA.mp3');  // Reemplaza 'ruta/al/tu/archivo-de-audio.mp3' con la ruta de tu archivo de audio

    // Reproducir el audio
    audio.play();
}
