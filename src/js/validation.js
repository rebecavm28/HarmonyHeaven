// Espera a que se cargue completamente la ventana antes de ejecutar el código
window.addEventListener('load', ()=> {
    // Para obtener las referencias a los elementos del formulario por su ID
    const form = document.querySelector('#formulario')
    const nombre = document.getElementById('nombre')
    const apellidos = document.getElementById('apellidos')
    const email = document.getElementById('email')
    const telefono = document.getElementById('telefono')
    const mensaje = document.getElementById('mensaje')

    // Agrega un evento de escucha para el envío del formulario
    form.addEventListener('submit', (e) => {
        // Así evitamos que el formulario se envíe de manera predeterminada
        e.preventDefault()
        validaCampos()
    })
    
    // Función que valida los campos del formulario
    const validaCampos = ()=> {
        // Captura los valores ingresados por el usuario
        const nombreValor = nombre.value.trim()
        const apellidosValor = apellidos.value.trim()
        const emailValor = email.value.trim()
        const telefonoValor = telefono.value.trim();
        const mensajeValor = mensaje.value.trim();
     
        // Validando campo usuario
        if(!nombreValor){
            validaFalla(nombre, 'Por favor, rellena este campo.')
        }else{
            validaOk(nombre)
        }

        // Validando campo apellidos
        if(!apellidosValor){
            validaFalla(apellidos, 'Por favor, rellena este campo.')
        }else{
            validaOk(apellidos)
        }

        // Validando campo email
        if(!emailValor){
            validaFalla(email, 'Por favor, introduce una dirección de correo electónico.')            
        }else if(validaEmail) {
            validaFalla(email, 'El e-mail no es válido')
        }else {
            validaOk(email)
        }

        // Validando campo telefono
        if(!telefonoValor){
            validaFalla(telefono, 'Por favor, introduce su número de teléfono.')            
        }else {
            validaOk(telefono)
        }

        // Validando campo mensaje
        if(!mensajeValor) {
            validaFalla(mensaje, 'Por favor, rellena este campo.')
        }else if(mensajeValor.length < 8) {
            validaFalla(mensaje, 'El mensaje es demasiado corto.')
        }else if(mensajeValor.length > 150) {
            validaFalla(mensaje, 'El mensaje es demasiado largo.')
        }else {
            validaOk(mensaje)
        }
        
    }

    // Función que marca un campo como inválido y muestra un mensaje
    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    // Función que marca un campo como válido
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }
    // Función que valida un formato de dirección de correo electrónico
    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }
})