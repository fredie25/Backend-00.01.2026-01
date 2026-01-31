Algoritmo Ejercicio_04
    Definir a, b, c Como Entero
    
    Escribir "Ingrese primer número:"
    Leer a
    Escribir "Ingrese segundo número:"
    Leer b
    Escribir "Ingrese tercer número:"
    Leer c
    
    // Lógica estructural para evitar errores de tipo
    Si a <= b Y a <= c Entonces
        Si b <= c Entonces
            Escribir a, " - ", b, " - ", c
        Sino
            Escribir a, " - ", c, " - ", b
        FinSi
    Sino
        Si b <= a Y b <= c Entonces
            Si a <= c Entonces
                Escribir b, " - ", a, " - ", c
            Sino
                Escribir b, " - ", c, " - ", a
            FinSi
        Sino // En este punto, 'c' es el menor de todos
            Si a <= b Entonces
                Escribir c, " - ", a, " - ", b
            Sino
                Escribir c, " - ", b, " - ", a
            FinSi
        FinSi
    FinSi
FinAlgoritmo