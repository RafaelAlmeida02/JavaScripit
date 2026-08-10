function clicar() {
    var celsius = Number(window.prompt(`Digite uma temperatura em °C (Celsius)`).replace(',','.'))

    var kelvin = celsius + 273.15
    var fehrenheit = (celsius * 9 / 5) + 32 

    var res = window.document.querySelector(`div#res`)

    res.innerHTML = `
        <p>A temperatura de ${celsius}°C, corresponde a...</p>
    

        ${kelvin}°K (Kelvin) <br>
        ${fehrenheit}°F (Fehrenheit)

    `}