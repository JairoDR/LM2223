/* Variables */

/*
var variable1 = document.getElementById('(nombre de la ID a coger'); Document es para seleccionar el documento entero
let variable2 = document.getElementById('nombre de la ID a coger'); Otra forma
*/

/* String */
/*
var hola1 = "hola"; Una sola cadena de texto
var hola2 = ["hola", "hola2", "hola3"]; Varias cadenas de texto
*/

/* Bucle */
/* Sumar uno hasta llegar al máximo indicado de la variable*/
/*
let longitud=10; 
algo = 0;
for (let i=0;i<=longitud; i++) {
/* Aquí dentro van las funciones a ejecutar*/ 
/* Algo sería un contador para i, para que recorra del 0 al 10 */
/*
if (i == 5) {
    break
    Se rompería el bucle cuando i llegue a 5
} 
*/

/*
algo += 10; Así a algo se le sumaría 10 cada vez que recorre el bucle
};
document.getElementById('ejemplo').innerHTML = algo; innerHTML es para escribir algo dentgro del HTML
*/

/* 
i = 0
algo = 10
i = 1
algo = 20
*/ 

/* Otra forma  
let i = 0;
longitud = 10;
while (i<=longitud){
    
    i++;
}
*/
let longitud = 10;
let algo = 0;
function ejemplo(){

    for (let i=1; i<=longitud; i++) {
    algo += 10;
    }
    document.getElementById('ejemplo').innerHTML = algo;
}
/* Elegir el tercer elemento de una cadena, las cadenas empiezan a elegir por el elemento 0
let cadena3 = hola2[3];
document.getElementById('ejemplo').innerHTML = algo;
*/
