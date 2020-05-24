{

    /**
     * Clase de inicio
     * 
     * @author Javier Lopera Jiménez
     * 
    */


    // Funciones para chequear

    function chequeaTexto() {
        this.nextSibling.nextSibling.innerHTML = validar.comprobarTexto(this.value);
    }

    function chequeaNumero() {
        this.nextSibling.nextSibling.innerHTML = validar.comprobarNumero(this.value);
    }

    function chequeaFecha() {
        this.nextSibling.nextSibling.innerHTML = validar.comprobarFechaNacimiento(this.value);
    }

    function chequeaDni() {
        this.nextSibling.nextSibling.innerHTML = validar.comprobarDni(this.value);
    }

    function chequeaCorreo() {
        this.nextSibling.nextSibling.innerHTML = validar.comprobarCorreo(this.value);
    }

    function chequeaTelefono() {
        this.nextSibling.nextSibling.innerHTML = validar.comprobarTelefono(this.value);
    }

    function chequeaUrl() {
        this.nextSibling.nextSibling.innerHTML = validar.comprobarUrl(this.value);
    }

    function chequeaRadio() {
        validar.comprobarRadio(document.getElementsByName("radio"), document.getElementById("errorRadioButton"));
    }

    function chequeaSelect() {
        validar.comprobarSelect(document.getElementById("select").value, document.getElementById("errorSelect"));
        // validar.comprobarSelect(document.getElementById("select"),document.getElementById("errorSelect"));
    }

    function chequeaCheckbox() {
        this.nextSibling.nextSibling.innerHTML = validar.comprobarCheckbox(document.getElementById("checkbox"));
    }

    let funciones = {
        texto: chequeaTexto,
        numero: chequeaNumero,
        correo: chequeaCorreo,
        fecha: chequeaFecha,
        dni: chequeaDni,
        telefono: chequeaTelefono,
        url: chequeaUrl,
        checkbox: chequeaCheckbox,
    }

    let inicio = () => {

        let inputs = document.getElementsByTagName("input");

        // Recorro todos los inputs para añadirle el escuchador a cada uno

        for (input of inputs) {
            input.addEventListener("blur", funciones[input.id]);
        }


        // Utilizo el for para recorrer todos los elementos del radioButton
        for (const i of document.getElementsByName("radio")) {
            i.addEventListener("blur", chequeaRadio);
        }

        // Escuchador del select

        document.getElementById("select").addEventListener("blur", chequeaSelect);

        // Boton de sumbit

        document.getElementsByTagName("form")[0].addEventListener("submit", function (event) {

            let inputs = document.getElementsByTagName("input");

            event.preventDefault();

            for (input of inputs) {
                input.dispatchEvent(new Event("blur"));
            }

            document.getElementById("select").dispatchEvent(new Event("blur"));

            for (const i of document.getElementsByTagName("span")) {
                if (i.innerHTML != "") {

                    event.preventDefault();
                    i.previousSibling.previousSibling.focus();
                    break;
                }
            }
        });

        // Boton de rellenar

        document.getElementById("rellenar").addEventListener("click", function (event) {
            document.getElementById("texto").value = "Hola";
            document.getElementById("numero").value = "98";
            document.getElementById("correo").value = "javiLoji@gmail.com";
            document.getElementById("dni").value = "12345678Z";
            document.getElementById("fecha").value = "29/02/2000";
            document.getElementById("telefono").value = "658542122";
            document.getElementById("url").value = "https://amazon.com";

            // Uso preventDefault para evirar el submit en el boton rellenar
            event.preventDefault();

        });

        // Boton de vaciar

        document.getElementById("formulario").addEventListener("reset", function () {

            let spans = document.getElementsByTagName("span");

            for (const span of spans) {
                span.innerHTML = "";
            }
        })


    }

    document.addEventListener("DOMContentLoaded", inicio);
}
