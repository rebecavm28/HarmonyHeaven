
/*script.js nav bar*/

const toggleMenuElement = document.getElementById('toggle-menu');/*el icono de la hamburguesa*/ 
const mainMenuElement= document.getElementById('main-menu');/*el menu*/ 

toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('main-menu--show')
});

/*Yo quiero escuchar un click, que sría mi Event Listener y cuando haga click a ese mainMenuElement, quier cambiarle la clase(Esto lo hago con el classList?? y qiero ir a main-menu--show(esto esta en el css))*/ 
/*script.js nav bar*/