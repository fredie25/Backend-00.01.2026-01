Proceso Ejercicio_15
	//15. Hacer un algoritmo en Pseint que convierta 
	//centímetros a pulgadas y libras a kilogramos.
	Definir opcion Como Entero
    Definir valor, resultado Como Real
	
	Escribir "CONVERSION DE UNIDADES" 
	Escribir "cm a inch y lb a kg" 
	Escribir " "
    Escribir "Seleccione la conversión:"
    Escribir "1. Centímetros a pulgadas"
    Escribir "2. Libras a kilogramos"
    Leer opcion
    
    Segun opcion Hacer
        1:
            Escribir "Ingrese la cantidad en centímetros:"
            Leer valor
            resultado = valor / 2.54
            Escribir valor, " cm = ", resultado, " pulgadas"
        2:
            Escribir "Ingrese la cantidad en libras:"
            Leer valor
            resultado = valor * 0.453592
            Escribir valor, " lb = ", resultado, " kg"
        De Otro Modo:
            Escribir "Opción inválida"
    FinSegun
	
FinProceso
