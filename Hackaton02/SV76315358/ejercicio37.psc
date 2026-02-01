Proceso ejercicio37
		Definir num1, num2, r Como Entero
		
		Escribir "Ingrese el primer numero:";
		Leer num1;
		Escribir "Ingrese el segundo numero:";
		Leer num2;
		
		Mientras b <> 0 Hacer
			r = a MOD b
			a = b
			b = r
		Fin Mientras
		
		Escribir "El M.C.D del numero esde : ", a
FinProceso


