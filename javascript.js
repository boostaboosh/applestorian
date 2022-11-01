audio = new Audio("./audios/trimmed on caligraphy - One of the Greatest Speeches Ever _ Steve Jobs-[AudioTrimmer.com].mp3");
function playMusic(){
    if( audio.paused ) {
    audio.play();
    }
}

let progressSection = document.querySelector(".progress-section");
let progressBar = document.querySelector(".progress-bar");
let progressNum = document. querySelector(".progress-num");

let x, y;

window.addEventListener('mousemove', (e) =>{
    x = e.clientX;
    y = e.clientY;
})

function updateProgressBar(){
    progressSection.style.transform = `translate(${x}px, ${y}px)`;
    progressBar.style.height = `${getScrollPercentage()}%`;
    progressNum.innerText = `${Math.ceil(getScrollPercentage())}%`;
    requestAnimationFrame(updateProgressBar);
}

function getScrollPercentage(){
    return ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100);
}

updateProgressBar();