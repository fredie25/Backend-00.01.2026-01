Proceso Ejercicio16
	
	//16. Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde
	
	Definir d Como Entero
	
	Escribir "ingrese el numero que corresponda al dia"
	Leer d
	
	segun d Hacer
		1:
			Escribir "Lunes"
		2:
			Escribir "Martes"
		3:
			Escribir "Miercoles"
		4:
			Escribir "Jueves"
		5:
			Escribir "Viernes"
		6:
			Escribir "Sabado"
		7:
			Escribir "Domingo"
	FinSegun
	

	si d <= 0 o d >= 8 Entonces
		escribir "Numero incorrecto"
	FinSi


	
FinProceso
