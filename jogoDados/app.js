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
    let score = [0, 0];
     dados.forEach(function(img, i) {
        let temp = getDiceNumber();
        score[i] = temp.slice(11, 12);
        img.setAttribute("src", temp);
    })
    if (score[0] > score[1]) {
        document.querySelector(".winner").innerHTML = "Jogador 1 VENCEU!"
    } else if(score[0] < score[1] ) {
        document.querySelector(".winner").innerHTML = "Jogador 2 VENCEU!"
    } else {
        document.querySelector(".winner").innerHTML = "EMPATE"
    }
}  )