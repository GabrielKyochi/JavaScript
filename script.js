// Exercício 1 - Verificação de Par ou Ímpar:
let numero = prompt("Escreva um valor para verificar se ele é par ou ímpar:");

function verificar_par(numero){
    if(numero % 2 === 0){
        console.log(numero + " é um valor par.");
    } else{
        console.log(numero + " é um valor ímpar.");
    }
    }
    verificar_par(numero);
// Encerramento do exercício 1

// Exercício 2 - Operações Matemáticas Simples:
let n1 = parseFloat(prompt("Escreva um primeiro número para realizar matemática simples:"));
let n2 = parseFloat(prompt("Escreva um segundo número para realizar matemática simples:"));

function calcular(n1, n2){
    const soma = (n1 + n2);
    const subtracao = (n1 - n2);
    const multiplicacao = (n1 * n2);
    let divisao = 0;
    if(n2 === 0){
        console.log("A divisão dos valores é impossível!");
    } else{
        divisao = (n1 / n2);
        console.log("O resultado da divisão dos valores é: " + divisao);
    }
    console.log("O resultado da soma dos valores é: " + soma);
    console.log("O resultado da subtração dos valores é: " + subtracao);
    console.log("O resultado da multiplicação dos valores é: " + multiplicacao);
    }
calcular(n1, n2);
// Encerramento do exercício 2

// Exercício 3 - Laço While para Contagem Regressiva:
    let i = 10;
    
    function contagem_regressiva(i){
        console.log("A contagem regresiva de 10 até 1 é:")
        while(i > 0){
            console.log(i);
            i--;
        }   
    }
    contagem_regressiva(i);
// Encerramento do exercício 3

// Exercício 4 - Manipulação de Strings:
let palavra_inversa = prompt("Escreva uma palavra para ser invertida:");

function inverter_texto(palavra_inversa){
    separar_letras = palavra_inversa.split('');
    inverter_letras = separar_letras.reverse();
    juntar_letras = inverter_letras.join('');
    console.log("A palavra escolhida, ao inverter é: " + juntar_letras);
}
inverter_texto(palavra_inversa);
// Encerramento do exercício 4

// Exercício 5 -  Contagem de Caracteres em uma String:
let palavra = prompt("Escreva uma palavra para contar o seu número de caracteres:");

function contar_caracteres(palavra){
    let contagem_caracteres = palavra.length;
    console.log("A quantidade de letras presentes na palavra é: " + contagem_caracteres);
}
contar_caracteres(palavra);
// Encerramento do exercício 5

// Exercício 6 - Acessando Propriedades de Objetos:
let carro = {
marca: "Porshe",
modelo: "Toyota",
ano: 2025,
};
console.log("O modelo do carro é: " + carro.modelo);
// Encerramento do exercício 6

// Exercício 7 - Função com Parâmetros Opcionais:
let nome = prompt("Escreva um nome para ser mostrado na mensagem personalizada:")
let mensagem = prompt("Escreva uma mensagem personalizada:")

function mensagem_personalizada(nome, mensagem){
    console.log("Olá! " + nome + ", " + mensagem);
}
mensagem_personalizada(nome, mensagem);
// Encerramento do exercício 7

// Exercício 8 - Calculadora de Média:
let primeiro_numero = parseFloat(prompt("Escreva um primeiro número para calcular uma média:"));
let segundo_numero = parseFloat(prompt("Escreva um segundo número para calcular uma média:"));
let terceiro_numero = parseFloat(prompt("Escreva um terceiro número para calcular uma média:"));

function media(primeiro_numero, segundo_numero, terceiro_numero){
    const resultado = (primeiro_numero + segundo_numero + terceiro_numero / 3);
    console.log("A média dos 3 números escolhidos é: " + resultado);
}
media(primeiro_numero, segundo_numero, terceiro_numero);
// Encerramento do exercício 8

// Exercício 9 - Laço for com Condição
function laco_por_condicao(){
    for(let i = 1; i <= 20; i++){
        if(i % 3 === 0){
            console.log(i + " -" + " Esse valor é múltiplo de 3!");
        } else{
            console.log(i + " -" + " Esse valor não é múltiplo de 3!");
        }
    }
}
laco_por_condicao()
// Encerramento do exercício 9

// Exercício 10 -  Verificação de Palavra Palíndroma:
let palavra_palindroma = prompt("Escreva uma palavra para verificar se ela é palíndroma");

function verificar_palindromo(palavra_palindroma){
    separar_letras = palavra_palindroma.split('');
    inverter_letras = separar_letras.reverse();
    juntar_letras = inverter_letras.join('');
    if(juntar_letras == palavra_palindroma){
        console.log("Essa palavra é palíndroma!");
    } else{
        console.log("Essa palavra não é palíndroma!");
    }
}
verificar_palindromo(palavra_palindroma);
// Encerramento do exercício 10

// Exercício 11 - Verificação de Número Positivo ou Negativo:
let numero_positivo_negativo = parseFloat(prompt("Escreva um número para verificar se ele é positivo ou negativo:"));

function verificar_sinal(numero_positivo_negativo){
    if(numero_positivo_negativo === 0){
        console.log("O seu número é 0!");
    }
    if(numero_positivo_negativo < 0){
        console.log("O seu número é negativo!");
    } else{
        console.log("O seu número é positivo!");
    }
}
verificar_sinal(numero_positivo_negativo);
// Encerramento do exercício 11

// Exercício 12 - Função para Converter Celsius em Fahrenheit:

// Encerramento do exercício 12