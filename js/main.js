{

/**
 * Clase de inicio
 * 
 * @author Javier Lopera Jiménez
 * 
*/

    let inicio = () => {
        
        // Variables para inputs

        let botonEnviar = document.getElementById("enviar");
        let inputTexto = document.getElementById("texto");
        let inputCheckbox = document.getElementById("checkbox");
        let inputNumero = document.getElementById("numero");
        let inputCorreo = document.getElementById("correo");
        let inputFecha = document.getElementById("fecha");
        let inputDni = document.getElementById("dni");
        let inputTelefono = document.getElementById("telefono");
        let inputUrl = document.getElementById("url");

        // Variables para errores

        let errorRadio = document.getElementById("errorRadioButton");


        let arrayInputs = [inputTexto,inputCheckbox,inputNumero,inputCorreo,inputDni,inputFecha,inputTelefono,inputUrl];
        let arrayErrores = [errorTexto,errorCheckbox,
            errorNumero,errorCorreo,errorDni,errorFecha,errorTelefono,errorUrl];

        // Funciones para chequear los campos

        chequeaTexto = () => {
            inputTexto.nextSibling.nextSibling.innerHTML =validar.comprobarTexto(inputTexto.value);

            //     inputTexto.nextSibling.nextSibling.innerHTML = validar.expresiones.arrayTexto[1];
            // }
            // else {
            //     inputTexto.nextSibling.nextSibling.innerHTML = "";
            // }
        }

        chequeaNumero = () => {
            if (!validar.comprobarNumero(inputNumero.value)) {
                inputNumero.nextSibling.nextSibling.innerHTML = validar.expresiones.arrayNumero[1];
            }
            else {
                inputNumero.nextSibling.nextSibling.innerHTML = "";
            }
        }

        chequeaCheckbox = () => {
            if(!validar.comprobarCheckbox("checkbox")) {
                inputCheckbox.nextSibling.nextSibling.innerHTML = "El checkbox debe ser seleccionado";
            }
            else{
                inputCheckbox.nextSibling.nextSibling.innerHTML = "";
            }
        }

        chequeaRadio = () => {
            if(!validar.comprobarRadio("radio1","radio2","radio3")) {
                errorRadio.innerHTML = "Alguna opción debe ser seleccionada";
            }
            else{
                errorRadio.innerHTML = "";
            }
        }

        chequeaFecha = () => {
                
            inputFecha.nextSibling.nextSibling.innerHTML = validar.comprobarFechaNacimiento(inputFecha.value);
            
        }

        chequeaDni = () => {
            // if (!validar.comprobarDni(inputDni.value)) {
            //     // inputDni.nextSibling.nextSibling.innerHTML = validar.expresiones.arrayDni[1];
            // }
            // else {
                inputDni.nextSibling.nextSibling.innerHTML = validar.comprobarDni(inputDni.value);
            // }
        }

        chequeaCorreo = () => {
            if (!validar.comprobarCorreo(inputCorreo.value)) {
                inputCorreo.nextSibling.nextSibling.innerHTML = validar.expresiones.arrayCorreo[1];
            }
            else {
                inputCorreo.nextSibling.nextSibling.innerHTML = "";
            }
        }

        chequeaTelefono = () => {
            if (!validar.comprobarTelefono(inputTelefono.value)) {
                inputTelefono.nextSibling.nextSibling.innerHTML = validar.expresiones.arrayTelefono[1];
            }
            else {
                inputTelefono.nextSibling.nextSibling.innerHTML = "";
            }
        }

        chequeaUrl = () => {
            if (!validar.comprobarUrl(inputUrl.value)) {
                inputUrl.nextSibling.nextSibling.innerHTML = validar.expresiones.arrayUrl[1];
            }
            else {
                inputUrl.nextSibling.nextSibling.innerHTML = "";
            }
        }

        inputTexto.addEventListener("blur", chequeaTexto);
        document.getElementById("checkbox").addEventListener("blur",chequeaCheckbox);
        radio1.addEventListener("blur",chequeaRadio);
        radio2.addEventListener("blur",chequeaRadio);
        radio3.addEventListener("blur",chequeaRadio);
        inputNumero.addEventListener("blur", chequeaNumero);
        inputCorreo.addEventListener("blur",chequeaCorreo);
        inputFecha.addEventListener("blur", chequeaFecha);
        inputDni.addEventListener("blur", chequeaDni);
        inputTelefono.addEventListener("blur",chequeaTelefono);
        inputUrl.addEventListener("blur",chequeaUrl);



        botonEnviar.addEventListener("click", function (event) {
            
            chequeaTexto();
            chequeaCheckbox();
            chequeaRadio();
            chequeaNumero();
            chequeaCorreo();
            chequeaDni();
            chequeaFecha();
            chequeaTelefono();
            chequeaUrl();
            
            for (const i of document.getElementsByTagName("span")) {
                if(i.innerHTML==""){
                
                }
                else{
                    if(i.innerHTML!=""){
                        event.preventDefault();
                        i.previousSibling.previousSibling.focus();
                        break;
                    }
                }
            }
        });

    }

    document.addEventListener("DOMContentLoaded", inicio);
}
