Proceso ejercicio39
		Definir n, i Como Entero
		Definir P, signo Como Real
		
		Escribir "Ingrese la cantidad del numero";
		Leer n;
		
		P = 0
		signo = 1
		
		Para i = 1 Hasta n Hacer
			P = P+ signo * (4 / (2*i - 1))
			signo = signo * (-1)
		Fin Para
		
		Escribir "La aproximacion de pi es de : ", P
FinProceso

