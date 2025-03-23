// Exercício 1 - Verificação de Par ou Ímpar:
    let numero = prompt("Escreva um valor para verificar se ele é par ou ímpar:");

    function verificar_par(numero){
        if(numero %2 === 0){
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
            console.log("Essa divisão é impossível!");
        } else{
            divisao = (n1 / n2);
        }
        console.log("O resultado da soma dos valores é: " + soma);
        console.log("O resultado da subtração dos valores é: " + subtracao);
        console.log("O resultado da multiplicação dos valores é: " + multiplicacao);
        console.log("O resultado da divisão dos valores é: " + divisao);
    }
calcular(n1, n2);
// Encerramento do exercício 2