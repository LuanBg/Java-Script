//dom
const jog = document.querySelector('#jog');
const bt01 = document.querySelector('#avatar')
const bt02 = document.querySelector('#velozes')
const bt03 = document.querySelector('#barbie')
const bt04 = document.querySelector('#aranha')
const descricao = document.querySelector('#descricao')

bt01.addEventListener('click', avatar)
bt02.addEventListener('click', velozes)
bt03.addEventListener('click', barbie)
bt04.addEventListener('click', aranha)

//funções

function avatar() {
    jog.src ='images/image002-sok5ezrw75nq.webp'
    descricao.innerHTML = "<strong>Avatar: O Caminho da Água</strong><br> Avatar acontece no ano 2154, com a Terra em condições difíceis após a contínua destruição da natureza pelos humanos. Com a exploração espacial em estágios avançados, os cientistas descobrem uma exo-Lua chamada de Pandora. Este ambiente é habitado por criaturas grandes com a pele azulada.";
}

function velozes() {
    jog.src = 'images/0156803.jpg'
    descricao.innerHTML = "<strong>Velozes e Furiosos 10</strong><br> Alimentada pela vingança, uma ameaça terrível emerge das sombras do passado na forma de Dante (Jason Momoa), para destruir o mundo de Toretto e destruir tudo - e todos - que ele ama. Ele então, comandando novamente a equipe de corredores mais conhecida do mundo, encara mais uma difícil missão sobre quatro rodas.";
}

function barbie() {
    jog.src = 'images/4338569.webp'
    descricao.innerHTML = "<strong>Barbie e o Castelo de Diamante</strong><br> Liana e Alexa são melhores amigas e vão viver uma incrível aventura. Elas precisam descobrir onde está escondido o castelo de diamante para poderem libertar a jovem Melody, que vive presa dentro de um espelho, e ainda precisarão se defender da malvada Lydia e seu dragão.";
}
function aranha() {
    jog.src = 'images/Spider-Man_No_Way_Home_poster.jpg'
    descricao.innerHTML = "<strong>Spider-Man: No Way Home</strong><br> A sinopse do longa diz: O relacionamento entre Peter Parker e Mary Jane parece estar dando certo, mas outros problemas começam a surgir. A roupa de Homem-Aranha torna-se preta e acaba controlando Peter - apesar de aumentar seus poderes, ela revela e amplia o lado obscuro de sua personalidade.";
}
