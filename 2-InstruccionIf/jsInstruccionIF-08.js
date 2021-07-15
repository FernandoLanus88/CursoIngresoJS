function mostrar()
{
	
	var edad = document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	var estadoCivil = document.getElementById("estadoCivil").value;
	

	
	if(edad<18 && estadoCivil!="Soltero"){
	
	}
	else if(estadoCivil=="Soltero" && edad>17){

		alert("Es soltero y no es menor");
	}
	


}//FIN DE LA FUNCIÓN