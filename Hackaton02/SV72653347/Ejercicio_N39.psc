Proceso Ejercicio_N39
	/// Aproximacion del numero PI usando la serie de Gregory-Leibniz
	/// Pi = 4/1 - 4/3 + 4/5 - 4/7 + ...

	Definir i, signo Como Entero
	Definir pi Como Real
 
	pi <- 0
	signo <- 1 

	Para i <- 1 Hasta 19 Con Paso 2 Hacer
		pi <- pi + signo * (4 / i)
		signo <- signo * -1
	FinPara

	Escribir "Aproximacion de PI: ", pi
FinProceso
