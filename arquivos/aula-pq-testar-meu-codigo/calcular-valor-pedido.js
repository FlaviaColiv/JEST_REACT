const meuPedido = {
  itens: [
    { nome: "Poção de vida", valor: 100 },
    { nome: "Espada de prata", valor: 200 },
    { nome: "Entrega", valor: 40, entrega: true },
  ],
};

const calcularValorPedido = (pedido) => {
  const valorProdutos = pedido.itens 
    .filter((item) => !item.entrega) 
    .reduce((valorTotal, valorAtual) => valorTotal + valorAtual.valor, 0); 

  const entrega = pedido.itens.filter((item) => item.entrega); 

  if (valorProdutos > 200) {
    return valorProdutos;
  } else {
    return valorProdutos + entrega[0].valor;
  }

};

console.log(calcularValorPedido(meuPedido))
