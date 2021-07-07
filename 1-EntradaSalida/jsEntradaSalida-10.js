/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/




function mostrarDescuento()
{


	//Linea 10 js se modifico nombre de funcion a mostrarDescuento -- originalmente decia mostrarAumento no coincidiendo con el ejercicio
	//Se modifico linea 47 Html para que la funcion opere correctamente


	var importe = document.getElementById("txtIdImporte").value;
	var importe = parseInt(importe);
	var porcentaje = prompt("Que porcentaje desea calcular?","Ingrese aqui");
	var porcentaje = parseInt(porcentaje);


	var resultado = importe * porcentaje / 100;
	var resultado = importe - resultado

	document.getElementById("txtIdResultado").value = resultado;

	
}