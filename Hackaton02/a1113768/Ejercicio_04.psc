Proceso Ejercicio_04
	//4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
	Definir num1, num2, num3, temporal Como Entero
    
	Escribir "ORDENANDO NUMEROS DE MENOR A MAYOR"
    Escribir "Ingrese el primer número: "
    Leer num1
	
    Escribir "Ingrese el segundo número: "
    Leer num2
	
    Escribir "Ingrese el tercer número: "
    Leer num3
    
    // Ordenamiento por burbuja
    Si num1 > num2 Entonces
        temporal = num1
        num1 = num2
        num2 = temporal
    FinSi
    
    Si num2 > num3 Entonces
        temporal = num2
        num2 = num3
        num3 = temporal
    FinSi
    
    Si num1 > num2 Entonces
        temporal = num1
        num1 = num2
        num2 = temporal
    FinSi
	
	Escribir "Números ordenados de menor a mayor: "
	Escribir  num1, " -> ", num2, " -> ", num3

FinProceso
