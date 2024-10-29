# Bro Burger


O Cardápio Bro's Burger é um projeto web desenvolvido com o objetivo de simular o cardápio virtual de um restaurante. Esse projeto foi inspirado pelo video da ![Crislaine de Paula]url(https://www.youtube.com/watch?v=Uxm17PTHAZw&t=10s), onde decidi aplicar meus conhecimentos de Tailwind, Javascript e fazer uma integração com a API mais básica do Whatsapp.


## Link do Projeto

Você pode acessar o projeto clicando aqui: Tempo Clima


## Tecnologias do Projeto

O projeto foi desenvolvido utilizando:

    HTML5
    Tailwind CSS v.3.4.14
    Javascript
    Lib Boxicon

APIs Utilizadas

    Whatsapp API: Esta API é responsável por fornecer enviar o pedido ao restaurante, listando os produtos, a quantidade destes produtos e os valores unitários.

Features

O Cardápio Bro Burger oferece as seguintes funcionalidades:

    + Horário de funcionamento: Utilizei estilização para informar visualmente sobre o horário de funcionamento do restaurante de forma dinâmica. Também inclui um verificador do horário de funcionamento para que o cliente não possa realizar seu pedido com o restaurante fechado e informando novamente que o mesmo se encontra fechado e horário de funcionamento.

    + Modal de carrinho: criei um modal com os itens selecionados, que pode ser aberto ou fechado à qualquer momento antes do checkout sem que os itens sejam apagados do carrinho.

    + Identifição de itens: Trabalhei com DOM para que itens adicionados mais de uma vez no carrinho alterem apenas sua propriedade de quantidade e essa propriedade seja considerada no somatório total do pedido. Realizei o mesmo para remoção de itens do carrinho.

    + Validação de pedido: Adicionei validadores para impedir que o pedido se complete nas seguintes ocasiões: carrinho vazio, fora do horário de funcionamento e falta de preenchimento do input de endereço

    + Previa de pedido pela home: Adicionei uma pequena previa da quantidade de items no carrinho pela home, fixado no footer do cardápio.

    + Responsividade em aparelhos móveis: utitilzei o principio do Mobile First para projetar esse cardápio, motivo pelo qual escolhi utilizar Tailwind CSS para facilitar a estilização e a responsividade

Preview do Projeto