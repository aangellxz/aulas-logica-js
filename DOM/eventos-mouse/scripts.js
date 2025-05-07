const content = document.querySelector("#content")

const showButton = document.querySelector("#show")

const hideButton = document.querySelector("#hide")

const hideShowContentButton = document.querySelector("#hideShowContent")

showButton.addEventListener("click",()=>{
     content.classList.add("show")
     content.classList.remove("hide")
})

hideButton.addEventListener("click",()=>{
    content.classList.add("hide")
    content.classList.remove("show")
})

hideShowContentButton.addEventListener("click",()=>{
    content.classList.toggle("hide")
    content.classList.remove("show")
})