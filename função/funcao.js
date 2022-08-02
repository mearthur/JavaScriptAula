// Criar um aplicativo de frases motivacionais


// declaração da função   function statement
function createPhreses() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é mãe do aprendizado')
}

// executar a função
//execute, run , call, invoke
createPhreses()
createPhreses()
createPhreses()

console.log('fim do programa')


//__________________________________________________\\

// function expression
// function anonymous


// parâmetros (parameters)
const sum = function(number1, number2){
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25
//sum(number1, number2) // arguments - argumentos

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 e ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

//__________________________________________________\\

// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)

//__________________________________________________\\
//                SCOPE

//function scope
let subject = 'create video'


function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))

//__________________________________________________\\

// function hoisting
/*
sayMyName():

function sayMyName() {
    console.log('Arthur')
}

*/

// arrow function

const sayMyName = (name) => {
    console.log(name)
}

sayMyName('ATR BR 2001')

//__________________________________________________\\
