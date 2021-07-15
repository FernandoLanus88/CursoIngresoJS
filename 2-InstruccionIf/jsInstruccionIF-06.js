function mostrar()
{

	var edad = document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);



	if(edad>17)
	{
		alert("Eres mayor de edad");

	}

	if(edad<18)
	{

		if(edad>12)
		{
				
			alert("Eres adolescente");
		}

	}

	if(edad<13)
	{
		alert("Eres un niño");
			
	}


	









/*

	if(edad>=18){
		alert("Eres mayor de edad");
	}
	else if(edad>=13 && edad<=17){

	alert("Eres adolescente");
	}
	else{

	alert("Eres un niño");
	}	

*/	

}//FIN DE LA FUNCIÓN