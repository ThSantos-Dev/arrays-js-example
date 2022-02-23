'use strict'


/* Solução imperativa
const limite = numero.length -1
let numeros100 = []

for(let i = 100; i <= limite; i++){
    numeros100[i] = numeros[i] + 100
}

console.log("numeros", numeros)
console.log("numeros +100", numeros100)

************************************* */

// Solução Declarativa
/**
 * Parâmetros que o MAP passa
 * 
 * 1º Elemento
 * 2º Indice
 * 3º Array
 */

// Problema: Criar um novo array com os numeros menores que 100.

// for(let i = 0; i<= numeros.length; i++) {
    //     if(numeros[i] < 100) 
    //         menoresQue100[i] = numeros[i]
    // }
    
    // const adicionar100 = (numero) => numero + 100
    // const numeros100 = numeros.map(adicionar100)
    
    // const menorQue100 = (numero) => (numero < 100) ? true : false
    // const menoresQue100 = numeros.filter(menorQue100)
    
    // const soma = (valor1, valor2) => valor1 + valor2
    // const somaDeTodos = numeros.reduce(soma, 0)
    
const numeros = [20 , 101, 70, 279, 320]
console.log(numeros)
    
// Exercicio 1 - Quadrado
const calculaQuadrado = (numero) => numero * numero
const numerosAoQuadrado = numeros.map(calculaQuadrado)

console.log("Numeros ao quadrado: ", numerosAoQuadrado)

//******************************************* */

// Exercicio 2 - Pares
const classificaPares = (numero) => numero % 2 == 0 ? true : false
const numerosPares = numeros.filter(classificaPares)

console.log("Numeros pares: ", numerosPares)
//******************************************* */

// Exercicio 3 - Média
const soma = (acumulador, numero) => numero + acumulador
const somaTotal = numeros.reduce(soma, 0)
const resultadoMedia = somaTotal / numeros.length

console.log("Média entre os valores: ", resultadoMedia)
//******************************************* */


// Exercicio 4 - Soma Impares
const classificaImpares = (numero) => numero % 2 == 1 ? true : false
const numerosImpares = numeros.filter(classificaImpares)
const somaImpares = numerosImpares.reduce(soma, 0)

console.log("Numeros impares: ", numerosImpares)
console.log("Soma dos números impares: ", somaImpares)

//******************************************* */

// Exercicio 5 - Adicionar desconto e somar valores
const calculaDesconto = (numero) => numero -  (numero * 0.2)
const valoresComDesconto = numeros.map(calculaDesconto)
const somaTotalComDesconto = valoresComDesconto.reduce(soma, 0)

console.log("Valores com desconto de 20%: ", valoresComDesconto)
console.log("Soma total dos valores com desconto de 20%: ", somaTotalComDesconto)

//******************************************* */


    // console.log("numeros", numeros)
    // console.log("numeros +100", numeros100)
    // console.log("numeros < 100", menoresQue100)
    // console.log("soma de todos os numeros", somaDeTodos)
