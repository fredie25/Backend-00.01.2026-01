Proceso Ejercicio_N25
	///Hacer un algoritmo en Pseint para calcular el factorial de un n�mero de una forma distinta.
	Definir num, factorial Como Entero

    Escribir "Ingrese un numero:"
    Leer num

    Si num < 0 Entonces
        Escribir "No se puede calcular el factorial de un negativo."
    Sino
        factorial <- 1

        Mientras num > 1 Hacer
            factorial <- factorial * num
            num <- num - 1
        FinMientras

        Escribir "El factorial es: ", factorial
    FinSi
FinProceso
