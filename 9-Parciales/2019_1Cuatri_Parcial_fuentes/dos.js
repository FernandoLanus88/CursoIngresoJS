function mostrar()
{
  
var nombres = prompt("Cuales son sus nombres");


var peso1 = prompt("Ingrese el peso de uno de ustedes en kilos");
var peso1 = parseInt(peso1);



var peso2 = prompt("Ahora ingrese el peso del siguiente");
var peso2 = parseInt(peso2);

var pesoTotal = peso1 + peso2;
var pesoPromedio = pesoTotal / 2;


alert("Ustedes se llaman "+nombres+" pesan "+peso1+" y "+peso2+" kilos"+" que sumados son "+pesoTotal+" kilos"+ " y el promedio de peso es "+pesoPromedio+" kilos");



//mensaje = "Ustedes se llaman "+nombres+" pesan "+peso1;
//mensaje += " y "+peso2+" kilos "+" que sumados son "+pesoTotal;
//mensaje += " kilos "+" y el promedio de peso es "+pesoPromedio+" kilos";

//alert(mensaje);

}
