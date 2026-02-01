Proceso Ejercicio_36
	//36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
	Definir n, i, fib1, fib2, fibSig Como Entero
    
	Escribir "SERIE DE FIBONACCI"
	Escribir ""
    Escribir "¿Cuántos términos de Fibonacci desea calcular?"
    Leer n
    
    fib1 = 0
    fib2 = 1
    
    Escribir "Serie de Fibonacci:"
    Escribir fib1
    Escribir fib2
    
    Para i = 3 Hasta n Con Paso 1 Hacer
        fibSig = fib1 + fib2
        Escribir fibSig
        fib1 = fib2
        fib2 = fibSig
    FinPara
FinProceso
