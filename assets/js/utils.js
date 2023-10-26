/*habilitando o botão que foi clicado*/
function togleTime(){
    let button = document.querySelectorAll('.modality');
    
    button.forEach(function(element){
        element.addEventListener('click', function(){
            button.forEach(function(element){
                element.classList.remove('active-button');
            });
            this.classList.add('active-button');
            let time = document.querySelector('#counter');
            let textButton = this.textContent;

            switch(textButton){
                case "Pomodoro":
                    time.textContent = "25:00";
                    break;
                case "Intervalo Curto":
                    time.textContent = "05:00";
                    break;
                case "Intervalo Longo":
                    time.textContent = "15:00";
                    break;
            }
            
       });
    });
}