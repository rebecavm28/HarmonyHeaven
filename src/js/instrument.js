//JS NAVBAR 
/*script.js nav bar*/

const toggleMenuElement = document.getElementById('toggle-menu');/*el icono de la hamburguesa*/ 
const mainMenuElement= document.getElementById('main-menu');/*el menu*/ 

toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('main-menu--show')
});

/*Yo quiero escuchar un click, que sría mi Event Listener y cuando haga click a ese mainMenuElement, quier cambiarle la clase(Esto lo hago con el classList?? y qiero ir a main-menu--show(esto esta en el css))*/ 
/*script.js nav bar*/

//JS PIANO

const pianoKeys = document.querySelectorAll(".piano-keys .key"),/*El query selectorall e un metdo que se utiliza para seleccionar tdos los elementos que coinciden con n selector css en un docHTML */
volumeSlider = document.querySelector(".volume-slider input");

let allKeys = [],

audio = new Audio("/public/assets/audio/tunes/q.wav"); /*objeto audio */

const playTune = (key) => {
    audio.src = `/public/assets/audio/tunes/${key}.wav`;//pasando audio src basado en la tecla presionada(ya que cada audio esta guardado con su letra y wav lo tienen en comun)
    //si key es, por ejemplo, "C", la expresión se evaluará como "tunes/C.wav".
    //Asignacion de la propiedad src del objeto Audio. Esto actualiza la fuente del archivo de audio del objeto audio para que coincida con la ruta construida dinámicamente.
    //En resumen, esta línea de código se utiliza para cambiar dinámicamente la fuente del archivo de audio asociada al objeto audio basándose en el valor de la variable key. Esto es útil cuando tienes varias teclas de un piano (u otros elementos) y cada una debe reproducir un archivo de audio diferente.

    audio.play(); //propiedad del metodo anterior para reprodcir audio.
    console.log(allKeys);

    const clickedKey = document.querySelector(`[data-key="${key}"]`)//llamando al elemento clickado
    clickedKey.classList.add("active")//agregamos la clase active que esta en el css y anima l tecla cuand hacemos click
    setTimeout(() => {
        clickedKey.classList.remove("active")//con esto quitamos el estilo anterior
    }, 150);
}

pianoKeys.forEach(key => { /*El metodo proporciona una forma más conveniente y legible de recorrer los elementos, como un array por ej*/
    allKeys.push(key.dataset.key); //para que no de error n el JScuado se presionen otras teclas de teclado (adding datakeyvlue to allKeys array, esto esta declarado arriba)
// Llamamos a la funcion playTune pasando el valor de data-key como un argumento.
    key.addEventListener("click", () => playTune(key.dataset.key));
});


//Ahora el codigo que hace que las teclas del piano suenen con el teclado

//keydown es pulsacion de tecla
const handleVolume = (e) => {
    audio.volume = e.target.value; //este evento tiene el control del volmen
}

const pressedKey = (e) => {
    // si la nota presionada esta en el allKeys array, solo llama  a la funcion playTune
    if(allKeys.includes(e.key)) playTune(e.key);
}


volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey); /*tenemos qu declarar pressedKey*/ 

/* BOTON PARA MOSTRAR Y ESCONDER NOTAS */
const showHideKeys = () =>{
    // toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}
keysCheckbox = document.querySelector(".keys-checkbox input");
keysCheckbox.addEventListener("click", showHideKeys);