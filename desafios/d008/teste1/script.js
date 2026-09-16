function clicar() {
    var prod = window.prompt('Qual é o produto que você está comprando?')
    var preco = window.prompt('Qual é o preço do que você está comprando?')

    preco = Number(preco.replace(',','.'))

    var desconto = 10 / 100
    var valorDesconto = preco * desconto
    var precoFinal = preco - valorDesconto

    //forma mais direta de fazer, pq é a mesma coisa.
    /*var desconto =  preco * 10 / 100
    var resto = preco - desconto
    */

    var resu = document.querySelector('div#res')
    
    resu.innerHTML = 
    `   <p>O preço original era R$ ${preco.toFixed(2)}.</p>
        <p>Você acaba de ganhar R$${valorDesconto.toFixed(2)}reais de desconto (-10%)</p>
        <p>No fim, você vai pagar R$ ${precoFinal.toFixed(2)}reais no produto ${prod}.</p>
    `
}



