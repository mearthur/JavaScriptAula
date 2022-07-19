// callback function


/*
function sayMyName(name) {
    console.log(' Antes de executar callback')

    name()    //callbak

    console.log(' Depois de executar callback')
}

sayMyName(
    () => {
        console.log('estou numa callback')
    }
)

*/


// Da no mesmo se for dentro
// Exemplo


function sayMyName(name) {
    console.log('antes de executar callback')

    function name() {
        console.log('estou em um callback')
    }
    name()

    console.log('depois de uma callback')
}

sayMyName()