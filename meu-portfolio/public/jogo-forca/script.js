const palavras = [
"REACT","JAVASCRIPT","PYTHON","ALGORITMO","ROSA","COSTA","FLOR",
"PORTFOLIO","PEDRA","OBJETO","ARRAY","QUERIDO","QUEZIA"
]

let palavraSecreta
let palavraOculta
let erros
let letrasUsadas

const palavraElemento = document.getElementById("palavra")
const errosElemento = document.getElementById("erros")
const letrasUsadasElemento = document.getElementById("letras-usadas")

function iniciarJogo(){

  palavraSecreta = palavras[Math.floor(Math.random()*palavras.length)]
  palavraOculta = Array(palavraSecreta.length).fill("_")
  erros = 0
  letrasUsadas = []

  palavraElemento.innerText = palavraOculta.join(" ")
  errosElemento.innerText = "Erros: 0"
  letrasUsadasElemento.innerText = ""

}

function verificarLetra(){

  const input = document.getElementById("letra")
  const letra = input.value.toUpperCase()

  input.value = ""

  if(!letra || letrasUsadas.includes(letra)){
    return
  }

  letrasUsadas.push(letra)
  letrasUsadasElemento.innerText = "Letras usadas: " + letrasUsadas.join(", ")

  let acertou = false

  for(let i=0;i<palavraSecreta.length;i++){

    if(palavraSecreta[i] === letra){

      palavraOculta[i] = letra
      acertou = true

    }

  }

  if(!acertou){

    erros++
    errosElemento.innerText = "Erros: " + erros

  }

  palavraElemento.innerText = palavraOculta.join(" ")

  if(!palavraOculta.includes("_")){

    alert("Parabéns! Você venceu! A palavra era " + palavraSecreta)

  }

  if(erros >= 6){

    alert("Você perdeu! A palavra era " + palavraSecreta)

  }

}

function reiniciarJogo(){

  iniciarJogo()

}

iniciarJogo()