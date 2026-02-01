Proceso ejercicio32
		Definir  poblacion, mayor_poblacion Como Entero
		Definir ciudad, ciudad_mayor Como Caracter
		Escribir "Ingresar la ciudad";
		Leer ciudad;
		Escribir "Ingresar el tamaño de la poblacion";
		Leer poblacion;
		mayor_poblacion = poblacion
		ciudad_mayor = ciudad
		Para i<-2 Hasta 33 Con Paso 1 Hacer
			Escribir "Ingresar la ciudad";
			Leer ciudad;
			Escribir "Ingresar el tamaño de la poblacion";
			Leer poblacion;
		Si poblacion > mayor Entonces
			mayor_poblacion = poblacion
			iudad_mayor = ciudad
		FinSi
	Fin Para
	Escribir"La ciudad con mas poblacion es de: ",ciudad_mayor , " y su poblacion es de " , mayor poblacion
FinProceso
