Proceso Ejercicio_33
	//33. Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
	Definir continuar Como Caracter
	Definir num Como Entero
	
	Escribir "CONTINUANDO CON EL PROGRAMA"
	
	Repetir
		Escribir "Ingrese un número:"
		
		Leer num
		Escribir "El número ingresado es: ", num
		
	// Validando respuesta
		Repetir
			Escribir "¿Desea continuar? (Si/No):"
			Leer continuar
			
			Si continuar <> "SI" Y continuar <> "si" Y continuar <> "Si" Y continuar <> "NO" Y continuar <> "no" Y continuar <> "No" Entonces
				Escribir "ERROR: Solo puede ingresar S (sí) o N (no)."
			FinSi
		Hasta Que continuar = "SI" O continuar = "si" O continuar = "Si" O continuar = "NO" O continuar = "no" O continuar = "No"
		
	Hasta Que continuar = "NO" O continuar = "no" O continuar = "No"
	
	Escribir "Programa finalizado"

FinProceso
