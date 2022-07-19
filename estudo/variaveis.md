## Variáveis

* Nomes simbólico para receber algum valor
* Atalhos de código
* Identificadores
* 3 palavras reservadas para criar uma variável
    * var
    * let
    * const // sempre vai ser const 



O JS é uma linguagem fracamente tipada e dinâmica
- Variável não precisa ter um tipo previmente definido
- Podemos mudar o conteúdo da variável


## Scope

* Escopo determina a visibilidade de alguma variável no Js

# Block statement

```js
// vamos iniciar um bloco
{
     // aqui dentro é um bloco e posso colocar qualquer código
} //aqui fechamos o bloco
```
O bloco, também criará um novo escopo. Chamamos de 'block-scoped'



## var
```js

// var é global e poderá funcionar fora de um escopo de bloc
// hoisting
var x

console.log('> existe x depois do bloco', x)

{
    x = 0
}

```

## let e const

```js
// const e let sãop locais e só funcionam no escopo onde foi criada

console.log('> existe y antes do bloco', y)

{
    let y = 0
}

console.log('> existe x depois do bloco', y)
```
