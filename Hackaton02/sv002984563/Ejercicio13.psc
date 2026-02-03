Proceso Ejercicio13
	
	//13.Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
	
	Escribir "Ingresa una letra"
	leer Letra
	
	Segun Letra Hacer
		"a", "A": 
			resultado <-"si es una vocal"
		"e", "E": 
			resultado <- "si es una vocal"
		"i", "I": 
			resultado <- "si es una vocal"
		"o", "O": 
			resultado <- "si es una vocal"
		"u", "U": 
			resultado <- "si es una vocal"
		De Otro Modo:
			resultado = "no es una vocal"
	FinSegun
	
	Escribir resultado
	
FinProceso
