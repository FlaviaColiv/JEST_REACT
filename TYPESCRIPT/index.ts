function pessoa(params:AnimationEffect) {
    console.log(pessoa)
    return
}

pessoa [ 1 ]

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