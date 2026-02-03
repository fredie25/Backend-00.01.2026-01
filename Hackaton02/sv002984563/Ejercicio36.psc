Proceso Ejercicio36
	
	//36.Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
	
	Escribir "Serie de Fibonacci"
	Escribir "=================="
	Escribir "¿cuantos numero de fibonacci quieres ver?"
	leer n
	
	a = 0
	b = 1
	
	si n <= 0 Entonces
		Escribir "Debe ingresar un numero mayor a 0 "
	SiNo
		si n = 1 Entonces
			Escribir a
		SiNo
			si n = 2 Entonces
				Escribir b
			FinSi
		FinSi
	FinSi
	
	para i = 2 Hasta n Hacer
		c = a + b
		escribir c
		a = b
		b = c
	FinPara
	
FinProceso
