Proceso Ejercicio19
	
	//19.Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
	//Cajero (56$/día).
	//Servidor (64$/día).
	//Preparador de mezclas (80$/día).
	//Mantenimiento (48$/día).
	//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
	
	Definir T, D Como Entero
	
	escribir "Ingrese codigo de trabajador"
	escribir "[1] Cajero"
	escribir "[2] Servidor"
	escribir "[3] Prepador de mezclas"
	escribir "[4] Mantenimiento"
	leer T
	Escribir "Ingrese dias trabajados (1-6)"
	Leer D
	
	Segun T Hacer
		1:
			T = 56
		2:
			T = 64
		3:
			T = 80
		4:
			T = 48
		De Otro Modo:
			Escribir "Codigo de trabajador incorrecto"
	FinSegun
	
	si D > 6 Entonces
		Escribir "Numero de dias incorrecto"
	SiNo
		pago = D * T
	FinSi
	

	Escribir "Al empleado le corresponde $" , pago
FinProceso

