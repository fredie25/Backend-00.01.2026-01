Proceso ejercicio20
		Definir a,b,c,d,pares,numero_mayor Como Entero
		Escribir "Ingresa el primer valor";
		Leer a;
		Escribir "Ingresa el segundo valor";
		Leer b;
		Escribir "Ingresa el tercer valor";
		Leer c;
		Escribir "Ingresa el cuarto valor";
		Leer d;
		
		pares = 0
		
		Si a MOD 2 = 0 Entonces 
			pares=pares + 1 
		FinSi
		Si b MOD 2 = 0 Entonces 
			pares=pares + 1
		FinSi
		Si c MOD 2 = 0 Entonces
			pares=pares +1
		FinSi
		Si d MOD 2 = 0 Entonces 
			pares=pares +1
		FinSi
		
		numero_mayor = a
		Si b > numero_mayor Entonces 
			numero_mayor = b 
		FinSi
		Si c > numero_mayor Entonces 
			numero_mayor = c 
		FinSi
		Si d > numero_mayor Entonces 
			numero_mayor = d 
		FinSi
		
		Escribir "Hay " ,pares " pares "
		Escribir "El numero mayor es de: ", numero_mayor
		
		Si c MOD 2 = 0 Entonces 
			Escribir "El cuadrado del 2do es de :", b*b 
		FinSi
		Si a < d Entonces 
			Escribir "La media de los 4 numeros es de : ", (a+b+c+d)/4 
		FinSi
		Si b > c Y c>=50 Y c<=700 Entonces 
			Escribir "La suma de los 4 numeros es de: ", a+b+c+d 
		FinSi


FinProceso
