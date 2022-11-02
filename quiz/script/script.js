audio = new Audio("../audios/tada.mp3");
function playMusic(){
    if(audio.paused) {
        audio.play();
    }
}

wrongAudio = new Audio ("../audios/YouKnowTheRules.mp3")
function playMusicWrong(){
    if(wrongAudio.paused) {
        wrongAudio.play();
    }
}

function showMenu(){
    let menu = document.getElementById('dropdown-menu');
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }else {
        menu.style.display = 'block';                    
    }
}

function closeMenu(){
    let menu = document.getElementById('dropdown-menu');
    menu.style.display = 'none';
}

document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[dropdown-button]");
    if (!isDropdownButton) {
        closeMenu();
        return;
    }
})