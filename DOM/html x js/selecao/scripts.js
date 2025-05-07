// seleção por ID

const content = document.getElementById("content")

content.innerHTML = `<p>Páragafo de texto</p>` // adiciona elementos de HTML dinamicamente

content.style.backgroundColor = "pink"
content.style.fontSize = "30px"

//seleção por classe

const classText = document.getElementsByClassName("text")
// console.log("classText", classText)

for(text of classText){
    text.style.color = "gray"
}

// seleção por tag
const titles = document.getElementsByTagName("h2")
console.log("titles",titles)

for(title of titles){
    title.style.fontSize="40px"
}
// titles.style.fontSize="40px"

// seleção por query selector

const elementFeature = document.querySelector("#feature")

const newElement = document.createElement("p")

newElement.textContent = "Um novo elemento"

elementFeature.append(newElement)

elementFeature.insertAdjacentHTML("beforeend",
    `
      <div>
      <p>Outro Elemento de Parágrafo</p>
      </div>
    `
)

document.body.insertBefore(newElement,elementFeature)

// seleção por query selectorAll
const links = document.querySelectorAll("#links a")

console.log("links",links)

for(link of links){
    link.classList.add("feature-links")
    link.target = "_blank"
}

