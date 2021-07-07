/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/




function mostrarAumento()
{
	var sueldo = document.getElementById("txtIdSueldo").value;
	var sueldo = parseInt(sueldo);
	var porcentaje = prompt("Que porcentaje desea calcular?","Ingrese aqui");
	var porcentaje = parseInt(porcentaje);


	var sueldoFinal = sueldo * porcentaje / 100;
	var sueldoFinal = sueldo + sueldoFinal

	
	document.getElementById("txtIdResultado").value = sueldoFinal;


}
