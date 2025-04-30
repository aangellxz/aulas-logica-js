const notasMatmatica = {
    primeiroTrimestre : 6,
    segundoTrimestre : 8,
    terceiroTrimestre : 9
}

const {primeiroTrimestre,segundoTrimestre,terceiroTrimestre} = notasMatmatica

const mediaDeMatematica = ( (primeiroTrimestre + segundoTrimestre + terceiroTrimestre) / 3) .toFixed(2)

console.log(mediaDeMatematica)

if(mediaDeMatematica >= 7){
    console.log("Aprovado")
} else{
    console.log("Reprovado")
}