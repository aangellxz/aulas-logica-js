let contador = 0

const resultado = document.querySelector("#resultado")

const btnIncrementaValor = document.querySelector("#btnIncrementar")
const btnDiminuiValor = document.querySelector("#btnDiminuiValor")

btnIncrementaValor.addEventListener("click", ()=>{
    contador++
    resultado.textContent = `Contador: ${contador}`
})



btnDiminuiValor.addEventListener("click",()=>{
    if(contador > 0){
            contador--
    resultado.textContent = `Contador: ${contador}`
    }

})