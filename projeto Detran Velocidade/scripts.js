function calcular () {
var txtv = window.document.getElementById('txtvel')
var Resultado = window.document.querySelector('div#Resultado')
var vel = Number(txtv.value)
Resultado.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} KM/h </strong></p>`
if (vel > 60) {
    Resultado.innerHTML += `<p style=color:red>Você está <strong>MULTADO</strong> pexcesso de velocidade!`
}
Resultado.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}
   