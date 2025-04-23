// crie uma variavel que seja array de objeto que tenha os seguintes pares: chave e valor

//nome da variavel => users

// valores => um objeto com os valores login, password, cursos, sendo cursos um array com dois valores

// renderizar no console a seguinte frase com o primeiro user do array 'Meu login é $(login), minha senha é &(password) e faço os cursos x e y'


const users = [
    {
        login:"login@01",
        password:"password.0123",
        cursos:["arquitetura","gastronomia"]
    }
]

console.log(`Meu login é ${users[0].login}, minha senha é ${users[0].password} e faço os cursos ${users[0].cursos[0]} e ${users[0].cursos[1]}`)