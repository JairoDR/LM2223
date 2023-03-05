mostrarPrimero(0,1,2,3,4);
borrado();

function mostrarPrimero(a,b,c,d,e){
    const preguntas = document.getElementsByClassName('pregunta');
    preguntas[a].style.display='block';
    preguntas[b].style.display='none';
    preguntas[c].style.display='none';
    preguntas[d].style.display='none';
    preguntas[e].style.display='none';
}

function guardar(a,b,c,d,e){
    var preguntas = document.getElementsByClassName('pregunta');
    preguntas[a].style.display='block';
    preguntas[b].style.display='none';
    preguntas[c].style.display='none';
    preguntas[d].style.display='none';
    preguntas[e].style.display='none';

    var correctas=0;
    if(document.getElementById('1.2').checked)
        correctas++;
    
    if(document.getElementById('2.1').checked)
        correctas++;
        
    if(document.getElementById('3.2').checked)
        correctas++;

    if(document.getElementById('4.1').checked)
        correctas++;
    document.getElementById('resultadoFinal').innerHTML="Has acertado "+correctas+ " de 4 preguntas";
}

function borrado(){
    const circulos =document.getElementsByTagName('input');
    for (var i=0;circulos.length;i++)
        circulos[i].checked=false;
}