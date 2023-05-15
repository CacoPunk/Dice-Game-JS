let formSoma = document.getElementById("formSoma");
formSoma.addEventListener("submit", (e) => {
    e.preventDefault();
    let numero1 = Number(document.querySelector("#numero1").value);
    let numero2 = Number(document.querySelector("#numero2").value);
    let soma = numero1 + numero2;
    console.log(soma);

    document.querySelector("#resultado").innerHTML = soma;
})
