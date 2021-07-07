/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    var largo = document.getElementById("txtIdLargo").value;
    var ancho = document.getElementById("txtIdAncho").value;
    

    var largo = parseInt(largo);
    var ancho = parseInt(ancho);
    var perimetro = (largo + ancho)*2;

    cantidadAlambre = perimetro * 3;

    alert("Se necesitan "+cantidadAlambre+" metros de alambre");


}


function Circulo () 
{
	

    var radio = document.getElementById("txtIdRadio").value;
    var radio = parseInt(radio);
    var diametro = radio *2;

    cantidadAlambre = diametro * 3.14;
    cantidadAlambre = cantidadAlambre.toFixed(2);
    

    alert("Se necesitan "+cantidadAlambre+" metros de alambre");


}
function Materiales () 
{


    var largo = document.getElementById("txtIdLargo").value;
    var ancho = document.getElementById("txtIdAncho").value;
    

    var largo = parseInt(largo);
    var ancho = parseInt(ancho);
    var area = (largo + ancho)*2;

    cantidadCemento = area *2;
    cantidadCal = area *3;

    

    alert("Se necesitan "+cantidadCemento+" bolsas de cemento "+"y "+cantidadCal+" bolsas de cal");

	
}