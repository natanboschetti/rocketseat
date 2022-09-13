console.log("Hello World")

//A `` aceita expressões da linguagem.
console.log(`O resultado de 1 + 1 é ${1 + 1}`)

// Objetos
console.log({
    name: "Natan",
    Idade: "17",
    andar: function() {
        console.log('andar')
    }
})

//Array - Vetores - Agrupamento de dados
console.log([
    "Açucar",
    "Café",
    "Leite"
])

//variáveis - var, let, const
var num1 = 1
let num2 = 2
const num3 = 3
console.log(`var1= ${num1}, var2= ${num2},var3= ${num3}. `)

//Scope
//var é global e, também local
console.log('> existe x antes do bloco?', x)

{
    var x = 0
}

console.log('> existe x depois do bloco?', x)

//const e let são locais e só funcionam no escopo onde foi criada
//porém a let se atualiza se um escopo local tiver a mesma variável definida

let y = 1

{
    let y = 0 // se remover este let, a variável irá subir de scope e atualizar a variável de cima que tem o valor de 1 e por fim fica 0
    console.log(y)
}

console.log(y)

//Resumindo
//declaration
var name
//assignment
var name = 1 
//tipo de dado
console.log(typeof name)
//Resumindo
//declaration
var name
//assignment
var name = "Natan" 
//tipo de dado
console.log(typeof name)

//agrupamento de declarações
let age, isHuman

age = 17
isHuman= true

//multiplos argumentos na function
//console.log(name, age, isHuman)

//escrita do texto + variáveis
//concatenando valores
console.log(`O `+ name +` tem `+ age +` anos.`)

//Object 

const person = {
    name: 'Jake',
    age: 32,
    wight: 89.5,
    isAdmin: true
}

console.log(person.name)

//Array

const animals = [    
    'Lion',
    'Cat',
    { // Object dentro do Array
        name: 'tiger',
        age: 3
    }
]
//acessar valores dentro do Array
console.log(animals[2].name)