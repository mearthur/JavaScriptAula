/*
    Vamos fortalecer e aplicar os conhecimentos, 
    além de aprender truques e dicas para resolver
    os desafios e avançar para o próximo nível    


*/


/*
    ### Transformar notas escolares

    Crie um algoritmos que transforme as notas do sistema 
    numérico para sistema de notas em caracteres tipo A B C


    * de 90 pra cima - A
    * entre 80 - 90  - B
    * entre 70 - 79  - C
    * entre 60 - 69  - D
    * menor que 60   - F

*/
/*

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;

    if (scoreA) {
        scoreFinal = 'A'
    } else if (scoreB) {
        scoreFinal = 'B'
    } else if (scoreC) {
        scoreFinal = 'C'
    } else if (scoreD) {
        scoreFinal = 'D'
    } else if (scoreF) {
        scoreFinal = 'F'
    } else {
        scoreFinal = "Nota invalida"
    }

    return scoreFinal
}

console.log(getScore(101))
console.log(getScore(-11)) 
console.log(getScore(61))
console.log(getScore(12))
console.log(getScore(65))
console.log(getScore(71))
console.log(getScore(1321))

*/

//___________________________________________________\\

/*  ### Sistems de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo
array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a família está com
saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {
    incomes: [2500, 3200, 250.43, 360.45]
    expenses: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array){
    let total = 0;

    for(let value of array){
        total += value
    }
    return total
}


function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "Negativo"

    if (itsOk) {
        balanceText = "Positivo"
    }

    console.log(`Seu saldo é ${balanceText}`)
}