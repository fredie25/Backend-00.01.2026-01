Proceso ejercicio31
	
	Definir datos Como Entero	
	numero_par=0
	Para i<-1 Hasta 4 Con Paso 1 Hacer
		Escribir "Ingresar un numero";
		Leer datos;
		Si datos MOD 2 = 0 Entonces
			numero_par= numero_par + datos
			total_pares = total_pares + 1
		SiNo
			numero_impar = numero_impar + datos
			total_impares = total_impares + 1
		Fin Si
		
	Fin Para
	
	Si total_pares > 0 Entonces
        Escribir "La media de los numeros pares es: ", numero_par / total_pares
    SiNo
        Escribir "No se ingresaron numeros pares"
    FinSi
	
    Si total_impares > 0 Entonces
        Escribir "La media de los numeros impares es: ", numero_impar / total_impares
    SiNo
        Escribir "No se ingresaron numeros impares"
    FinSi
FinProceso
