const faturamento = {
    primeiroTrimestre : 10650 ,
    segundoTrimestre : 20000,
    terceiroTrimestre : 35000
}

const {primeiroTrimestre,segundoTrimestre,terceiroTrimestre} = faturamento

const mediaFaturamento = ((primeiroTrimestre + segundoTrimestre + terceiroTrimestre) / 3).toFixed(2)

console.log(`A média do faturamento é ${mediaFaturamento}`)

if(mediaFaturamento >= 25000 ){
    console.log("Média esperada 👍")
} else{
    console.log("Média ABAIXO do esperado 👎")
}
