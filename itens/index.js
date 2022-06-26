function getData() {
  const hora = new Date().getHours();
  const minuto = new Date().getMinutes();
  const segundo = new Date().getSeconds();

  document.querySelector('#hora').innerText = hora;
  document.querySelector('#minuto').innerText = minuto;
  document.querySelector('#segundo').innerText = segundo;
}
setInterval(getData, 100);
