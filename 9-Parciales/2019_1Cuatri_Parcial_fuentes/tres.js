function mostrar()
{

var precio = prompt("Ingrese el precio");
var precio = parseInt(precio);


var descuento = prompt("Que descuento desea aplicar");
var descuento = parseInt(descuento);


var descuento = precio * descuento / 100;
var precioFinal = precio - descuento;


document.getElementById("elPrecioFinal").value = "El precio es final es "+precioFinal;



}
