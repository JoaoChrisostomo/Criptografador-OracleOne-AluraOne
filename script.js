function criptografar() {
  acao();
}

const inserirTexto = document.getElementById("#input-texto");
const btnCriptografar = document.getElementById("btn-criptografar");
const btnDescriptografar = document.getElementById("btn-descriptografar");
const inputTexto = document.getElementById("btn-copy");
const copiarTexto = document.getElementById("copiar-text");

document.addEventListener("click", function() {
    alert("texto inválido");
});

function criptografador() {

  let valorTexto = texto.value;
  let resultado = valorTexto
    .replace(/i/gi, "imes")
    .replace(/e/gi, "enter")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  resultado.value = resultado;
}


function descriptografar() {
  let textoValor = texto.value;
  let wordsKeys = ["enter", "imes", "ai", "ober", "ufat"];
  let verify = wordsKeys.some((e) => textoValor.includes(e));
  if (!verify) {
    alert("O texto não está codificado!");
  } else {
    let res = textoValor
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    resultado.value = res;
  }
}
