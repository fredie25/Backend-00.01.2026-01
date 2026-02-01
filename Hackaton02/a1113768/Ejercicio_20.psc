Proceso Ejercicio_20
	//20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
	//¿Cuántos números son Pares?
	//¿Cuál es el mayor de todos?
	//Si el tercero es par, calcular el cuadrado del segundo.
	//Si el primero es menor que el cuarto, calcular la media de los 4 números.
	//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se 
	//cumple la segunda condición, calcular la suma de los 4 números.
	Definir num1, num2, num3, num4, mayor, contPares Como Entero
    Definir media, suma Como Real
    
	Escribir "LEYENDO NUMEROS"
    Escribir "Ingrese cuatro números enteros positivos:"
    Leer num1, num2, num3, num4
    
    // Contar pares
    contPares = 0
    Si num1 MOD 2 = 0 Entonces contPares = contPares + 1
	FinSi
	
	Si num2 MOD 2 = 0 Entonces contPares = contPares + 1
	FinSi
	
	Si num3 MOD 2 = 0 Entonces contPares = contPares + 1
	FinSi
	
	Si num4 MOD 2 = 0 Entonces contPares = contPares + 1
	FinSi
	
	Escribir "Cantidad de números pares: ", contPares
	
	// Mayor de todos
	mayor = num1
	Si num2 > mayor Entonces mayor = num2
	Finsi
	
	Si num3 > mayor Entonces mayor = num3
	FinSi
	
	Si num4 > mayor Entonces mayor = num4
	FinSi
	
	Escribir "El mayor es: ", mayor
	
	// Si el tercero es par, calcular cuadrado del segundo
	Si num3 MOD 2 = 0 Entonces
		Escribir "El cuadrado del segundo número es: ", num2 * num2
	FinSi
	
	// Si el primero es menor que el cuarto, calcular media
	Si num1 < num4 Entonces
		media = (num1 + num2 + num3 + num4) / 4.0
		Escribir "La media de los 4 números es: ", media
	FinSi
	
	// Si el segundo es mayor que el tercero...
	Si num2 > num3 Entonces
		Si num3 >= 50 Y num3 <= 700 Entonces
			suma = num1 + num2 + num3 + num4
			Escribir "La suma de los 4 números es: ", suma
		FinSi
	FinSi
	
FinProceso