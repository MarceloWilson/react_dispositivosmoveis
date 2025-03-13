
import { soma, subtracao, multiplicacao, divisao, calcularIdade } from './calculadora.js';



const anoNascimento = 1975;
const idade = calcularIdade(anoNascimento);

console.log(`Idade: ${idade} anos`);


console.log("Soma: ", soma(10, 5));
console.log("Subtração: ", subtracao(10, 5));
console.log("Multiplicação: ", multiplicacao(10, 5));
console.log("Divisão: ", divisao(10, 5));