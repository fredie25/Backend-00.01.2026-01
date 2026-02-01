Proceso ejercicio04
	Repetir
		Escribir "Ingresa el primer numero"
		Leer numero1
		Escribir "ingresa el segundo numero"
		Leer numero2
		escribir "ingresa el tercer numero"
		Leer  numero3
		
		Si  numero1 <0 	O numero2 <0 O numero3 <0 Entonces
			Escribir "vuelva a ingresar, solo valores enteros"
		Fin Si
	Hasta Que numero1 >0 	Y numero2 >0 Y numero3 >0
	Escribir "los numeros son enteros"

	Si numero1 > numero2 Entonces
		remplaza1<-numero1
		numero1 = numero2
		numero2 = remplaza1
	Fin Si
	Si numero1 > numero3 Entonces
		remplaza3<-numero1
		numero1 = numero3
		numero3= remplaza3
	Fin Si
	Si numero2 > numero3 Entonces
		remplaza2<-numero2
		numero2 = numero3
		numero3= remplaza2
	Fin Si
	Escribir "los numeros ordenados son:" , numero1 " " , numero2 " " ,numero3
	
FinProceso
