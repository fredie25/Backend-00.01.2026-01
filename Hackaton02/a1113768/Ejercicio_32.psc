Proceso Ejercicio_32
	//32. Se quiere saber cuál es la ciudad con la población 
	//de más personas, son tres provincias y once ciudades, 
	//hacer un algoritmo en Pseint que nos permita saber eso.
	Definir ciudad, provincia Como Entero
	Definir poblacion, maxPoblacion Como Entero
	Definir provinciaMax, ciudadMax Como Entero
	
	maxPoblacion = 0
	
	Escribir "CIUDAD MÁS POBLADA"
	Escribir ""
	
	Para ciudad = 1 Hasta 11 Hacer
		Escribir "Ciudad ", ciudad
		
		// Validando provincia
		Repetir
			Escribir "Ingrese la provincia (1, 2 o 3):"
			Leer provincia
			
			Si provincia < 1 O provincia > 3 Entonces
				Escribir "ERROR: Solo existen 3 provincias (1, 2 o 3). Intente nuevamente."
			FinSi
		Hasta Que provincia >= 1 Y provincia <= 3
		
		Escribir "Ingrese la población:"
		Leer poblacion
		
		Si poblacion > maxPoblacion Entonces
			maxPoblacion <- poblacion
			provinciaMax <- provincia
			ciudadMax <- ciudad
		FinSi
	FinPara
	
	Escribir "La ciudad con mayor población es:"
	Escribir "Ciudad ", ciudadMax, " de la provincia ", provinciaMax
	Escribir "Población: ", maxPoblacion
	
FinProceso
