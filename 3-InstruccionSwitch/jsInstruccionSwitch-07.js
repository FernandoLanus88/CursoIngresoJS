function mostrar()
{
	var destinoIngresado =document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			{
			alert("Esta Ubicada al oeste");
			break;
			}

		case "Mar del plata":
			{
			alert("Esta Ubicada al Este");
			break;
			}

		case "Cataratas":
			{
			alert("Esta Ubicada al Norte");
			break;
			}

		case "Ushuaia":
			{
			alert("Esta Ubicada al Sur");
			break;
			}


	}



}//FIN DE LA FUNCIÓN