//Alguns erros

let  numero = 12 // O javaScript é sensível ap capsLock
console.log(numero) // Erro de declaração, variável não declarada

// console.log(numero //Erro de sintaxe, falras de parenteses

// Tratamento de erros

// console.error( 'A lista não está executando a média') // declara um erro para outro usuário;

const idadeMinima = 18
let idadeCliente = 17

if(idadeCliente >= idadeMinima){
    console.log (' cerveja')
} else {
    console.log (' suco') 
}

// Valor ternário
    idadeCliente = 20

    //modo ternário, ______<=______ ? -----:-----
    //modo ternário, ______==______ ? -----:-----
    console.log (idadeCliente >= idadeMinima ? 'cerveja' : 'Suco')
    // => uma função arrow, completamente diferente de maior igual

    //utilizar com cuidado

    const nome = "Felipe"
const idade = 16
const cidadeNascimento = " Foz do iguaçu"

const apresentacao = " Meu nome é " + nome + " tenho" + idade + " anos e nasci em" + cidadeNascimento

console.log(apresentacao)

// Template string

const apresentacaoII = `Sou o ${nome} e tenho ${idade} anos de idade. Nasci na cidade de ${cidadeNascimento}` 

console.log(apresentacaoII)