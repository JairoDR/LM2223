function ocultar(id, color) {
    let circulo = document.getElementById(id).style.backgroundColor;
    if(circulo == "transparent") {
        document.getElementById(id).style.backgroundColor = color;
    }
    else {
        document.getElementById(id).style.backgroundColor = 'transparent'; 
    }
}
