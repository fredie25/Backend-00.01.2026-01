Proceso ejercicio17
    Definir hora, minuto, segundosd Como Entero
	
    Escribir "Ingresar la hora:";
    Leer hora;
    Escribir "Ingresar los minutos:";
    Leer minutos;
    Escribir "Ingrese los segundos:";
    Leer segundosd;
	
    segundosd = segundosd + 1
    Si segundosd = 60 Entonces
        segundosd = 0
        minutos = minutos + 1
    FinSi
    Si minutos = 60 Entonces
        minutos = 0
        hora = hora + 1
    FinSi
    Si hora = 24 Entonces
        hora = 0
    FinSi
	
    Escribir "La hora dentro de un segundo sera de: ", h, " : ", m, " : ", s
FinProceso

