function getData(){
    let hora = new Date().getHours()
    let minuto = new Date().getMinutes()
    let segundo = new Date().getSeconds()

    document.querySelector('#h').innerHTML = hora
    document.querySelector('#m').innerHTML = minuto
    document.querySelector('#s').innerHTML = segundo
}
var intervalo = setInterval(getData, 1000)