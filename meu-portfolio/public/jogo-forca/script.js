const palavraSecreta = "REACT"
let palavraOculta = ["_", "_", "_", "_", "_"]
let erros = 0

const palavraElemento = document.getElementById("palavra")
palavraElemento.innerText = palavraOculta.join(" ")

function verificarLetra(){

  const input = document.getElementById("letra")
  const letra = input.value.toUpperCase()

  input.value = ""

  let acertou = false

  for(let i = 0; i < palavraSecreta.length; i++){

    if(palavraSecreta[i] === letra){

      palavraOculta[i] = letra
      acertou = true

    }

  }

  if(!acertou){

    erros++
    document.getElementById("erros").innerText = "Erros: " + erros

  }

  palavraElemento.innerText = palavraOculta.join(" ")

  if(!palavraOculta.includes("_")){

    alert("Você venceu!")

  }

  if(erros >= 6){

    alert("Você perdeu! A palavra era " + palavraSecreta)

  }

}
