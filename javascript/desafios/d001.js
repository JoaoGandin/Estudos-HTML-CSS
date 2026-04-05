/*
Exercício: O Gerenciador de Pedidos
Imagine que você está criando o backend para o site de alguma loja de tortas. Você precisa gerenciar uma lista de sabores que estão saindo para entrega.
O que você deve fazer:
- A Lista: Crie um array chamado pedidos com pelo menos 3 sabores (ex: "Limão", "Maracujá", "Morango").

- Adicionar: Crie uma Arrow Function chamada adicionarPedido que recebe o nome de um novo sabor por parâmetro e usa o .push() para colocar no array.

- Organizar: Crie uma função que use o .sort() para deixar os pedidos em ordem alfabética.

- Verificar: Crie uma função que recebe um sabor e usa o .indexOf() para dizer em qual posição da fila esse pedido está.

- Dica: Use Template Literals para exibir a mensagem: "O sabor ${sabor} é o número ${posicao + 1} da fila!".

- Relatório Final: Crie uma função (pode usar recursividade se quiser se desafiar, ou um loop simples) que mostre o length total de pedidos e liste todos um por um.
*/

let pedidos = ["Limão", "Maracujá", "Morango"]

const adicionarPedido = (novoPedido) => {
    //adiciona o novo pedido
    pedidos.push(novoPedido)
    console.log(`✅ Pedido de '${novoPedido}' adicionado!`);
}

//antes:
/*
function organizarPedidos(){
    //organiza os pedidos
    pedidos.sort();
    const pedidosOrganizados = []
    console.log("--- Lista de Pedidos Atualizada (Ordem Alfabética) ---")
    for(let i = 0; i < pedidos.length; i++){
        console.log(`${i + 1}. ${pedidosOrganizados[i]}`)
    }
    console.log("-----------------------------------------------------")
}
*/
// depois:
function organizarPedidos(){
    //organiza os pedidos
    pedidos.sort();
    console.log("--- Lista de Pedidos Atualizada (Ordem Alfabética) ---");
    // loop para organizar, em lista, os pedidos
    for(let i = 0; i < pedidos.length; i++){
        console.log(`${i + 1}. ${pedidos[i]}`);
    }
    console.log("-----------------------------------------------------");
}

function localizarSabor(sabor){
    // achar a posição do sabor que for solicitado
    const posicao = pedidos.indexOf(sabor);
    // Condição para verificar se o sabor existe
    if(posicao === -1){
        console.log(`❌ O sabor ${sabor} não está na lista.`);
    }else{
        // já que está pegando o index eu somo + 1 para ficar com a contagem correta
        console.log(`O sabor ${sabor} é o número ${posicao + 1} da fila!`);
    }
}

//antes
/*
function relatorioFinal(){
    // pega a quantidade total de pedidos
    const totalPedidos = pedidos.length
    let listaPedidos = [];
    console.log(`Total de pedidos hoje: ${totalPedidos}`);
    for(let i = 0; i < totalPedidos; i++){
        listaPedidos.push(pedidos[i]);
    }
}
*/
//depois
function relatorioFinal(){
    // pega a quantidade total de pedidos
    const totalPedidos = pedidos.length
    console.log(`Total de pedidos hoje: ${totalPedidos}`);
    console.log("Pedios feitos:");
    for(let i = 0; i < totalPedidos; i++){
        console.log(pedidos[i]);
    }
}

adicionarPedido("Laranja");
organizarPedidos();
localizarSabor("Maracujá");
relatorioFinal()