function playSound(event){
    console.log(event.key, event.keyCode);
    // is there an audio tag that has the data-key of keycode
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
    console.log(audio);
    if(!audio){
        // stop
        return
    }
    audio.currentTime = 0;
    audio.play();
    console.log(key);
    
    key.classList.add('playing');
    // now remove
}

function removeTransition(event){
    if(event.propertyName !== 'transform'){ return };
    console.log(event.propertyName);
    console.log(this);
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
console.log(keys);
keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition)
})

window.addEventListener('keydown', playSound)