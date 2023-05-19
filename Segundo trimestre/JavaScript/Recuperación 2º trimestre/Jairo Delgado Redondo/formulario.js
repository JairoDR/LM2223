let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let pin1 = document.getElementById("pin1");
let pin2 = document.getElementById("pin2");
let pin1_invalido = false;
let pin2_invalido = false;

let ObligaNombre = document.getElementById("ObligaNombre");
let ObligaApellido = document.getElementById("ObligaApellido");
let ObligaPin1 = document.getElementById("ObligaPin1");
let ObligaPin2 = document.getElementById("ObligaPin2");
let ObligaCondi = document.getElementById("ObligaCondi")

let comprobaciones = [];

function validar(){
    limpiarComprobaciones();

    if(validarNombre()){
        comprobaciones.push('true');
    }else{
        ObligaNombre.style.display = 'inline-block';
        comprobaciones.push('false');
    }

    if(validarApellido()){
        comprobaciones.push('true');
    }else{
        ObligaApellido.style.display = 'inline-block';
        comprobaciones.push('false');
    }


    if(validarPin1()){
        comprobaciones.push('true');
    }else{
        if(pin1_invalido){
            ObligaPin1.innerHTML = 'El mail no es correcto';
        }else{
            ObligaPin1.innerHTML = 'Este campo es obligatorio';
        }
        ObligaPin1.style.display = 'inline-block';
        comprobaciones.push('false');
    }
    if(validarPin2()){
        comprobaciones.push('true');
    }else{
        if(pin2_invalido){
            ObligaPin2.innerHTML = 'El mail no es correcto';
        }else{
            ObligaPin2.innerHTML = 'Este campo es obligatorio';
        }
        ObligaPin2.style.display = 'inline-block';
        comprobaciones.push('false');
    }

    if(validarPin1() && validarPin2()){
        if(comprobarPin()){
            comprobaciones.push('true');
        }else{
            ObligaPin1.style.display = 'inline-block';
            ObligaPin2.style.display = 'inline-block';
            ObligaPin1.innerHTML = 'Email introducido no son iguales';
            ObligaPin2.innerHTML = 'Email introducido no son iguales';
            comprobaciones.push('false');
        }
    }
    if(validarCondi()){
        comprobaciones.push('true');
    }else{
        ObligaCondi.style.display = 'inline-block';
        comprobaciones.push('false');
        ObligaCondi.innerHTML = "Debes aceptar las condiciones del formulario";
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

function validarCondi() {
    if (document.getElementById('condiciones').checked)
    {
    return true;
    }
    else {
        return false;
    }
}


function limpiarComprobaciones(){
    dni_invalido = false;
    pin1_invalido = false;
    pin2_invalido = false;
    comprobaciones = [];
    ObligaNombre.style.display = 'none';
    ObligaApellido.style.display = 'none';

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
        let text = "Su usuario es: "+nombre.value[0]+nombre.value[1];
        alert(text) 
        limpiarComprobaciones();
    }else{
        
    }
}