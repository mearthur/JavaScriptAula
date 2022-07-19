/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
    
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return  this.name + " andando"
    }
}
const Arthur = new Person('Arthur')
const jp = new Person('jp')
console.log(Arthur.walk())
console.log(jp.walk())