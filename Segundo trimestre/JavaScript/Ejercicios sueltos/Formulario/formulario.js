var usuNombre="",usuApellido="",usuTelefono="";
var letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
var validaNombre,validaApellido,validaCorreo,validaDNI,validaPIN,validaTel;

function verificar(){
    if(document.getElementById('Nombre').value=="")
        {
            document.getElementById('valNombre').style.display="block";
            document.getElementById('valNombre').innerHTML="<div class='obligatorios'> Este campo es obligatorio<div/>"
            validaNombre=0;

        }
    else
    {       
            var largoNombre=document.getElementById('Nombre').value;
            if(largoNombre.length<2)
                {
                    document.getElementById('valNombre').style.display="block";
                    document.getElementById('valNombre').innerHTML="<div class='obligatorios'>Nombre demasiado corto<div/>"
                    validaNombre=0;
                }
            else{
            document.getElementById('valNombre').style.display="none";
            usuNombre=document.getElementById('Nombre').value;
            usuNombre=usuNombre.toUpperCase();
            validaNombre=1;
        }
    }

    if(document.getElementById('Apellido').value=="")
        {
            document.getElementById('valApellido').style.display="block";
            document.getElementById('valApellido').innerHTML="<div class='obligatorios'> Este campo es obligatorio<div/>"
            validaApellido=0;
        }
    else
    {       
            var largoApellido=document.getElementById('Apellido').value;
            if(largoApellido.length<2)
                {
                    document.getElementById('valApellido').style.display="block";
                    document.getElementById('valApellido').innerHTML="<div class='obligatorios'>Apellido demasiado corto<div/>"
                    validaApellido=0;
                }
            else{
            document.getElementById('valApellido').style.display="none";
            usuApellido=document.getElementById('Apellido').value;
            usuApellido=usuApellido.toUpperCase();
            validaApellido=1;
        }

    }

    if(document.getElementById('Correo').value=="")
        {
            document.getElementById('valCorreo').style.display="block";
            document.getElementById('valCorreo').innerHTML="<div class='obligatorios'> Este campo es obligatorio<div/>"
            validaCorreo=0;
        }
    else
    {       
            validarEmail(document.getElementById('Correo').value)
    }           

    if(document.getElementById('DNI').value=="")
        {
            document.getElementById('valDNI').style.display="block";
            document.getElementById('valDNI').innerHTML="<div class='obligatorios'> Este campo es obligatorio<div/>"
        }
    else
    {   var dnidni=document.getElementById('DNI').value;
        if(dnidni.length!=9)
        {
            document.getElementById('valDNI').style.display="block";
            document.getElementById('valDNI').innerHTML="<div class='obligatorios'> Ha introducido un DNI incorrecto<div/>";
            validaDNI=0;
        }
        else{
            dninum=dnidni[0]+dnidni[1]+dnidni[2]+dnidni[3]+dnidni[4]+dnidni[5]+dnidni[6]+dnidni[7];
            var a=dninum%23;
            if(letras[a]!=dnidni[8]){
                
            document.getElementById('valDNI').style.display="block";
            document.getElementById('valDNI').innerHTML="<div class='obligatorios'> La letra no coincide<div/>";
            validaDNI=0;
            }
            else{

                document.getElementById('valDNI').style.display="none";
                validaDNI=1;

            }
        }
    }

    if(document.getElementById('PIN').value=="")
        {
            document.getElementById('valPIN').style.display="block";
            document.getElementById('valPIN').innerHTML="<div class='obligatorios'> Este campo es obligatorio<div/>"
            validaPIN=0;
        }
    else{   
        var pinLargo=document.getElementById('PIN').value;
        if(pinLargo.length!=8)
            {
            document.getElementById('valPIN').style.display="block";
            document.getElementById('valPIN').innerHTML="<div class='obligatorios'>El PIN tiene que ser de 8 dígitos<div/>"
            validaPIN=0;
            }
        else{
            document.getElementById('valPIN').style.display="none";
            validaPIN=0;
            }
    }

    if(document.getElementById('PINconf').value=="")
        {
            document.getElementById('valPINconf').style.display="block";
            document.getElementById('valPINconf').innerHTML="<div class='obligatorios'> Este campo es obligatorio<div/>"
            validaPIN=0;
        }
    else 
    {   if(document.getElementById('PINconf').value!=document.getElementById('PIN').value)
            {
            document.getElementById('valPINconf').style.display="block";
            document.getElementById('valPINconf').innerHTML="<div class='obligatorios'> El PIN no coincide<div/>"
            validaPIN=0;
            }

        else
            {
            
            document.getElementById('valPINconf').style.display="none";
            validaPIN=1;
            
            }
    }

    var telefonoLargo=document.getElementById('Telefono').value;
    if(telefonoLargo.length==9)
        {
            document.getElementById('valTel').style.display="none";
            validaTel=1;
            usuTelefono=document.getElementById('Telefono').value;
        }
    else
        {
            if(telefonoLargo.length==0)
                {
                    document.getElementById('valTel').style.display="none";
                    validaTel=2;
                }
            else{
                document.getElementById('valTel').style.display="block";
                document.getElementById('valTel').innerHTML="<div class='obligatorios'>Teléfono incorrecto, necesario 9 dígitos<div/>"
            }
        }

    create();
}

function create(){
    if(validaNombre==1 && validaApellido==1 && validaCorreo==1 && validaDNI==1 && validaPIN==1 && validaTel==2)
        alert("Su usuario es: "+usuNombre[0]+usuNombre[1]+usuApellido[0]+usuApellido[1])
    else
    {
        if(validaNombre==1 && validaApellido==1 && validaCorreo==1 && validaDNI==1 && validaPIN==1 && validaTel==1)
        alert("Su usuario es: "+usuNombre[0]+usuNombre[1]+usuApellido[0]+usuApellido[1]+usuTelefono[usuTelefono.length-3]+usuTelefono[usuTelefono.length-2]+usuTelefono[usuTelefono.length-1])
        else
            return 0;
    }
}


function validarEmail(valor) {
    if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(valor))
    {   
        
        document.getElementById('valCorreo').style.display="none";
        validaCorreo=1;
    } 
    else 
    {
        validaCorreo=0;
        document.getElementById('valCorreo').style.display="block";
        document.getElementById('valCorreo').innerHTML="<div class='obligatorios'>Formato de correo erróneo<div/>"
    }
}
