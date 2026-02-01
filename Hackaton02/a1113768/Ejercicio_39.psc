Proceso Ejercicio_39
	//39. Hacer un algoritmo en Pseint que cumpla con la aproximación del 
	//número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
	//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
	Definir n, i Como Entero
    Definir valorPi, denominador, signo Como Real
    
	Escribir "Número pi con la serie de Gregory-Leibniz"
	Escribir ""
    Escribir "Ingrese el número de términos:"
    Leer n
    
    valorPi = 0
    signo = 1
    
    Para i = 0 Hasta n - 1 Con Paso 1 Hacer
        denominador = 2 * i + 1
        valorPi = valorPi + (signo * (4 / denominador))
        signo = signo * (-1)
    FinPara
    
    Escribir "Aproximación de Pi: ", valorPi
	
FinProceso
