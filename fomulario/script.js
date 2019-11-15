function valida() {
  //pega o dom do id nome
  var nome = document.getElementById("nome");
  //imprimir o valor
  if (nome.value == "") {
    alert("campo nome nao pode estar em branco.");
  } else {
    alert("tudo certo, seu formulario pode ser enviado com sucesso.");
  }
}
