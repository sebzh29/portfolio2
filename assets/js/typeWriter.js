// Animation écriture

const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
})

typewriter
    .pauseFor(1800)
    .changeDelay(20)

    .typeString('Je suis Développeur ')
    .pauseFor(1000)
    .typeString('<span style="color: #d82c2e;">ssy</span> !')
    .pauseFor(1000)
    .deleteChars(5)
    .typeString('<span style="color: chartreuse;"> Symfony</span> !')
    .pauseFor(1000)
    .deleteChars(9)
    .typeString('<span style="color: fuchsia;"> Php</span> !')
    .pauseFor(1000)
    .deleteChars(5)
    .typeString('<span style="color: yellow;"> Web</span> !')
    .start()