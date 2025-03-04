function pessoa(numero: number) {
    console.log(pessoa)
    return
}

pessoa(36)

// enum TradeType {
//     ACAO = 9281,
//     TESOURO_DIRETO = 3221,
//     TESOURO_SELIC = 6554,
// }

// enum genero {
//     M = 'Masculino',
//     F = 'Feminino',
// }

enum StatusCode {
    OK = 200,
    BadReFquest = 400,
}

const ok = StatusCode.OK; //200
const indexOk = StatusCode['OK']; //200
const stringBadRequest = StatusCode[400]; //BadReFquest

function greet(name: string) {
    console.log(`Olá, ${name}!`)
}

greet("Flávia")

function doubleNumber(number1: number) : number {
    return number1 * 2;
}

const resultado = doubleNumber(3);
console.log(resultado);