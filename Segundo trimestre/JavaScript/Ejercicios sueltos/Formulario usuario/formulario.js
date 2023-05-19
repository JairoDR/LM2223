let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let dni = document.getElementById("dni");
let pin1 = document.getElementById("pin1");
let pin2 = document.getElementById("pin2");
let dni_invalido = false;
let pin1_invalido = false;
let pin2_invalido = false;

let ObligaNombre = document.getElementById("ObligaNombre");
let ObligaApellido = document.getElementById("ObligaApellido");
let ObligaCorreo = document.getElementById("ObligaCorreo");
let ObligaDNI = document.getElementById("ObligaDNI");
let ObligaPin1 = document.getElementById("ObligaPin1");
let ObligaPin2 = document.getElementById("ObligaPin2");

let comprobaciones = [];

function validar(){
    limpiarComprobaciones();

    if(validarNombre()){
        comprobaciones.push('true');
    }else{
        ObligaNombre.style.display = 'block';
        comprobaciones.push('false');
    }

    if(validarApellido()){
        comprobaciones.push('true');
    }else{
        ObligaApellido.style.display = 'block';
        comprobaciones.push('false');
    }

    if(validarCorreo()){
        comprobaciones.push('true');
    }else{
        ObligaCorreo.style.display = 'block';
        comprobaciones.push('false');
    }

    if(validarDNI()){
        comprobaciones.push('true');
    }else{
        if(dni_invalido){
            ObligaDNI.innerHTML = 'DNI con letra incorrecta';
        }        
        ObligaDNI.style.display = 'block';
        comprobaciones.push('false');
    }

    if(validarPin1()){
        comprobaciones.push('true');
    }else{
        if(pin1_invalido){
            ObligaPin1.innerHTML = 'Pin necesita 8 carácteres';
        }else{
            ObligaPin1.innerHTML = 'Este campo es obligatorio';
        }
        ObligaPin1.style.display = 'block';
        comprobaciones.push('false');
    }
    if(validarPin2()){
        comprobaciones.push('true');
    }else{
        if(pin2_invalido){
            ObligaPin2.innerHTML = 'Pin necesita 8 carácteres';
        }else{
            ObligaPin2.innerHTML = 'Este campo es obligatorio';
        }
        ObligaPin2.style.display = 'block';
        comprobaciones.push('false');
    }


    if(validarPin1() && validarPin2()){
        if(comprobarPin()){
            comprobaciones.push('true');
        }else{
            ObligaPin1.style.display = 'block';
            ObligaPin2.style.display = 'block';
            ObligaPin1.innerHTML = 'Pin introducido no son iguales';
            ObligaPin2.innerHTML = 'Pin introducido no son iguales';
            comprobaciones.push('false');
        }
    }

    validarTodo();
}


function validarNombre(){
    if(nombre.value != "" && nombre.value != null && nombre.value.length > 1){
        return true;
    }
    return false;
}
function validarApellido(){
    if(apellido.value != "" && apellido.value != null && apellido.value.length > 1){
        return true;
    }
    return false;
}
function validarCorreo(){
    if(correo.value != "" && correo.value != null){
        return true;
    }
    return false;
}
function validarDNI(){  
    let dnia = dni.value.toUpperCase();
    var validar_dni = /^[XYZ]?\d{8}[A-Z]$/;
    if(validar_dni.test(dnia) === true){
        let letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

        let numero =  dnia.charAt(0)+dnia.charAt(1)+dnia.charAt(2)+dnia.charAt(3)+dnia.charAt(4)+dnia.charAt(5)+dnia.charAt(6)+dnia.charAt(7);
        let resto = numero%23;
        let dni_correspondiente = numero+letras[resto];
        if(dni_correspondiente === dnia){
            dni_invalido = false;
            return true;
        }else{
            dni_invalido = true;
            return false;
        }
    }else{
        return false;
    }
    
}
function validarPin1(){
    if (pin1.value.length === 8) {
        pin1_invalido = false;
        return true;
    }else{
        pin1_invalido = true;
        return false;
    }
}
function validarPin2(){
    if (pin2.value.length === 8) {
        pin2_invalido = false;
        return true;
    }else{
        pin2_invalido = true;
        return false;
    }
}
function comprobarPin(){
    if(pin1.value === pin2.value){
        return true;
    }
    return false;
}


function limpiarComprobaciones(){
    dni_invalido = false;
    pin1_invalido = false;
    pin2_invalido = false;
    comprobaciones = [];
    ObligaNombre.style.display = 'none';
    ObligaApellido.style.display = 'none';
    ObligaCorreo.style.display = 'none';
    ObligaDNI.style.display = 'none';

    ObligaPin1.innerHTML = 'Este campo es obligatorio';
    ObligaPin2.innerHTML = 'Este campo es obligatorio';
    ObligaPin1.style.display = 'none';
    ObligaPin2.style.display = 'none';
}

function validarTodo(){
    let valida = true;
    for(let i=0; i<= comprobaciones.length;i++){
        if(comprobaciones[i] == 'false'){
            valida = false;
            break;
        }
    }
    if(valida){
        let direccion = document.getElementById("direccion");
        let ciudad = document.getElementById("ciudad");
        let telefono = document.getElementById("telefono");
        let text = "Su usuario es: "+nombre.value[0]+nombre.value[1]+apellido.value[0]+apellido.value[1];
        if(direccion.value != "" && direccion.value != null){
            text+= direccion.value;
        }
        if(ciudad.value != "" && ciudad.value != null){
            text+= ciudad.value;
        }
        if(telefono.value != "" && telefono.value != null){
            text+= telefono.value;
        }
        alert(text) 
        limpiarComprobaciones();
    }else{
        
    }
}