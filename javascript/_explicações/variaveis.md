# Variáveis
## O que são variáveis?
Variáveis são espaços em mémoria que nos possibilitam armazenar informações de moto temporário. Elas permitem que você dê um nome a um valor (como um número ou um texto) para que você não precise digitá-lo repetidamente ou para que possa alterá-lo conforme o programa roda.
## Regras para declaração de variáveis.
- Não podem ser iniciadas com números, apenas com letras, "_" ou "$";
- Não podem ser utilizados caractéres especias, como: "ç", "~" "^";
- Não podem ser iguais as palavras reservadas da linguagem.
### Declaração de variáveis
Temos três formas, atualmente, de declarar uma variável:

1- **let:** É a forma mais comum hoje em dia. Use quando você sabe que o valor da variável **pode mudar** durante a execução do script.

Exemplo: Um contador de pontos em um jogo.

2- **const:** Como o nome diz, serve para criar constantes. Use quando o valor **não deve mudar** depois de definido. É a opção recomendada por padrão para deixar seu código mais seguro e previsível.

Exemplo: O valor de PI ou a URL de uma API.

3- **var:** É a forma "antiga". Hoje é evitada na maioria dos casos porque tem um comportamento mais imprevisível (escopo global ou de função), o que pode causar bugs chatos de encontrar. 
O principal "perigo" que ele traz é o hoisting (içamento), onde a variável é lida pelo navegador antes mesmo da linha onde foi declarada, o que costuma confundir quem está começando.

### Padrões para declaração de variáveis
- **Nomes:** Devem ser claros. Geralmente utilizamos o padrão camelCase (ex.: nomeUsuario, valorTotal).

- **Tipos:** O JS é "dinamicamente tipado", ou seja, você não precisa dizer se a variável é um número ou texto; o navegador descobre sozinho quando você atribui o valor.