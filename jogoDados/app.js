function getDiceNumber() {
    let randomNumber = Math.floor(Math.random()  * 6) + 1;
    return 'images/dice' + randomNumber + '.png'
}

let rolar = document.querySelector("#rolar")
let dados = document.querySelectorAll("img");
dados.forEach(function(img, i) {
   img.setAttribute("src", getDiceNumber())
})

rolar.addEventListener("click", function(){
    let dados = document.querySelectorAll("img");
     dados.forEach(function(img, i) {
        img.setAttribute("src", getDiceNumber())
    })

}  )