function clicar() {
    var a = window.prompt('Qual é o valor de a?')
    var b = window.prompt('Qual é o valor de b?')
    var c = window.prompt('Qual é o valor de c?')

    var delta = b**2-4*a*c
    //Δ=b2−4ac

    var res = document.getElementById('res')
    res.innerHTML = 
    `
    <h1>Resolvendo Bhaskara</h1>
    <p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>
    <p>O cálculo realizado será <strong>Δ = ${b}² - 4 . ${a} . ${c}</strong></p>
    <p>O valor calculado foi <strong>Δ = ${delta}</strong></p>
    `
}