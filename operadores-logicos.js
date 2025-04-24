const valor01 = 50
const valor02 = 20

// && = Operador de conjunção
// || = Operador de desjunção
// !  = Negação

// console.log(`${valor01>20 || valor02>=30}`)

const temCarteira = true
const idade = 19
const resultado = idade >= 18 && temCarteira 

console.log(`${resultado ? "O candidato pode dirigir" : "O candidato NÃO pode dirigir"}`)