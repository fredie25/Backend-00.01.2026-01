Proceso Ejercicio_26
	//26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
	Definir dividendo, divisor, cociente, resto Como Entero
    
	Escribir "CALCULANDO RESTO Y COCIENTE EN UNA DIVISIÓN"
	Escribir ""
    Escribir "Ingrese el dividendo:"
    Leer dividendo
    Escribir "Ingrese el divisor:"
    Leer divisor
    
	Si divisor <= 0 Entonces
		Escribir "El divisor debe ser mayor que 0"
	SiNo
			cociente = 0
			resto = dividendo
		Mientras resto >= divisor Hacer
			resto = resto - divisor
			cociente = cociente + 1
		FinMientras
        Escribir "Cociente: ", cociente
		Escribir "Resto: ", resto
	FinSi
	
FinProceso	
	