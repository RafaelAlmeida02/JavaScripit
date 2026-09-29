function clicar() {
    var nome = window.prompt('Qual é o nome do aluno?')
    var primeira = Number(window.prompt(`Primeira nota de ${nome}:`).replace(',', '.'))
    var segunda = Number(window.prompt(`Segunda nota de ${nome}:`).replace(',', '.'))
    var res = document.getElementById('res')
    var media = (primeira + segunda) / 2

    /*
    média acima de 6 → APROVADO
    média entre 3 e 6 → RECUPERAÇÃO
    média menor que 3 → REPROVADO
    */

    var situacao = ''

    if (media > 6.0) {
        situacao = `Com a média acima de 6,0 o aluno está <span class="verde">APROVADO</span>`
    } else if (media >= 3.0) {
        situacao = `Com a média entre 3,0 e 6,0, o aluno está em <span class="laranja">RECUPERAÇÃO</span>`
    } else {
        situacao = `Com a média abaixo de 3,0 o aluno está <span class="vermelho">REPROVADO</span>`
    }

    res.innerHTML = 
    
    `
    <h1>Analisando a situação de ${nome}</h1>

    <p>Com as notas ${primeira} e ${segunda}, a <strong>média é ${media}.</strong></p>

    <p>${situacao}</p>
    `
}