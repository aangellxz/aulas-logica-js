// const numeros = [1,2,3,4,5]
// const valoresDobrados = numeros.map(num => num * 20)

// // console.log(valoresDobrados)
// // console.log(numeros)

const usuarios = [
    {
        nome: "João" ,
        idade: 52
    },
    {
        nome: "Maria" ,
        idade: 40
    },
    {
        nome: "Joana" ,
        idade: 30
    }
]

const nomesUsuario = usuarios.map(usuario =>{
    return `${usuario.nome} Tem ${usuario.idade} anos`
} )
console.log("Nomes de usuario", nomesUsuario)