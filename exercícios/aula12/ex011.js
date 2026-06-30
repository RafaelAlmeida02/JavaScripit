var idade = prompt('Qual a sua idade?')
if (idade < 16) {
    console.log('Não vota')
} else if (idade >= 16 && idade < 18 || idade > 65) {
        console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}

/*explicação do código

se a idade for menor que 16, então o console irá mostrar "Não vota"

se a idade for maior ou igual a 16 e menor que 18, ou se a idade for maior que 65, então o console irá mostrar "Voto opcional"

se a idade for maior ou igual a 18 e menor ou igual a 65, então o console irá mostrar "Voto obrigatório"
*/
