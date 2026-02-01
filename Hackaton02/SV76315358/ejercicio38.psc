Proceso ejercicio38
    Definir num, suma Como Entero
	
    Escribir "Ingresar un numero:";
    Leer num;
	suma<-0
    Para i = 1 Hasta num - 1 Con Paso 1 Hacer
        Si num MOD i = 0 Entonces
            suma = suma + i
        FinSi
    Fin Para
	
    Si suma = num Entonces
        Escribir "El numero ", num, " es un numero perfecto";
    SiNo
        Escribir "El numero ", num, " NO es un numero perfecto" ;
    FinSi
FinProceso
