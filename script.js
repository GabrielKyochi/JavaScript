// Verificação de Par ou Impar:
let numero = prompt("Digite um número");

function verificarPar(numero){
    if(numero % 2 === 0){
      console.log(numero + " é igual a par.");
    }else{
        console.log(numero + " é igual a ímpar.");
    }
}

verificarPar(numero);
// Fim da questão 1

// Operações Matemáticas Simples:
let n1 = parseFloat(prompt("Escreva o n1:"))
let n2 = parseFloat(prompt("Escreva o n2:"))

  function calcular(n1,n2){

    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const multiplicacao = n1 * n2;
    let divisao = 0;
    if(n2 === 0){
      console.log("Não da para dividir por 0")
    }else{
      divisao = n1 / n2;
    }
    console.log("O valor da soma é:" + soma);
    console.log("O valor da subtração é:" + subtracao);
    console.log("O valor da multiplicação é:" + multiplicacao);
    console.log("O valor da divisão é:" + divisao);
  }
calcular(n1, n2);
// Fim da questão 2

// Laço While para Contagem Regressiva:
let i = 10

function contagem_regressiva(i){
  while (i > 0){
console.log(i)
i--;   
  }
}
contagem_regressiva(i);
// Fim da questão 3

// Manipulação de Strings:
var escrita = ["p", "a", "l", "a", "v", "r", "a"];

function inverter_texto(escrita){
console.log(escrita);
escrita.reverse();
console.log(escrita);
}
inverter_texto(escrita);
// Fim da questão 4

// Contagem de caracteres em um string:
let palavra = prompt("Escreva uma palavra");
let contagem_caracteres = palavra.length

function contar_caracteres(contagem_caracteres){
    let quantidade = contagem_caracteres;
    console.log("A quantidade de caracteres é: " + quantidade);
  }
contar_caracteres(contagem_caracteres);
// Fim da questão 5

// Acessando propriedades de objetos:
let carro = {
  Marca: "Porshe",
  modelo: "Taycan",
  ano: "2025",
  imprimir: function() {
    console.log("O modelo do carro é:" + this.modelo)
  }
};
// Fim da questão 6

// Função com Parâmetros Opcionais:
let nome = prompt("Digite um nome");
let mensagem = prompt("Digite a mensagem");

function mensagemPersonalizada(nome, mensagem){
  console.log("Olá!" + nome + mensagem);
}
mensagemPersonalizada(nome, mensagem);
// Fim da questão 7

// Calculadora de média:
let numero1 = parseFloat(prompt("Digite um primeiro número"));
let numero2 = parseFloat(prompt("Digite o segundo número"));
let numero3 = parseFloat(prompt("Digite o terceiro número"));

function media(numero1, numero2, numero3){
  const resultado = (numero1 + numero2 + numero3) / 3;
  console.log("A média é de:" + resultado)
}
media(numero1, numero2, numero3);
// Fim da questão 8

// Laço for com condição:
for(let i = 1; i <= 20; i++) {
  if(i % 3 === 0){
    console.log(i + " é múltiplo de 3");
  } else{
    console.log(i + " não é múltiplo de 3");
  }
}
// Fim da questão 9

// Verificação de Palavra Palíndroma: