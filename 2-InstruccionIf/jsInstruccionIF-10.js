function mostrar()
{



	var randomNumber = Math.floor(Math.random() * 10) + 1;
	randomNuber = parseInt(randomNumber);
	var notaExamen = randomNumber;

	

	if( notaExamen>8 )
	{
		var mensaje= "EXCELENTE TE SACASTE UN "+notaExamen;
	}

	else if(notaExamen>3 && notaExamen<9)
	{
		var mensaje="APROBASTE CON "+notaExamen;
	}

	else
	{
		var mensaje= "Desaprobaste con "+notaExamen+" Pero vamos que la proxima se puede";
	}
	
	alert(mensaje);
	

	


	

}