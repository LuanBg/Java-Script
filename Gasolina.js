//dom
const distancia = document.querySelector('#distancia')
const rendimento = document.querySelector('#rendimento')
const preco = document.querySelector('#preco')
const btn = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')

//evento
btn.addEventListener('click',()=>{

    n1=Number(distancia.value)
    n2=Number(rendimento.value)
    n3=Number(preco.value)

    total = (n1/n2) *n3;

    resultado.textContent = `Total: R$${total.toFixed(2)} reais`
})
