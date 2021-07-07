/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado= prompt("Cual es tu nombre?");
	
	
	var mensaje = "Su nombre es "+ nombreIngresado;

	document.getElementById("txtIdNombre").value=mensaje;
	
}

