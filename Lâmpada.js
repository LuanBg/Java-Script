//dom
const Lampada = document.querySelector('#Lampada')
const bt01 = document.querySelector('#Ligar')
const bt02 = document.querySelector('#Desligar')
const bt03 = document.querySelector('#Ligar')

//eventos
bt01.addEventListener('click', Ligar)
bt02.addEventListener('click', Desligar)
Lampada.addEventListener('dblclick', Quebrar)

//funcoes
function Ligar() {
    Lampada.src = 'images/lampada acessa.jpg'
}
function Desligar() {
    Lampada.src = 'images/lampada apagada.jpg'
}
function Quebrar() {
    Lampada.src = 'images/lampada quebrada.jpg'
}
