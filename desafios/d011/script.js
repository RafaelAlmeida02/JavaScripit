function clicar() {
    var ano = Number(window.prompt('Qual é o ano que você quer verificar?'))
    var res = document.getElementById('res')

    if (ano % 400 == 0) {
        res.innerHTML = `<h1>Analisando o ano de ${ano}...<h1>`
        res.innerHTML += `<p>O ano de ${ano} <span class="bissexto">É BISSEXTO</span> &#x2705;</p>`
    } else if (ano % 100 == 0) {
        res.innerHTML = `<h1>Analisando o ano de ${ano}...<h1>`
        res.innerHTML += `<p>O ano de ${ano} <span class="nao-bissexto">NÃO É BISSEXTO</span> &#x274C;</p>`
    } else if (ano % 4 == 0) {
        res.innerHTML = `<h1>Analisando o ano de ${ano}..<h1>`
        res.innerHTML += `<p>O ano de ${ano} <span class="bissexto">É BISSEXTO</span> &#x2705;</p>`
    } else {
        res.innerHTML = `<h1>Analisando o ano de ${ano}...<h1>`
        res.innerHTML += `<p>O ano de ${ano} <span class="nao-bissexto">NÃO É BISSEXTO</span> &#x274C;</p>`
    }

}