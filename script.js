//variaveis
var mensagem = "Ola mundo";
alert(mensagem);

//operações matemáticas

var a = 2;
var b = 3;
var c = "pao de queijo";
var soma = a + b;
var sub = a - b;
var mult = a * b;
var div = a / b;

alert(soma);
alert(sub);
alert(mult);
alert(div);

//estruturas condicionais

//modulo ira dar o resto da divisao

//determinando estrutura se e par ou impar

if (a % 2 == 1) {
  alert("numero impar");
} else if (c % 2 == 0) {
  alert("numero par");
} else {
  alert("Valor invalido");
}

//estruturas de repetiçoes

var i = 0;

while (i < 3) {
  alert(i);
  i = i + 1;
}

// for (para)

var j;
for (j = 0; j < 3; i++) {
  alert(j);
}

//tipos de dados

var inteiro = 6;
var decimal = 4.5;
var texto = "tipo texto";
var lista = ["banana", "uva", "laranja"];

//para retornar todos os item da lista
//imprime a posiçao
for (u in lista) {
  alert(u);
}
//imprime o valor
for (u in lista) {
  alert(lista[i]);
}

//exibe no console do navegador
console.log("ola mundo");
