Proceso Ejercicio31
	
	//31.Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
	
	Para i = 1 Hasta 10 Hacer
		Escribir "ingresa numero"
		Leer n
		
		si n mod 2 = 0 Entonces
			pares = pares + n
			npares = npares + 1
		SiNo 
			impares = impares + n
			nimpares = nimpares + 1
		FinSi
		
	FinPara
	
	si npares > 0 Entonces
		mpares = pares / npares
		Escribir "La media de los numeros pares es: " mpares
	SiNo
		Escribir "No hay numeros pares"
	FinSi
	
	si nimpares > 0 Entonces
		mimpares = impares / nimpares
		Escribir "La media de los numeros impares es: " mimpares
	SiNo
		Escribir "No hay numeros impares"
	FinSi
	
	
	
	
FinProceso
