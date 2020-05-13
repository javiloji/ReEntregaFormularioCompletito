

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
        arrayNumero: [new RegExp("^[0-9 ]+$"), "Se debe escribir un número entero"],
        arrayFecha: [new RegExp("^([0-9]{2})(/{1}|-{1})([0-9]{2})/{1}|-{1}([0-9]{4})$"), "xx/xx/xxxx o xx-xx-xxxx"],
        arrayDni: [new RegExp("^([0-9]{8})[- ]?([a-zA-Z])$"), "xxxxxxxxZ o xxxxxxxx-Z", "TRWAGMYFPDXBNJZSQVHLCKET"],
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

    let comprobarRadio = function (opciones, campoError1) {
        let check = false;

        for (const i of opciones) {
            if(!check && i.checked){
                check = true;
            }
        }
        if (!check) {
            campoError1.innerHTML = "Debes seleccionar algún campo";
        }
        else{
            campoError1.innerHTML = "";
        }
    }

    // Comprueba que la fecha sea correcto

    let comprobarFechaNacimiento = function (fechaNacimiento) {
        try {
            let bisiesto = false;
            let maximoDiasMes;
            let [, dia,, mes, anno] = expresiones.arrayFecha[0].exec(fechaNacimiento);

            dia = parseInt(dia);
            mes = parseInt(mes);
            anno = parseInt(fechaNacimiento.slice(6,fechaNacimiento.length));

            if ((anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0) {
                bisiesto = true;
            }
            
            switch (mes) {
                case 1, 3, 5, 7, 8, 10, 12:
                    maximoDiasMes = 31;
                    break;
                case 4, 6, 9, 11:
                    maximoDiasMes = 30;
                    break;
                default:
                    if (!bisiesto) {
                        maximoDiasMes = 28;
                        break;
                    }
                    maximoDiasMes = 29;
                    break;
            }

            if ((expresiones.arrayFecha[0].test(fechaNacimiento.trim()) && dia <= maximoDiasMes && mes <= 12)) {
                return "";
            }
            else {
                return expresiones.arrayFecha[1];
            }
        } catch{
            return expresiones.arrayFecha[1];
        }
    }

    // Comprueba que el Dni sea correcto

    let comprobarDni = function (dniCompleto) {

        try {
            let [, dniNumero, dniLetra] = expresiones.arrayDni[0].exec(dniCompleto);

            if (expresiones.arrayDni[0].test(dniCompleto.trim()) && (dniLetra.toUpperCase() ==
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
        comprobarCorreo: comprobarCorreo,
        comprobarDni: comprobarDni,
        comprobarFechaNacimiento: comprobarFechaNacimiento,
        comprobarTelefono: comprobarTelefono,
        comprobarUrl: comprobarUrl,
        expresiones: expresiones
    }
})();