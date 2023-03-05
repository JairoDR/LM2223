muestra(0);
var posicion = 1;

function incrementa(n) {
  muestra(posicion += n);
}

function muestra(n) {
  var i;
  var x = document.getElementsByClassName("fo");
  if (n > x.length) 
        {posicion = 1}
  if (n < 1)
        {posicion = x.length};
  for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
  x[posicion-1].style.display = "block";
}