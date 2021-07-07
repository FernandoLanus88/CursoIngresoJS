/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1 = document.getElementById("txtIdPrecioUno").value;
    var precio2 = document.getElementById("txtIdPrecioDos").value;
    var precio3 = document.getElementById("txtIdPrecioTres").value;

    var precio1 = parseInt(precio1);
    var precio2 = parseInt(precio2);
    var precio3 = parseInt(precio3);

    resultado = precio1 + precio2 + precio3;

    alert("La suma da "+resultado);
}



function Promedio () 
{
	
    var precio1 = document.getElementById("txtIdPrecioUno").value;
    var precio2 = document.getElementById("txtIdPrecioDos").value;
    var precio3 = document.getElementById("txtIdPrecioTres").value;

    var precio1 = parseInt(precio1);
    var precio2 = parseInt(precio2);
    var precio3 = parseInt(precio3);

    resultado = precio1 + precio2 + precio3;
    resultado = resultado / 3;

    alert("El promedio es "+resultado);


}
function PrecioFinal () 
{

    var precio1 = document.getElementById("txtIdPrecioUno").value;
    var precio2 = document.getElementById("txtIdPrecioDos").value;
    var precio3 = document.getElementById("txtIdPrecioTres").value;

    var precio1 = parseInt(precio1);
    var precio2 = parseInt(precio2);
    var precio3 = parseInt(precio3);

    resultado = precio1 + precio2 + precio3;
    iva = resultado *21 /100;
    resultado = resultado +iva;

    alert("El precio final es "+resultado);


	
}