/* 
    Expressões e Operadores


    - Expressions
    - Operators
        Binary
        Unary
        Ternary

*/

/*
let number = 1;

(function()  {
    console.log('alo')
})()
*/

// Binary
/*
let number = 1

console.log(number + 1)
*/

// Unary

/*
let number =1

console.log(++number)
console.log(--number)
*/


// Ternary

/*
let number = 1

console.log(typeof number)
console.log(true ? 'alo' : 'nada')
*/

//___________________________________________________\\

/*
    new

    * left-hand-side expression
    * criar um novo objeto

*/

/*
//let name = new String('Arthur')
//na.surName = "Araujo"
//let age = new Number(23)

let date = new Date('2020-08-05')
console.log(date)

*/



//___________________________________________________\\

/*
    Operadoresa unários
    typeof
    delete
*/

/*
const person ={
    name: 'Arthur',
    age: 25,
}
delete person.age

console.log(person)
*/

//___________________________________________________\\

// Operadores Aritimédicos

//Multiplicação (*)
//console.log(3 * 5)

//Divisão  (/)
//console.log(34 / 2)

//Some  (+)
//console.log(200 + 50)

//Subtração (-)
//console.log(20 - 15)

//resto da divisão (%)
/*
let remainder
remainder = 11 % 3
console.log(remainder)
*/

/*
//incremento (++)
let increment = 4
increment++
console.log(increment)
*/

/*
//decremento (--)
let decrement = 0
console.log(--decrement)
*/

/*
//exponencial (**)
console.log(3 ** 3)
*/


//___________________________________________________\\

// Grouping operator ( )

/*
let total = (2 + 3) * 5
console.log(total)
*/

//___________________________________________________\\

// Operadores de comparação

// Irá comparar valores e retornar um Boolean como resposta à comparação

/*
let one = 1
let two = 2


// ==   igual a
//console.log( two == 1 )
//console.log( one == "1")

// !=   diferente de 
console.log(one != two)
console.log(one != 1)
console.log(one != "1")


*/


//___________________________________________________\\

/*
let one = 1
let two = 2

// ===   estritamente igual a
console.log(one === "1")
console.log(one === 1)


//  !==    estritamente diferente de
console.log( two !== "2")
console.log(two !== 2)

*/

//___________________________________________________\\

//  Operadores

//let one = 1
//let two = 2

// >   Maior que 
// console.log(one > two)

// >=   Maior igual a 
// conosole.log(one >= 1)
// console.log(two >= 1)

// <    Menor que
//console.log(one < two)


// <=   Menor igual a
// console.log(one <= two)
// console.log(one <= 1)
// console.log(one <= 0)


//___________________________________________________\\

// Operadores de atribuição (Assignment)

/*
let x

console.log(x)
*/

// Assignment
// x = 1

// Addition assignment
// x = x + 2
// x += 2

// Subtraction assignment
// x = x - 1
// x -= 1

// Multiplication assignment
// x = x * 2
// x *= 2

// Division assignment
// x = x / 2
// x /= 2

// Remainder, exponetiation
// x %= 2
// x **= 2


//___________________________________________________\\

// Operadores lógicos (logical operators)

// - 2 valores booleano, quando verificados,
// resultará em verdadeiro ou falso

/*
let pao = true
let queijo = true
*/

// AND &&
//console.log(pao && queijo)


// OR ||
//console.log(pao || queijo)


// NOT !
//console.log(!pao)


//___________________________________________________\\

// Operador Condicional (Ternário)


// Dependendo da condição, nós recebmos valores diferentes

// Condições então valor q se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã top
//let pao = true
//let queijo = true

//const niceBreakfast = pao || queijo ? 'Cafe top' : 'Café ruim'

//console.log(niceBreakfast)


// Maior de 18
/*
let age = 19


const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)
*/

//___________________________________________________\\

// Operador de String (String operator)

// comparison (comparação)
//console.log( 'a' == 'a')

// concatenation (concatenação)
// Retorna a união de duas Strings
/*
let alpha  = 'alpha'
console.log(alpha + 'bet' + 's')
*/


//___________________________________________________\\

//  Type conversion (typecasting) vs Type coersion

/*
console.log(Number('9) + 5)
*/

/*
###
        FALSY
        Quando um valor é considerado false em contextos onde um booleano é obrigatório ( condicionais e loops )

        false
        0 
        -0
        ""
        null
        underfined
        NaN
*/

//console.log( 0 ? 'verdaderio' : 'falso' )


/*
###
        TRUTHHY
        Quando um valor é considerado true em contextos onde um  booleano é obrigatório ( condicionais e loops)


        true
        {}
        []
        1
        3.23
        "0"
        "false"
        -1
        Infinity
        -Infinity
*/

//console.log( 1 ? 'verdadeiro' : 'falso' )


//___________________________________________________\\

// Operator precedence
// Precedência de operadores
/*

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=c
* igualdade                     == != === !==
* AND                           &&
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *=

*/

//console.log( 2 + 5 * 10 )
console.log( 3 > 2 )