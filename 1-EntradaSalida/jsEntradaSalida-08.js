/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/




function SacarResto()
{

	var dividendo;
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	dividendo = parseInt(dividendo);


	var divisor;
	divisor = document.getElementById("txtIdNumeroDivisor").value;
	divisor = parseInt(divisor);

	
	var resto = dividendo % divisor;


	alert ("El resto es "+ resto);	
}





//var numero1 = parseInt(document.getElementById("txtIdNumeroDividendo").value);
//var numero2 = parseInt(document.getElementById("txtIdNumeroDivisor").value);
