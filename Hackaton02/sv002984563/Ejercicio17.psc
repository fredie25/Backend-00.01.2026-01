Proceso Ejercicio17
	
	//17.Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
	
	Definir horas, minutos, segundos Como Entero
	definir horasNuevas, minutosNuevos, segundoNuevos Como Entero
	
	Repetir
		Escribir Sin Saltar "Ingrese las horas: (0-23)"
		leer horas
		si horas < 0 o horas > 23 Entonces
			Escribir "Error: la hora ingresada es incorrecta"
		FinSi
	Hasta Que horas > 0 y horas <= 23
	
	Repetir
		Escribir Sin Saltar "Ingrese los minutos: (0-59)"
		leer minutos
		si minutos < 0 o minutos > 59 Entonces
			Escribir "Error: el minuto ingresado es incorrecto"
		FinSi
	Hasta Que minutos > 0 y minutos <= 59
	
	Repetir
		Escribir Sin Saltar "Ingrese los segundos: (0-59)"
		leer segundos
		si segundos < 0 o segundos > 59 Entonces
			Escribir "Error: el segundo ingresado es incorrecto"
		FinSi
	Hasta Que segundos > 0 y segundos <= 59
	
	segundoNuevos = segundos + 1
	minutosNuevos = minutos 
	horasNuevas = horas
	
	si segundoNuevos > 59 Entonces
		segundoNuevos = 0
		minutosNuevos = minutosNuevos + 1
		
		si minutosNuevos > 59 Entonces
			minutosNuevos = 0
			horasNuevas = horasNuevas + 1
			
			si horasNuevas > 23 Entonces
				horasNuevas = 0
			FinSi
		FinSi
	FinSi
	
	Escribir "Hora ingresada: " horas, " : ", minutos " : ", segundos 
	Escribir "Hora +1 seg: "  horasNuevas  " : ", minutosNuevos " : ", segundoNuevos 
	
FinProceso
