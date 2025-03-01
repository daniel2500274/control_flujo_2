/*
2. UN PARQUE DE DIVERSIONES QUIERE IMPLEMENTAR UN PROCRAMA PARA CALCULAR EL COSTO DE ENTRADA DE
SUS VISITANTES. EL COSTO DEPENDE DE LA EDAD DEL VISITANTE. SI ES UN NIÑO MENOR DE 12 AÑOS, LA ENTRADA
ES DE $10. SI ES UN ADULTO MAYOR DE 60 AÑOS, LA ENTRADA ES DE $15. SI ES UN ADULTO ENTRE 12 Y 60 AÑOS, LA
ENTRADA ES DE $20. ESCRIBE UN PROGRAMA QUE CALCULE EL COSTO DE ENTRADA DE UN VISITANTE DADO SU
EDAD.
*/
const edad = parseInt(prompt('Ingrese la edad del visitante: '))
let costoEntrada = 0

switch (true) {
    case (edad > 0 && edad < 12):
        costoEntrada = 10
        break
    case (edad >= 12 && edad <= 60):
        costoEntrada = 20
        break
    case (edad > 60):
        costoEntrada = 15
        break
    default:
        console.log('Edad no válida')
        break
}

console.log(`El costo de la entrada es de: $${costoEntrada}`)


