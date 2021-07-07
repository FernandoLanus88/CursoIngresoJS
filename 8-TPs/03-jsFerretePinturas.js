/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	
var temperatura = document.getElementById("txtIdTemperatura").value;

celcius = (temperatura-32) / 1.8;
celcius = celcius.toFixed(2);

alert(temperatura+" Fahrenheit son "+celcius+" centigrados")


}


function CentigradosFahrenheit () 
{
	
    var temperatura = document.getElementById("txtIdTemperatura").value;

    fahrenheit = temperatura*1.8 + 32;
    fahrenheit = fahrenheit.toFixed(2);
    
    alert(temperatura+" Celcius son "+fahrenheit+" Fahrenheit");
    

}
