Proceso Ejercicio15
	
	//15.Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos
	
	FACTOR_CM_A_PULG = 0.393701
	FACTOR_LB_A_KG = 0.453592
	
	Escribir "Seleccione opcion a realizar"
	Escribir "[1] Centimetros a pulgadas"
	Escribir "[2] Libras a kilogramos"
	
	Repetir
		escribir "Ingrese la opcion (1-2)"
		leer opcion
		
		si opcion < 1 o opcion > 2 Entonces
			escribir "Error: operacion no valida"
		FinSi
	Hasta Que opcion >= 1 y opcion <= 2
	
	
	Escribir "Ingrese el numero a convertir"
	leer num
	
	si opcion = 1 Entonces
		resultado = num * FACTOR_CM_A_PULG
		Escribir num " serian " resultado " pulgadas"
	FinSi
	
	si opcion = 2 Entonces
		resultado = num * FACTOR_LB_A_KG
		Escribir num " serian " resultado " pulgadas"
	FinSi
	
	
FinProceso
