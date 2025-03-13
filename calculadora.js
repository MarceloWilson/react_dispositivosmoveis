export function soma(a, b) {
    return a + b;
}

export function subtracao(a, b) {
    return a - b;
}

export function multiplicacao(a, b) {
    return a * b;
}

export function divisao(a, b) {
    return a / b;
}



import moment from 'moment';
export function calcularIdade(anoNascimento) {
    const anoAtual = moment().year(); 
    return anoAtual - anoNascimento; 
}





