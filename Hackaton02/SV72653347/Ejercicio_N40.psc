Proceso Ejercicio_N40
	/// Aproximacion del numero PI usando la serie de Nilakantha
	/// Pi = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - ...
	
	Definir i, signo Como Entero
	Definir pii Como Real
	
	pii <- 3  
	signo <- 1 
	
	Para i <- 2 Hasta 20 Con Paso 2 Hacer
		pii <- pii + signo * (4 / (i * (i + 1) * (i + 2)))
		signo <- signo * 1
	FinPara
	
	Escribir "Aproximacion de PI: ", pi
FinProceso
