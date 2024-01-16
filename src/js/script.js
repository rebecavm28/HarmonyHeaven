/script.js nav bar/

const toggleMenuElement = document.getElementById('toggle-menu');/el icono de la hamburguesa/ 
const mainMenuElement= document.getElementById('main-menu');/el menu/ 

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
