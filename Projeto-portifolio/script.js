const text = "Olá! Sou a Erika Mendes, graduanda em Jogos Digitais pela Universidade Estácio de Sá. Atualmente, trabalho como Professora de programação para crianças e adolescentes em uma plataforma online. Minha jornada acadêmica tem me proporcionado uma sólida base em design, lógica de programação e didática. Através de cursos adicionais, tenho aprofundado meus conhecimentos em desenvolvimento web e de jogos. Meu objetivo é encontrar oportunidades de trabalho que me incentivem a colocar em prática toda a paixão e conhecimento que adquiri. Estou empolgada em contribuir para projetos inovadores na área de Desenvolvimento Web e Jogos Digitais. Ao clicar nos certificados, projetos e nos ícones das redes sociais, você poderá acessá-los. Espero poder compartilhar meu entusiasmo e habilidades em projetos futuros. Estou sempre em busca de aprender e crescer na indústria de jogos e desenvolvimento web. Sinta-se à vontade para entrar em contato e conhecer mais sobre meu trabalho!";
const speed = 50; 

let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.querySelector('.sobre-mim p').textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();


const profileImg = document.querySelector('.profile img');
const somDisco = document.getElementById('scratchSound');

profileImg.addEventListener('mouseover', () => {
  profileImg.classList.add('rotacionar');
  somDisco.currentTime = 0; 
  somDisco.play();
});

profileImg.addEventListener('mouseout', () => {
  profileImg.classList.remove('rotacionar');
});

let currentPosition = 0;
const certificadosPorVez = 4;
const width = document.querySelector('.certificado').offsetWidth + 20;

function moveCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const certificados = carousel.querySelectorAll('.certificado');

    let newPosition = currentPosition + direction * width * certificadosPorVez;

    if (newPosition < 0) {
        newPosition = 0;
    } else if (newPosition > (certificados.length - certificadosPorVez) * width) {
        newPosition = (certificados.length - certificadosPorVez) * width;
    }

    currentPosition = newPosition;
    carousel.style.transform = `translateX(-${currentPosition}px)`;

    
    const arrowLeft = document.querySelector('.arrow.prev');
    if (currentPosition === 0) {
        arrowLeft.style.display = 'none';
    } else {
        arrowLeft.style.display = 'block';
    }

   
    document.querySelector('.arrow.next').style.display = 'block';
}
