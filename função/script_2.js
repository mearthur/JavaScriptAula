/*

    Prototype

    * prototypebased language
    * prototype chain
    * __proto__


*/

//___________________________________________________\\

/*
    Type conversion (typecasting) vc Type coersion

    * Alteração de um tipo de dado para outro tipo



console.log(Number('9') + 5)

*/


//___________________________________________________\\

// Manipulando Strings e Números

/*
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))
*/

//___________________________________________________\\

// Manipulaqndo Strings e Números

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

/*
let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)
*/

//___________________________________________________\\


// Manipulando String e Números

// Transfromar um número quebrado com 2 casas decimais e trocar ponto por vírgula

/*
let number = 3448.523427
console.log(number.toFixed(2).replace(".",","))
*/

//___________________________________________________\\

// Manipulando String e Números

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também


/*
let word = "Programar é muito relaxante"
let word1 = "Programar é muito bom"
console.log(word.toUpperCase())
console.log(word1.toLowerCase())

*/

//___________________________________________________\\

// Manipulando Strings

// Verificar se o texto contém a palavra Amor

/*
let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"))
*/

//___________________________________________________\\

// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array.
// Depois disso, transforme o array em um texto e onde eram espaços, coloque '_'

/*
let phrase = "Eu quero viver o amor"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.joy("_")
console.log(phraseWithUnderscore.toLowerCase())
*/

//___________________________________________________\\
 
// Manipulando Arrays

// Criar Array com construtor

/*
let myArray = new Array('a' , 'b' , 'c')
console.log(myArray)
*/

//___________________________________________________\\

// Manipulando Arrays

// Contar elementos de um array

/*
console.log(["a", "b", "c"].length)
*/


//___________________________________________________\\
// Manipulando Arrays

// Tranformando uma caideia de caracteres em elementos de um array

/*
let word = "Manipulação"
console.log(Array.from(word))
*/






//___________________________________________________\\

// Manipulando Arrays

let techs = ["html", "css", "js"]


// adicionar um item no fim
techs.push("nopde js")
// adicionar no começo
techs.unshift("sql")
// remover do fim 
//techs.pop()
// remover do começo
//techs.shift()
// pegar somente alguns elementos do array
//console.log(techs.slice(1, 3))
// remover 1 ou mais items em qualquer posição do array
techs.splice(1, 1)
// encontrar a posição de um elemento no array
let index = techs.indexOf('html')

console.log(techs)
console.log(index, 1)