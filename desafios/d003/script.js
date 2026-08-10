function clicar() {
    var n = Number(window.prompt('Digite um número inteiro qualquer'))
    var ant = n-1
    var suc = n+1
    window.alert(`Antes de ${n}, temos o número ${ant}.
    Depois de ${n}, temos o número ${suc}.`)
}