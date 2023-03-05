let usuario = document.getElementById('usuario');
let pass = document.getElementById('pass');
let usu_corto, contra_corta, usu_incorrecto, contra_incorrecta;

let recuerdame = document.getElementById('check');



function login() {
    reestablecer();
  // localStorage.setItem(usuario.value, pass.value);

    if(compruebaUsuario()){
        if(compruebaContra()){
            alert("Este usuario se ha identificado como "+ usuario.value+  "\ncon la contraseña "+ pass.value)
        }
        else {
            if(contra_corta){
                alert("Contraseña demasiado corta");
            }
            else if(contra_incorrecta) {
                alert("Contraseña incorrecta");
            }
            else {
                alert("Contraseña no válida");
            }
        }
    }
    else {
        if(usu_corto){
            alert("Usuario demasiado corto");
        }
        else if(usu_incorrecto) {
            alert("Usuario incorrecto");
        }
        else {
            alert("Usuario no válido");
        }
    }
    
}
function compruebaUsuario() {
    let usu = usuario.value;

    if(usu != null && usu != ""){
        if(usu.length >3){
            let p = localStorage.getItem(usu);
            if(p != null){
                return true;
            } 
            else {
                usu_incorrecto = true;
                return false;
            }
        }
        usu_corto = true;
        return false;
    }
    return false;
}

function compruebaContra() {
    let contra = pass.value;

    if(contra != null && contra != ""){
        if(contra.length >3){
            if(localStorage.getItem(usuario.value) == contra) {
                return true;
            }
            else {
                contra_incorrecta = true;
                return false;
            }
        }
        contra_corta = true;
        return false;
    }
    return false;
}

function reestablecer() {
    usu_corto = false;
    contra_corta = false;
    usu_incorrecto = false; 
    contra_incorrecta = false;
}