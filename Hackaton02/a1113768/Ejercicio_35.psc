Proceso Ejercicio_35
	//35. Hacer un algoritmo en Pseint que nos permita saber 
	//cuál es el número mayor y menor, se debe ingresar sólo veinte números.
	Definir i, num, mayor, menor Como Entero
    
	Escribir "IDENTIFICANDO NUMERO MAYOR Y MENOR"
	Escribir ""
	Escribir "INGRESE 20 NUMEROS"
    Escribir "Ingrese el número 1:"
    Leer num
    mayor = num
    menor = num
    
    Para i = 2 Hasta 20 Con Paso 1 Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer num
        
        Si num > mayor Entonces
            mayor = num
        FinSi
        
        Si num < menor Entonces
            menor = num
        FinSi
    FinPara
    
    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
	
FinProceso
