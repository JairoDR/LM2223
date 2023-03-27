/******************** CAMBIO LOGIN - REGISTER ********************/

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');



registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

/******************** FORMULARIO ********************/
let email_login = document.getElementById('email-login');
let password_login = document.getElementById('password-login');
let remember = document.getElementById('remember');

let name_register = document.getElementById('name-register');
let email_register = document.getElementById('email-register');
let password_register = document.getElementById('password-register');

let number_register = document.getElementById('number-register');
let card_register = document.getElementById('card-register');
let location_register = document.getElementById('location-register');

let conditions = document.getElementById('conditions');
let mecagoentodo = document.getElementById('mecagoentodo');

function login(){
    if(!comprobarLogin()){
        return;
    }
    let usuario = {
        email: email_login.value,
        password: password_login.value
    }
    if(localStorage.getItem("usuario") != null){
        if(localStorage.getItem("usuario") == JSON.stringify(usuario)){
            alert("Logueado como:\n"+JSON.stringify(usuario));
        }else{
            alert("No esta registrado o contraseña incorrecta");
        }
    }else{
        alert("No hay ningun usuario registrado");
    }


}

function register(){
    if(!comprobarRegister()){
        return;
    }
    let usuario = {
        email: email_register.value,
        password: password_register.value
    }
    let DireccionDePago = {
        name: name_register.value,
        email: email_register.value,
        password: password_register.value,
        number: number_register.value,
        card: card_register.value,
        location: location_register.value
    }
    localStorage.setItem("usuario", JSON.stringify(usuario))
    localStorage.setItem("pago", JSON.stringify(DireccionDePago))
    alert("Registrado como:\n"+JSON.stringify(usuario));
}
function comprobarLogin(){
    let comprobaciones = [];
    if(validarCorreo(email_login)){
        email_login.style.borderBottom = "2px solid black";
        comprobaciones.push("true");
    }else{
        comprobaciones.push("false");
        email_login.style.borderBottom = "2px solid red";
    }
    if(validarContraseña(password_login)){
        password_login.style.borderBottom = "2px solid black";
        comprobaciones.push("true");
    }else{
        comprobaciones.push("false");
        password_login.style.borderBottom = "2px solid red";
    }
    for(let i=0; i<=comprobaciones.length;i++){
        if(comprobaciones[i] == "false"){
            return false;
        }
    }
    return true;
}
function comprobarRegister(){
    let comprobaciones = [];
    if(validarNombre(name_register)){
        name_register.style.borderBottom = "2px solid black";
        comprobaciones.push("true");
    }else{
        comprobaciones.push("false");
        name_register.style.borderBottom = "2px solid red";
    }
    if(validarCorreo(email_register)){
        email_register.style.borderBottom = "2px solid black";
        comprobaciones.push("true");
    }else{
        comprobaciones.push("false");
        email_register.style.borderBottom = "2px solid red";
    }
    if(validarContraseña(password_register)){
        password_register.style.borderBottom = "2px solid black";
        comprobaciones.push("true");
    }else{
        comprobaciones.push("false");
        password_register.style.borderBottom = "2px solid red";
    }

    if(validarNumero(number_register)){
        number_register.style.borderBottom = "2px solid black";
        comprobaciones.push("true");
    }else{
        comprobaciones.push("false");
        number_register.style.borderBottom = "2px solid red";
    }
    if(validarTarjeta(card_register)){
        card_register.style.borderBottom = "2px solid black";
        comprobaciones.push("true");
    }else{
        comprobaciones.push("false");
        card_register.style.borderBottom = "2px solid red";
    }
    if(validarDireccion(location_register)){
        location_register.style.borderBottom = "2px solid black";
        comprobaciones.push("true");
    }else{
        comprobaciones.push("false");
        location_register.style.borderBottom = "2px solid red";
    }

    if(validarCondiciones()){
        mecagoentodo.style.color = "black";
        comprobaciones.push("true");
    }else{
        mecagoentodo.style.color = "red";
        comprobaciones.push("false");
    }
    for(let i=0; i<=comprobaciones.length;i++){
        if(comprobaciones[i] == "false"){
            return false;
        }
    }
    return true;
}

function validarNombre(name) {
    if (name.value != "" && name.value != null && name.value.length > 1) {
        return true;
    }
    return false;
}
function validarCorreo(email) {
    let correo = /^[0-9a-zA-Z]+@+[a-zA-z]+[.]+[a-zA-Z]+$/;
    let correcto = true;
    if (!correo.test(email.value))
    {
        correcto = false;
    }
    return (correcto);
}
function validarContraseña(password) {
    if (password.value != "" && password.value != null && password.value.length > 1) {
        return true;
    }
    return false;
}
function validarNumero(numero){
    if (numero.value != "" && numero.value != null) {
        return true;
    }
    return false;
}
function validarTarjeta(email) {
    let correo = /^[0-9a-zA-Z]+@+[a-zA-z]+[.]+[a-zA-Z]+$/;
    let correcto = true;
    if (!correo.test(email.value))
    {
        correcto = false;
    }
    return (correcto);
}
function validarDireccion(direccion){
    if (direccion.value != "" && direccion.value != null) {
        return true;
    }
    return false;
}

function validarCondiciones() {
    if(conditions.checked){
        return true;
    }
    return false;
}
function isNumber(value){
    if(!isNaN(value)) return true;
}


function LoginEvent (e){
    e = e || window.event;
    if(!comprobarLogin()){
        e.preventDefault();
    }else {
        login();
    }
}
function RegisterEvent (e){
    e = e || window.event;
    if(!comprobarRegister()){
        e.preventDefault();
    }else {
        register();
    }
}