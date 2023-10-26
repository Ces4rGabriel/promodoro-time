let counter = document.querySelector('#counter');

function clock(){
    let audioClock = new Audio('assets/sounds/485486__volkbutphan__button-v03.ogg');

    function updateCounter() {
        if (seconds == 0) {
            if (minutes > 0) {
                audioClock.play();
                minutes--;
                seconds = 59;
            } else {
                clearInterval(timer); // Parar o contador quando o tempo acabar
                let audio = new Audio('assets/sounds/clock-alarm-8761.mp3');
                audio.play();
            }
        } else {
            audioClock.play();

            seconds--;
        }
    
        // Formate os valores de minutos e segundos com dois dígitos
        const formattedMinutes = (minutes < 10 ? '0' : '') + minutes;
        const formattedSeconds = (seconds < 10 ? '0' : '') + seconds;
    
        counter.textContent = formattedMinutes + ':' + formattedSeconds;
    }
    
    // Iniciar o contador a cada segundo (1000 milissegundos)
    const counter = document.getElementById('counter');
    let minutes = counter.textContent.split(':')[0];
    let seconds = counter.textContent.split(':')[1];
 
    const timer = setInterval(updateCounter, 1000);
        
}

