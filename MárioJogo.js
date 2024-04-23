const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')

const pulomario = () => {
    mario.classList.add('pulomario');

    setTimeout(() => {
        mario.classList.remove('pulomario');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);
    
    if(canoPosition <= 85 && canoPosition > 0 && marioPosition < 80) {

        cano.style.animation ='none';
        cano.style.left = `${canoPosition}px`;

        mario.style.animation ='none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '60px'
        mario.style.marginLeft = '20px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', pulomario)
