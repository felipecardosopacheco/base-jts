// Funçoes

let X = 'nada'

console.log(x)

x = "oi"

console.log(x)

//Declarar uma função
// estrutura nomeDaFunção (parâmetros) { funcionalidade}
function imprimeTexto (texto) {
    console.log(texto)
}

imprimeTexto(' Sou aluno de projeto sistemas')
imprimeTexto(' Olá mundo')

function soma() {
    return 2+2
}
imprimeTexto(soma ()) 
//console.log(soma())

//Função com dois parametros
function somaDeNumeros(numero01, numero02){
    return numero01 + numero02
}

imprimeTexto(somaDeNumeros(10, 8))

function divisaoDeNumeros(numero01, numero02){
    return numero01/ numero02
}

imprimeTexto(divisaoDeNumeros(10, 2))
imprimeTexto(divisaoDeNumeros(2, 10))

//Ordem de parâmetros

function apresentacao(nome, idade){
    return ` Meu nome é ${nome} e tenho ${idade} anos`
}

imprimeTexto(apresentacao('Felipe, 16'))
imprimeTexto(apresentacao (16, Felipe)) // A ordem dos parâmetros é importante

// parâmetro inicial, para que a função começe com um parâmetro pré-definido
function multiplicacao(n1, n2){
    return ' n1 * n2 '
}

imprimeTexto(multiplicacao(2, 5))


// Expressão de função

const constanteSoma = function (n1, n2){ return n1 + n2}

imprimeTexto(constanteSoma(17,25))

// Função flecha 

const apresentaFlecha = (nome) => `Meu nome é ${nome} `

imprimeTexto(apresentaFlecha(`Felipe`))

const somaNumeroPequenos = (nu1, nu2) => {
    if(nul <= 10 && nu2 <= 10){
        return nu1 + nu2
    }else{
        return nu1 `Seu número é maior do que 10`
    }
}

imprimeTexto(somaNumeroPequenos(2,11))
imprimeTexto(somaNumeroPequenos(2,4))