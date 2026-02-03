Proceso Ejercicio20
	
	//20.Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
	//¿Cuántos números son Pares?
	//¿Cuál es el mayor de todos?
	//Si el tercero es par, calcular el cuadrado del segundo.
	//Si el primero es menor que el cuarto, calcular la media de los 4 números.
	//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
	
	Definir num1, num2, num3, num4, pares, a, c Como Entero
	
	Escribir "Ingrese el primer numero"
	Leer num1
	Escribir "Ingrese el segundo numero"
	leer num2
	Escribir "Ingrese el tercer numero"
	leer num3
	Escribir "Ingrese el cuarto numero"
	Leer num4
	
	
	//Encontrar pares
	si num1 mod 2 = 0 Entonces
		pares = pares + 1
	FinSi
	si num2 mod 2 = 0 Entonces
		pares = pares + 1
	FinSi
	si num3 mod 2 = 0 Entonces
		pares = pares + 1
	FinSi
	si num4 mod 2 = 0 Entonces
		pares = pares + 1
	FinSi
	
	Escribir "Hay ", pares " pares"
	
	//Numero mayor
	si num1 >= num2 y num1 >= num3 y num1 >= num4 Entonces
		mayor = num1
	SiNo 
		si num2 >= num1 y num2 >= num3 y num2 >= num4 Entonces
			mayor = num2
		sino 
			si num3 >= num1 y num3 >= num2 y num3 >= num4 Entonces
				mayor = num3
			SiNo
				mayor = num4
			FinSi
		FinSi
	FinSi
	
	Escribir "El numero mayor es: " mayor
	
	//condicion 3
	si num3 mod 2 = 0 Entonces
		esPar = Verdadero
	SiNo
		esPar = Falso
	FinSi
	
	a = num2 * num2
	
	si esPar = Verdadero Entonces
		escribir "El cuadrado del segundo es: " a
	SiNo
		Escribir "Tercer numero no es par"
	FinSi
	

	//condicion 4
	b = (num1 + num2 + num3 + num4 ) / 4
	
	si num1 < num4 Entonces
		Escribir "La media es los 4 numeros es: " b
	FinSi
	
	//condicion 5
	si num2 > num3 Entonces
		si num3 >= 50 y num3 <= 700 Entonces
			suma = ( num1 + num2 + num3 + num4 )
		FinSi
	FinSi
	
	escribir "La suma de las numeros es: " suma
FinProceso

