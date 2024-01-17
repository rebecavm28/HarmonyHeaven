document.getElementById('miboton').addEventListener('click',function(){
    const audio =document.getElementById('miaudio');
    audio.play();
});



/*script.js nav bar*/

const toggleMenuElement = document.getElementById('toggle-menu');/*el icono de la hamburguesa*/ 
const mainMenuElement= document.getElementById('main-menu');/*el menu*/ 

toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('main-menu--show')
});

