let num = 10
// num = num + 5
// num += 5

//imprime múltiplos de 5 de 0 e 100, excluindo o 0

// for(let i = 0; i <= 100; i += 5){
//     if(i > 0){
//         console.log(i)
//     }
    
// }

// function somaSeMaiorQue10(a, b){
//     if(a>10 && b>10){
//         return a+b;
//     } else{
//         return "Números insufucientes"
//     }
// }

// console.log(somaSeMaiorQue10(12,20))

// função para calcular média

// function verificaMedia(notas){
//     let soma = 0;
//     for(let i = 0; i < notas.length; i++){
//         soma += notas[i]
//     }
//     const media = soma / notas.length
//     return media >= 7 ? "Aprovado" : "Reprovado"
// }

// console.log(verificaMedia([8,8,8,8]))


// let vogais = ["a","e","i","o","u"]
// let verificaVogalEmArray = vogais.includes("p")

// console.log(verificaVogalEmArray)

// let palavra = "Texto"
// let palavraConvertidaEmCaixa = palavra.toLowerCase()

//  console.log(palavraConvertidaEmCaixa)

//função que conta a quantidade de vogais dentro de uma palavra

// function contaVogais(palavra){
//     let vogais = ["a","e","i","o","u"]
//     let contador = 0

//     for(const letra of palavra.toLowerCase()){
//         if(vogais.includes(letra)){
//             contador++
//         }
//     }
//     return contador
// }
// console.log(contaVogais("love"))

function verificarNumero(n){
    if(n>=10 && n<= 100 && n % 5 === 0){
        return "Número Valido!"
    } else{
        return "Número Invalido!"
    }
}
console.log(verificarNumero(27))