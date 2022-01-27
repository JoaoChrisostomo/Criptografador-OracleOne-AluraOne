const inserirTexto = document.getElementById("input-entrada");
const btnCriptografar = document.getElementById("btn-criptografar");
const btnDescriptografar = document.getElementById("btn-descriptografar");
const inputTexto = document.getElementById("input-saida");
const copiarTexto = document.getElementById("copiar-text");
const alertRed = document.getElementById("alert");
const qualquerNome = document.getElementById("qualquer");

function criptografador() {
  var mensagem = document.getElementById("sucesso");
  mensagem.style.display = "block";

  let valorTexto = inserirTexto.value;
  let resultado = valorTexto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  copiarTexto.value = resultado;
}

inserirTexto.addEventListener("input", function (event) {
  event.preventDefault();

  var caractere = inserirTexto.value.toLowerCase();
  var inverText = caractere.replaceAll(/[^a-z]/g, "");

  if (caractere == inverText) {
  } else {
    alertRed.classList.add("alert-red");
    setTimeout(() => {
      alertRed.classList.remove("alert-red");
    }, 3000);
  }
  inserirTexto.value = inverText;
});

function descriptografar() {
  var mensagem = document.getElementById("sucesso");
  mensagem.style.display = "none";
  let textoValor = inserirTexto.value;
  let resultado = textoValor
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  copiarTexto.value = resultado;
}

function alerta() {
  alert("Alerta disparado com sucesso.");
}

function copiar() {
  var content = copiarTexto.value;

  if (content != "") {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        alert("deseja copiar essa frase?");
      })
      .catch((erro) => {
        alert("regra invalida");
      });
  } else {
  }
}
