/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 



function sumar()
{	

	var numero1;
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);


	var numero2;
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);


	var resultado = numero1 + numero2;


	alert ("El resultado es "+ resultado);	
}

function restar()
{

	var numero1;
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);


	var numero2;
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);


	var resultado = numero1 - numero2;


	alert ("El resultado es "+ resultado);
	
}

function multiplicar()
{ 

	var numero1;
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);


	var numero2;
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);


	var resultado = numero1 * numero2;


	alert ("El resultado es "+ resultado);
	
}

function dividir()
{

	var numero1;
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);


	var numero2;
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	
	var resultado = numero1 / numero2;


	alert ("El resultado es "+ resultado);
}







//var numero1 = parseInt(document.getElementById ("txtIdNumeroUno").value);
//var numero2 = parseInt(document.getElementById ("txtIdNumeroDos").value);
