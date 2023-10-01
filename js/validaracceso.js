let usuario = document.getElementById("usuario");
let password = document.getElementById("password");
let verificar = document.getElementById("verificar");

verificar.addEventListener('click',validar);

function validar(){

    event.preventDefault();

        if (usuario.value == "admin" && password.value == "admin123") {
           
            Swal.fire({
    
                icon: "success",
                title: "¡El usuario ingreso correctamente!",
                text: "",
                showConfirmButton: true,
                confirmButtonText: "OK",
                closeOnConfirm: false

            });


        }else{
            Swal.fire({
            
            icon: "error",
            title: "¡Datos incorrectos!",
            text: "",
            showConfirmButton: true,
            confirmButtonText: "OK",
            closeOnConfirm: false

        });

        } 
    }

