/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;
	var apellidoIngresado = prompt("Cual es tu apellido?")

	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;
	alert("Usted se llama "+nombreIngresado+" "+apellidoIngresado+" y tiene "+ edadIngresada +" años");

}

/*

mensaje="Usted se llama ";
mensaje= mensaje+nombre;
mensaje= mensaje+" y tiene ";
mensaje= mensaje+edad;
mensaje= mensaje+" años";

*/