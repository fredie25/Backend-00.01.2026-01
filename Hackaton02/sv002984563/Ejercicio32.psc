Proceso Ejercicio32
	
	//32.Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso.
	
	Escribir "Calculadora de mayor poblacion"
	Escribir "=============================="
	
	mayorPoblacion = 0
	
	para a = 1 Hasta 11 Hacer
		Escribir "Ingrese nombre de la ciudad: "
		Leer ciudad
		Escribir "Ingrese numero de poblacion: "
		leer poblacion
		
		si poblacion > mayorpoblacion Entonces
			mayorpoblacion = poblacion
			ciudadMasPoblada = ciudad
		FinSi
	FinPara
	
	Escribir "La ciudad mas poblada es: " ciudadMasPoblada " con " mayorpoblacion " habitantes"
FinProceso
