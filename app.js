const keys = Array.from(document.querySelectorAll('.key'));



function playSound(e){

    const audio = document.querySelector(`audio[key="${e.key}"]`);

    const key = document.querySelector(`div[key="${e.key}"]`);

    //Si la touche n'est pas paramétrée alors stop
    if (!audio) return;

    //ajout d'une class

    key.classList.add('playing');

    //Suppression du temps entre deux clics
    audio.currentTime = 0 ;

    audio.play();
}

//On supprime la transition
function removeTransition(e){
    e.target.classList.remove('playing');
}
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown', playSound);