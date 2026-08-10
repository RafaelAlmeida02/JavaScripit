var cotacao = Number(window.prompt(`Antes de mais nada. Quanto está a cotação do dolar agora?`).replace(',','.'))

function clicar() {
    var real = Number(window.prompt(`Quantos R$ você tem na carteira?`))

    var dolar = real / cotacao

    var res = window.document.getElementById('res')

    res.innerHTML = `Com R$${real.toFixed(2)}, você consegue comprar US$${dolar.toFixed(2)}. <br>
    Considerando a cotação de R$${cotacao.toFixed(2)} por dólar.`
}