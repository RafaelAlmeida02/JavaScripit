function clicar() {
    var antes = Number(window.prompt('Qual era o preço anterior do produto?'))
    var atual = Number(window.prompt('Qual é o preço atual do produto?'))

    var res = document.getElementById('res')
    // preco = Number(preco.replace(',','.'))
    
    var diferenca = atual - antes
    var calculo = (diferenca / antes) * 100

    var situacao = ''
    var variacao = ''
    var porcent = ''

    if (antes < atual) {
        situacao = 'Hoje o produto está mais caro.'
        variacao = `O preço subiu R$ ${Math.abs(diferenca).toFixed(2)} em relação ao preço anterior.`
        porcent = `Uma variação de ${calculo}% pra cima.`
    } else if (antes > atual) {
        situacao = 'Hoje o produto está mais barato.'
        variacao = `O preço diminuiu R$ ${Math.abs(diferenca).toFixed(2)} em relação ao preço anterior.`
        porcent = `Uma variação de ${Math.abs(calculo)}% pra baixo.`
    } else {
        situacao = 'O produto continua com o mesmo preço.'
        variacao = 'Não houve alteração no preço.'
        percentual = 'Uma variação de 0%.'
    }

    /*
    Para remover o sinal de menos:
    Math.abs(diferenca)

    Outra forma:
    diferenca * -1 // pq se diferenca for igual -110 ex.(-110 x -1) = 110
    seria assim = 
    variacao = `O preço diminuiu R$ ${(diferenca * -1).toFixed(2)} em relação ao preço anterior.`
    porcent = `Uma variação de ${(calculo * -1).toFixed(2)}% pra baixo.`
    */

    res.innerHTML =
    `
    <h1>Analisando os valores informados</h1>

    <p>O produto custava R$ ${antes.toFixed(2)} e agora custa R$ ${atual.toFixed(2)}.</p>

    <p>${situacao}</p>

    <p>${variacao}</p>
    
    <p>${porcent}</p>
    `
}