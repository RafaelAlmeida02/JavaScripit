function clicar() {
    var produto = window.prompt(`Que produto você está comprando?`)
    var preco = Number(window.prompt(`Quanto custa o ${produto} que você está comprando?`))
    var dinheiro = Number(window.prompt(`Qual foi o valor que você deu para pagar o ${produto}`))

    var troco = dinheiro - preco

    window.alert(`Você comprou um ${produto} que custou R$${preco.toFixed(2)}. 
    Deu R$${dinheiro.toFixed(2)} em dinheiro e vai receber R$${troco.toFixed(2)} de troco.
    Volte Sempre!`)
}