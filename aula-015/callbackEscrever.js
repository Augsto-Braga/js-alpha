function escreverTexto(texto) {
  console.log(texto);
}

function gerarTexto(callback) {
  let textExample = "Oi, eu sou um exemplo de texto!";

  callback(textExample);
}

gerarTexto(escreverTexto);
