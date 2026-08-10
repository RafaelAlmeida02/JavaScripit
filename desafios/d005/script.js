function clicar() {
    var metros = Number(window.prompt(`Digite uma distância em metros`).replace(',','.')) // o replace é um aprendizado novo que troca a virgula pelo ponto somente no javascript interno, então o usuario pode colocar virgula normalmente.
    
    var km = metros / 1000
    var hm = metros / 100
    var dam = metros / 10
    var dm = metros * 10
    var cm = metros * 100
    var mm = metros * 1000
    
    var res = window.document.getElementById('res')
    
    res.innerHTML = `A conversão da medida ${metros} metros(m) para outros multiplos é: 

    <p>
        ${km}km <br>
        ${hm}hm <br>
        ${dam}dam <br>
        ${dm}dm <br>
        ${cm}cm <br>
        ${mm}mm <br>
    </p>
    `}