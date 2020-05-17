

/**
 * Clase que valida todas las expresiones regulares
 * 
 * @author Javier Lopera Jiménez
 * 
*/

// Arrays donde se almacenarán las expresiones regulares y el error correspondiente 
// en caso de no ser válido


validar = (function () {

    let expresiones = {
        arrayTexto: [new RegExp("^[a-zA-Zá-úÁ-Ú0-9 ]+$"), "Se debe escribir un texto"],
        arrayNumero: [new RegExp("^[0-9]+$"), "Se debe escribir un número entero"],
        arrayFecha: [new RegExp("^([0-9]{2})([/-])([0-9]{2})([/-])([0-9]{4})$")],
        arrayDni: [new RegExp("^([0-9]{8})[- ]?([a-zA-Z])$"), "12345678Z o 12345678-Z", "TRWAGMYFPDXBNJZSQVHLCKET"],
        arrayCorreo: [new RegExp("^[0-9a-zA-Z]+[@][0-9a-zA-Z]+[.][a-zA-Z]+$"), "Se debe poner el correo correctamente"],
        arrayTelefono: [new RegExp("^([+]?[0-9]?[0-9]?[0-9]?[0-9]?)?[ ]?[0-9]{3}[ ]?[0-9]{3}[ ]?[0-9]{3}[ ]?$"), "Número no válido"],
        arrayUrl: [new RegExp("^(http[s]?[:][/][/])?(www[.])?[a-zA-Z]+[.][a-zA-Z]+([/][a-zA-Z0-9]+)*$"), "Se debe poner la url correctamente"],

    }

    // Comprueba que el nombre sea correcto

    let comprobarTexto = function (texto) {

        if (!expresiones.arrayTexto[0].test(texto.trim()))
            return expresiones.arrayTexto[1];
        return "";
    }

    // Comprueba que el numero sea correcto

    let comprobarNumero = function (numero) {
        if(!expresiones.arrayNumero[0].test(numero.trim())){
            return expresiones.arrayNumero[1];
        }
        return "";
    }

    // Comprueba si el checkBox esta activo

    let comprobarCheckbox = function (input) { 
        if(!input.checked){
            return "Este campo debe estar seleccionado"
        }
        return "";
    }

    // Comprueba que el radio Button no quede vacio

    let comprobarRadio = function (opciones, campoError) {
        let check = false;

        for (const i of opciones) {
            if(!check && i.checked){
                check = true;
            }
        }
        if (!check) {
            campoError.innerHTML = "Debes seleccionar algún campo";
        }
        else{
            campoError.innerHTML = "";
        }
    }

    // Comprueba que el radio Button no quede vacio

    let comprobarSelect = function (opciones,campoError) {
        let check = true;

        for (const i of opciones) {
            if(opciones[0].selected){
                check = false;
            }
        }
        if (!check) {
            campoError.innerHTML = "Debes seleccionar algún campo";
        }
        else{
            campoError.innerHTML = "";
        }
    }

    function comprobarFechaNacimiento (fecha){

        let fechaDestructuring = expresiones.arrayFecha[0].exec(fecha);
        
        if(fecha == ""){
            return "El campo no puede quedar vacio";
        }
        if(fechaDestructuring == null){
            return "Formato incorrecto, 'DD-MM-AAAA'";
        }

        let date = new Date(`${fechaDestructuring[5]}/${fechaDestructuring[3]}/${fechaDestructuring[1]}`);
        
        if(fechaDestructuring[2] != fechaDestructuring[4]){
            return "El separador debe de ser el mismo para separar dia/mes y mes/año";
        }

        if(Number(fechaDestructuring[1]) != date.getDate() || Number(fechaDestructuring[3]) != date.getMonth() +1 || Number(fechaDestructuring[5]) != date.getFullYear()){
            return "La fecha no es válida";
        }  

        return "";
    }

    // Comprueba que el Dni sea correcto

    let comprobarDni = function (dniCompleto) {

        try {
            let [, dniNumero, dniLetra] = expresiones.arrayDni[0].exec(dniCompleto);

            if (expresiones.arrayDni[0].exec(dniCompleto) != null && (dniLetra.toUpperCase() ==
                expresiones.arrayDni[2][parseInt(dniNumero) % 23])) {
                return "";
            }
            return "La letra no corresponde con el dni";

        } catch{
            return expresiones.arrayDni[1];
        }
    }

    let comprobarCorreo = function (correo) {
        if(!expresiones.arrayCorreo[0].test(correo.trim())){
            return expresiones.arrayCorreo[1];
        }
        return "";
    }

    let comprobarTelefono = function (telefono) {
        if(!expresiones.arrayTelefono[0].test(telefono.trim())){
            return expresiones.arrayTelefono[1];
        }
        return "";    
    }

    let comprobarUrl = function (url) {
        if(!expresiones.arrayUrl[0].test(url.trim())){
            return expresiones.arrayUrl[1];
        }
        return "";
    }

    return {
        comprobarTexto: comprobarTexto,
        comprobarNumero: comprobarNumero,
        comprobarCheckbox: comprobarCheckbox,
        comprobarRadio: comprobarRadio,
        comprobarSelect: comprobarSelect,
        comprobarCorreo: comprobarCorreo,
        comprobarDni: comprobarDni,
        comprobarFechaNacimiento: comprobarFechaNacimiento,
        comprobarTelefono: comprobarTelefono,
        comprobarUrl: comprobarUrl,
        expresiones: expresiones
    }
})();