// 7. Heladería con membresía
Algoritmo Ejercicio_07
    Definir tipo Como Caracter
    Definir costo, total Como Real
    Escribir "Costo del helado:"
    Leer costo
    Escribir "Tipo de membresía (A, B o C):"
    Leer tipo
    // Uso el tipo de letra para decidir cuánto descuento quitarle al precio.
    Si tipo = "A" O tipo = "a" Entonces
        total <- costo * 0.90
    Sino
        Si tipo = "B" O tipo = "b" Entonces
            total <- costo * 0.85
        Sino
            Si tipo = "C" O tipo = "c" Entonces
                total <- costo * 0.80
            Sino
                total <- costo
                Escribir "Tipo no válido, sin descuento."
            FinSi
        FinSi
    FinSi
    Escribir "Total con descuento: $", total
FinAlgoritmo