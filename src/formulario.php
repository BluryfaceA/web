<?php 
    require_once "BD.php";

	/*== Almacenando datos ==*/
    $nombre=limpiar_cadena($_POST['nombre']);
    $apellido=limpiar_cadena($_POST['apellido']);
    $email=limpiar_cadena($_POST['email']);
    $cel=limpiar_cadena($_POST['cel']);
    $ciudad=limpiar_cadena($_POST['ciudad']);

    /*== Verificando campos obligatorios ==*/
    if($nombre=="" || $apellido=="" || $email=="" || $cel=="" || $ciudad==""  ){
        echo '
            <div class="notification is-danger is-light">
                <strong>¡Ocurrio un error inesperado!</strong><br>
                No has llenado todos los campos que son obligatorios
            </div>
        ';
        exit();
    }





    

    /*== Guardando datos ==*/

    $guardar_formulario = conexion();
    $guardar_formulario = $guardar_formulario->prepare("INSERT INTO formulario(nombre,apellido,email,telefono,ciudad) VALUES(:nombre,:apellido,:email,:cel,:ciudad)");
    
    $marcadores=[

       ":nombre" =>  $nombre,
       ":apellido" =>  $apellido,
       ":email" =>  $email,
       ":cel" =>  $cel,
       ":ciudad" =>  $ciudad
       
    ];

    $guardar_formulario->execute($marcadores);

    if($guardar_formulario->rowCount()==1){
        echo '
        <div class="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Info</span>
            <div>
                <span class="font-medium">   Formulario Enviado!</span> Gracias por su colaboración.
            </div>
            </div>
    ';
  

    }else{
        echo '
        <div class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span class="sr-only">Info</span>
        <div>
            <span class="font-medium">   Ocurrió un error!</span> no se pudo enviar el formulario correctamente.
        </div>
        </div>
    ';
    }

    $guardar_categoria = null;