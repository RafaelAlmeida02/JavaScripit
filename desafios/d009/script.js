function clicar() {
    let nome = window.prompt('Qual é o nome do funcionário?')
    let salario = Number(window.prompt(`Qual é o salário de ${nome}?`))
    var porcent = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))

    var aumento = salario * porcent / 100
    var reajuste = salario + aumento

    if(!nome || isNaN(salario) || isNaN(porcent)) {
        window.alert('[Erro] Operação invalida, digite os valores em todos os campos para fazer o reajuste.')
        res.innerHTML = ''
    } else {
    var res = document.getElementById('res')
    res.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>
    <p>O salário atual era R$ ${salario}.</p>
    <p>Com um aumento de ${porcent}%, o salário vai aumentar R$ ${aumento} no próximo mês.</p>
    <p>E a partir daí, ${nome} vai passar a ganhar R$ ${reajuste}.</p>
    `}
}