function mostrar()
{
	var edad = document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);



	if(edad<13)
	{
		alert("No eres adolescente");
	}


	if(edad>17)
	{
		alert("No eres adolescente");
	}





/*

	if(edad<13 || edad>17){

		alert("No eres adolescente");

	}
*/
}//FIN DE LA FUNCIÓN