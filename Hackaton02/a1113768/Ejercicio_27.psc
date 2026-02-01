Proceso Ejercicio_27
	//27. Hacer un algoritmo en Pseint para determinar la media de una lista 
	//indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
	Definir num, contador Como Entero
    Definir suma, media Como Real
    
    suma = 0
    contador = 0
    
	Escribir "CALCULANDO PROMEDIO DE NUMEROS"
	Escribir ""
    Escribir "Ingrese números positivos (número negativo para terminar):"
    
    Repetir
        Leer num
        Si num >= 0 Entonces
            suma = suma + num
            contador = contador + 1
        FinSi
    Hasta Que num < 0
    
    Si contador > 0 Entonces
        media = suma / contador
        Escribir "La media es: ", media
    Sino
        Escribir "No se ingresaron números positivos"
    FinSi
	
FinProceso
