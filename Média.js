//dom
const nome = document.querySelector('#nome')
const uni1 = document.querySelector('#uni1')
const uni2 = document.querySelector('#uni2')
const uni3 = document.querySelector('#uni3')
const uni4 = document.querySelector('#uni4')
const btn = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')

//evento
btn.addEventListener('click',()=>{

    n1=Number(uni1.value)
    n2=Number(uni2.value)
    n3=Number(uni3.value)
    n4=Number(uni4.value)

    media = (n1+n2+n3+n4)/4

    resultado.textContent = `Sr(a) ${nome.value} sua média final foi ${media.toFixed()}`

})
