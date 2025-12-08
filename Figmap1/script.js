
let seconds = 435;
function UpdateTimer(){
    const time = document.getElementById('time');
    const mins = String(Math.floor(seconds/60)).padStart(2,'0');
    const secs = String(seconds % 60).padStart(2,'0');
    time.textContent = `${mins}:${secs}`;
    if(seconds>0)
    seconds--;
}

UpdateTimer();
setInterval(UpdateTimer, 1000)


