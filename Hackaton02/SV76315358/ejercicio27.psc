Proceso ejercicio27
	Definir num Como Entero
	numero_ingresado=0;
	total=0
	Repetir
		Escribir"Ingresafr un numero:" ;
		Leer num
	Si num >= 0 Entonces
		suma = suma + num
		total = total + 1
	FinSi
	Hasta Que num <0
	Escribir "La media de los numeros es de : " ,numero_ingresado/total
FinProceso
