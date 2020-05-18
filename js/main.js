{

/**
 * Clase de inicio
 * 
 * @author Javier Lopera Jiménez
 * 
*/


    // Funciones para chequear

    function chequeaTexto (){
        this.nextSibling.nextSibling.innerHTML = validar.comprobarTexto(this.value);
    }

    function chequeaNumero (){
        this.nextSibling.nextSibling.innerHTML = validar.comprobarNumero(this.value);
    }

    function chequeaFecha (){
        this.nextSibling.nextSibling.innerHTML = validar.comprobarFechaNacimiento(this.value);
    }

    function chequeaDni (){
        this.nextSibling.nextSibling.innerHTML = validar.comprobarDni(this.value);
    }

    function chequeaCorreo (){
        this.nextSibling.nextSibling.innerHTML = validar.comprobarCorreo(this.value);
    }

    function chequeaTelefono (){
        this.nextSibling.nextSibling.innerHTML = validar.comprobarTelefono(this.value);
    }

    function chequeaUrl (){
        this.nextSibling.nextSibling.innerHTML = validar.comprobarUrl(this.value);
    }

    function chequeaRadio (){
        validar.comprobarRadio(document.getElementsByName("radio1"),document.getElementById("errorRadioButton"));
    }

    function chequeaSelect (){
        validar.comprobarSelect(document.getElementById("select"),document.getElementById("errorSelect"));
    }

    function chequeaCheckbox () {
        this.nextSibling.nextSibling.innerHTML = validar.comprobarCheckbox(document.getElementById("checkbox"));
    }

    let inicio = () => {

        // Escuchadores

        // Utilizo el for para recorrer todos los elementos del radioButton
        for (const i of document.getElementsByName("radio1")) {
            i.addEventListener("blur",chequeaRadio);
        }

        document.getElementById("select").addEventListener("blur",chequeaSelect);

        document.getElementById("texto").addEventListener("blur", chequeaTexto);
        document.getElementById("checkbox").addEventListener("blur",chequeaCheckbox);
        document.getElementById("numero").addEventListener("blur", chequeaNumero);
        document.getElementById("correo").addEventListener("blur",chequeaCorreo);
        document.getElementById("fecha").addEventListener("blur", chequeaFecha);
        document.getElementById("dni").addEventListener("blur", chequeaDni);
        document.getElementById("telefono").addEventListener("blur",chequeaTelefono);
        document.getElementById("url").addEventListener("blur",chequeaUrl);


        // Boton de sumbit

        document.getElementsByTagName("form")[0].addEventListener("submit", function (event) {
            
            let inputs = document.getElementsByTagName("input");

            for(input of inputs) {
                input.dispatchEvent(new Event("blur"));
            }

            document.getElementById("select").dispatchEvent(new Event("blur"));
            
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
