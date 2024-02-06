/*1*/const formularios_ajax=document.querySelectorAll(".FormularioAjax"); //obtenemos "todos)(querySelectorAll)" los elementos de esa clase  FormularioAjax

function enviar_formulario_ajax(e){
    e.preventDefault();

    let enviar=confirm("Quieres enviar el formulario");

    if(enviar==true){

        let data= new FormData(this); 
        let method=this.getAttribute("method"); // recibe el metodo post( insertar o get) method==post
        let action=this.getAttribute("action"); // extrae a q archivo enviará los datos recibidos action=./php/categoria_guardar.php

        let encabezados= new Headers(); // genreamos encabezados

        let config={     //enviamos encabezados, necesario para mandar a la api fetch
            method: method,
            headers: encabezados,
            mode: 'cors',
            cache: 'no-cache',
            body: data
        };

        fetch(action,config) // enviamos los datos por api fetch
        .then(respuesta => respuesta.text())
        .then(respuesta =>{ 
            let contenedor=document.querySelector(".form-rest"); // basicamente para que llene el div con un mensaje dependiendo si cumplio con los filtros, no se envio o se regsitró exitosamente
            contenedor.innerHTML = respuesta;
        });
    }

}

/*2*/formularios_ajax.forEach(formularios => {  //aca recoremos todos los formularios
    formularios.addEventListener("submit",enviar_formulario_ajax); // esperar el evento submit(el type del boton)
});



