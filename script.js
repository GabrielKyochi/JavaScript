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

