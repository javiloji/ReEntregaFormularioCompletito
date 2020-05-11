{

/**
 * Clase de inicio
 * 
 * @author Javier Lopera Jiménez
 * 
*/

    let errorRadio = document.getElementById("errorRadioButton");

    // Funciones para chequear

    function chequeaTexto (){
        this.nextSibling.nextSibling.innerHTML =validar.comprobarTexto(this.value);
    }

    function chequeaNumero (){
        if (!validar.comprobarNumero(this.value)) {
            this.nextSibling.nextSibling.innerHTML = validar.expresiones.arrayNumero[1];
        }
        else {
            this.nextSibling.nextSibling.innerHTML = "";
        }
    }

    function chequeaFecha (){
        this.nextSibling.nextSibling.innerHTML = validar.comprobarFechaNacimiento(this.value);
    }

    function chequeaDni (){
        this.nextSibling.nextSibling.innerHTML = validar.comprobarDni(this.value);
    }

    function chequeaCorreo (){
        if (!validar.comprobarCorreo(this.value)) {
            this.nextSibling.nextSibling.innerHTML = validar.expresiones.arrayCorreo[1];
        }
        else {
            this.nextSibling.nextSibling.innerHTML = "";
        }
    }

    function chequeaTelefono (){
        if (!validar.comprobarTelefono(this.value)) {
            this.nextSibling.nextSibling.innerHTML = validar.expresiones.arrayTelefono[1];
        }
        else {
            this.nextSibling.nextSibling.innerHTML = "";
        }
    }

    function chequeaUrl (){
        if (!validar.comprobarUrl(this.value)) {
            this.nextSibling.nextSibling.innerHTML = validar.expresiones.arrayUrl[1];
        }
        else {
            this.nextSibling.nextSibling.innerHTML = "";
        }
    }

    function chequeaRadio (){
        if(!validar.comprobarRadio("radio1","radio2","radio3")) {
            errorRadio.innerHTML = "Alguna opción debe ser seleccionada";
        }
        else{
            errorRadio.innerHTML = "";
        }
    }

    function chequeaCheckbox () {
        if(!validar.comprobarCheckbox("checkbox")) {
            this.nextSibling.nextSibling.innerHTML = "El checkbox debe ser seleccionado";
        }
        else{
            this.nextSibling.nextSibling.innerHTML = "";
        }
    }

    let inicio = () => {

        // Escuchadores

        document.getElementById("texto").addEventListener("blur", chequeaTexto);
        document.getElementById("checkbox").addEventListener("blur",chequeaCheckbox);
        radio1.addEventListener("blur",chequeaRadio);
        radio2.addEventListener("blur",chequeaRadio);
        radio3.addEventListener("blur",chequeaRadio);
        document.getElementById("numero").addEventListener("blur", chequeaNumero);
        document.getElementById("correo").addEventListener("blur",chequeaCorreo);
        document.getElementById("fecha").addEventListener("blur", chequeaFecha);
        document.getElementById("dni").addEventListener("blur", chequeaDni);
        document.getElementById("telefono").addEventListener("blur",chequeaTelefono);
        document.getElementById("url").addEventListener("blur",chequeaUrl);


        // Boton de sumbit

        document.getElementById("enviar").addEventListener("click", function (event) {
            
            let inputs = document.getElementsByTagName("input");

            for(input of inputs) {
                input.dispatchEvent(new Event("blur"));
            }
            
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
