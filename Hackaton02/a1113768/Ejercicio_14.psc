Proceso Ejercicio_14
	//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 
	//y determine si es un número primo.
	Definir numero Como Entero
    
	Escribir "NUMEROS PRIMOS"
    Escribir "Ingrese un número del 1 al 10:"
    Leer numero
    
    Si numero < 1 O numero > 10 Entonces
        Escribir "Número fuera de rango"
    Sino
        Si numero = 2 O numero = 3 O numero = 5 O numero = 7 Entonces
            Escribir "El número ", numero, " es primo"
        Sino
            Escribir "El número ", numero, " NO es primo"
        FinSi
    FinSi
	
FinProceso
