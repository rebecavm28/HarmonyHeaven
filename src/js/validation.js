window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const nombre = document.getElementById('nombre')
    const apellidos = document.getElementById('apellidos')
    const email = document.getElementById('email')
    const telefono = document.getElementById('telefono')
    const mensaje = document.getElementById('mensaje')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })
    
    const validaCampos = ()=> {
        //capturar los valores ingresados por el usuario
        const nombreValor = nombre.value.trim()
        const apellidosValor = apellidos.value.trim()
        const emailValor = email.value.trim()
        const telefonoValor = telefono.value.trim();
        const mensajeValor = mensaje.value.trim();
        /*const passValor = pass.value.trim()
        const passConfirmaValor = passConfirma.value.trim();*/
     
        //validando campo usuario
        //(!usuarioValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)
        if(!nombreValor){
            //console.log('CAMPO VACIO')
            validaFalla(nombre, 'Por favor, rellena este campo.')
        }else{
            validaOk(nombre)
        }

        //validando campo apellidos
        if(!apellidosValor){
            //console.log('CAMPO VACIO')
            validaFalla(apellidos, 'Por favor, rellena este campo.')
        }else{
            validaOk(apellidos)
        }

        //validando campo email
        if(!emailValor){
            validaFalla(email, 'Por favor, introduce una dirección de correo electónico.')            
        }else if(validaEmail) {
            validaFalla(email, 'El e-mail no es válido')
        }else {
            validaOk(email)
        }

        //validando campo telefono
        if(!telefonoValor){
            validaFalla(telefono, 'Por favor, introduce su número de teléfono.')            
        }else {
            validaOk(telefono)
        }

        //validando campo mensaje
        if(!mensajeValor) {
            validaFalla(mensaje, 'Por favor, rellena este campo.')
        }else if(mensajeValor.length < 8) {
            validaFalla(mensaje, 'El mensaje es demasiado corto.')
        }else if(mensajeValor.length > 150) {
            validaFalla(mensaje, 'El mensaje es demasiado largo.')
        }else {
            validaOk(mensaje)
        }
         /*//validando campo password
         const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/          
         if(!passValor) {
             validaFalla(pass, 'Campo vacío')
         } else if (passValor.length < 8) {             
             validaFalla(pass, 'Debe tener 8 caracteres cómo mínimo.')
         } else if (!passValor.match(er)) {
             validaFalla(pass, 'Debe tener al menos una may., una min. y un núm.')
         } else {
             validaOk(pass)
         }*/

    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }
})