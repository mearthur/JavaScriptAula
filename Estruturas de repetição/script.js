//___________________________________________________\\
// Estrutura de respetição
// for (para)
// break - para a execução do loop
// continue - pula a execução do momento

/*
for(let i = 10; i > 0; i--) {
    if(i===5){
        continue;
    }

    console.log(i)
}

*/

//___________________________________________________\\
// Estrutura de repetição 
// while

/*
let i = 0;
while(i < 10) {
    console.log(i)

    i++;
}

*/

//___________________________________________________\\
// for... of

/*
let name = 'Arthur'
let names = ['Joao', 'Arthur', 'Alex']

for(let name of names) {
    console.log(name)
}
*/

//___________________________________________________\\
// for... in

let person = {
    name: 'Arthur',
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}




/*
const boxes = document.querySelectorAll('.box')
const button = document.querySelector('button')

button.onclick = () => {
  boxes.forEach(box => {
    box.classList.toggle("box-red")
  })
}











// Procurar itens no html
const body = document.querySelector('body')
const button = document.querySelector('.botao-bacana')

// Evento no html
button.onclick = () => {
  // Executar 
  
  // return body.style.backgroundColor = "#b2b2b2"

  return body.classList.toggle("dark-theme")
}
*/