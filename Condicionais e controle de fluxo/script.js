// Control flow

/*
console.log('lavar o copo')
console.log('servir café')

*/

//___________________________________________________\\

// if...else

/*
let temperature = 37.1
let highTemperature = temperature >= 37.5
let mediummTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre Alta')
} else if(mediummTemperature) {
    console.log('Febre Moderada')
} else {
    console.log('Saudável')
}
*/


//___________________________________________________\\
// switch
/*
let expression = 'arthur'

switch(expression){
    case 'a':
        //codigo
        console.log('a')
        break
    case 'b':
        //codigo para expression b
        console.log('b')
        break
    default:
        console.log('default')
        break
}
*/

/*

function calculate(number1,operador,number2){
    let result
    
    switch(operador) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('Não implementado')
            break
        }

        return result
}

console.log(calculate(4, '*', 8))
*/

//___________________________________________________\\
// throw

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatorio'
    }

    console.log(name)
}
// try...catch

try {
    sayMyName('Arthur')
} catch(e) {
    console.log(e)
}