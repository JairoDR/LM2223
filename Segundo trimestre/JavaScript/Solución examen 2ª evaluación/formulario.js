function validar()
{
    document.getElementById("resultado").innerHTML ="";
    let entradas = [];    
    let correctopass = true;
    let correcto = true;
    let correctomail=true;
    let i,id,longitud;
    for (i=0; i<6; i++) // Inicializamos a vacio todos los labels del error0 al error5
    {
        document.getElementById("error"+i).innerHTML = "";
        entradas.push(document.getElementById("dato"+i).value);
    }
    longitud = entradas.length-1; 
    for (i=0; i<longitud; i++)
    {
        if (entradas[i]==""){
            id = "error"+i;
            document.getElementById(id).innerHTML = "Este campo es obligatorio";
            correcto = false; 
        }
    }
    correctomail=VerificarMail(entradas[2]);
    if (!correctomail){
        document.getElementById("error2").innerHTML = "El mail no es correcto";
    }
    correctopass=VerificarPassword(entradas[3],entradas[4],3);
    
    if (!document.getElementById("dato5").checked)
    {
        document.getElementById("error5").innerHTML = "Debes aceptar las condiciones del formulario";
    }
    if (correctopass && correcto && correctomail)
    {
        document.getElementById("resultado").innerHTML = "El formulario es correcto";
    }
}

function VerificarPassword (pass1,pass2,i)
{
        let correcto = true;
        let valores = /^\d+$/;
        let tamano1 = pass1.length;
        let tamano2 = pass2.length;
        let item1 = "error"+i;
        let item2 = "error"+(i+1);

        document.getElementById(item1).innerHTML = "";
            document.getElementById(item2).innerHTML = "";

        if(pass1!=pass2)
        {
            document.getElementById(item1).innerHTML = "las contraseñas no son iguales";
            document.getElementById(item2).innerHTML = "las contraseñas no son iguales";
            correcto=false;
            
        }else if (tamano1<8 || tamano2 <8)
        {
            document.getElementById(item1).innerHTML = "las contraseñas deben tener mínimo 8 dígitos";
            document.getElementById(item2).innerHTML = "las contraseñas deben tener mínimo 8 dígitos";
            correcto=false;

        }else if(!pass1.match(valores) || !pass2.match(valores))
        {
            document.getElementById(item1).innerHTML = "solo dígitos";
            document.getElementById(item2).innerHTML = "solo dígitos";
            correcto=false;
        }
        return (correcto);
}

function VerificarMail(entrada)
{
    let correo = /^[0-9a-zA-Z]+@+[a-zA-z]+[.]+[a-zA-Z]+$/;
    let correcto = true;
    if (!correo.test(entrada))
    {
        correcto=false;
    }
    return (correcto);
}

