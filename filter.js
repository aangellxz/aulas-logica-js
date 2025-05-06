// const numeros = [1,2,3,4,5]

// const pares = numeros.filter(num => num % 2 === 0)

// // console.log("Números Pares",pares)

// const produtos = [
//     {
//         nome: "Notebook",
//         preco: 3000,
//     },
//     {
//         nome: "Mouse",
//         preco: 50,
//     },
//     {
//         nome: "Mouse",
//         preco: 500,
//     },
//     {
//         nome: "Monitor",
//         preco: 1200,
//     },
//     {
//         nome: "Teclado",
//         preco: 120,
//     },
// ]

// // const produtoMaioresQueMil = produtos.filter(produto => produto.preco > 1000)
// const produtoMouses = produtos.filter (produtos => produtos.nome == `${"Mouse"}`)

// // console.log(produtoMouses)


const numeros = [2,5,7,10]
const soma = numeros.reduce((total,num) => total + num, 0)

// console.log(soma)

const produtos = [
        {
            nome: "Notebook",
            preco: 3000,
        },
        {
            nome: "Mouse",
            preco: 50,
        },
        {
            nome: "Mouse2",
            preco: 500,
        },
        {
            nome: "Monitor",
            preco: 1200,
        },
        {
            nome: "Teclado",
            preco: 120,
        },
    ]

    const total = produtos.reduce((soma,produto) => soma + produto.preco , 0)
    console.log(total)