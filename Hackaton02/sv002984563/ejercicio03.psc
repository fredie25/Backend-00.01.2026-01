Proceso ejercicio03
	
	//3.Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.
	
	Escribir "Ingrese su numero"
	Leer numeroUsuario
	
	si numeroUsuario < 0 Entonces
		numeroUsuario1 = numeroUsuario * (-1)
	FinSi
	
	
	ultimodigito = numeroUsuario1 MOD 10
	si ultimodigito = 4 Entonces
		Escribir "Termina en 4"
	SiNo
		Escribir "No termina en 4"
	FinSi
FinProceso
