//crie um array de  objetos em que cada objeto é um produto, tendo como chave (nome, preço, descrição). Crie pelo menos tres produtos.
//crie uma variavel que irá armazenar  o array com os nomes dos produtos.
//crie uma segunda variavel que irá armazenar  o array com os preços dos produtos.
//Use o laço for ou for of para exibir cada item do array da variável de nomes no console.


const listaDeCompras = [
    {
        item: "Caderno" ,
        preco: 34,
        descrição: "Ótimo Produto!"
    },
    {
        item: "Borracha" ,
        preco: 4,
         descrição: "Ótimo Produto!"
    },
    {
        item: "Estojo" ,
        preco: 24,
         descrição: "Ótimo Produto!"
    }
]

const nomesDosProdutos = listaDeCompras.map(produto => produto.item)
// console.log("Lista de Produtos:", nomesDosProduto)

const precoDosProdutos = listaDeCompras.map(produto => produto.preco)
// console.log("Lista de Preços:",precoDosProdutos )

for(nome of nomesDosProdutos){
    console.log("Produtos:",nome)
}

for(preco of precoDosProdutos){
    console.log("Preços:",preco)
}
