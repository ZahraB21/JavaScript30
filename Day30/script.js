const scoreBoard = document.querySelector('.score');
        const holes = document.querySelectorAll('.hole');
        const moles = document.querySelectorAll('.mole');
        let lastHole;
        let timeUp = false;
        let score;

        function randomTime(min, max){
            const time = Math.floor( Math.random() * (max - min));
            return time;
        }

        function randomHole(){
            const idx = Math.floor(Math.random() * holes.length);
            const hole = holes[idx];
            if ( hole === lastHole) {
                console.log('Same hole. Looking for another one');
                return randomHole(holes);
            }
         
            lastHole = hole;
            return hole;
        }

        function peep(){
            const time = randomTime(200, 1000);
            const hole = randomHole();
            hole.classList.add('up');
            setTimeout( () => {
                hole.classList.remove('up');
                if ( !timeUp ){
                    peep();
                }
            }, time) ;
        }

        function startGame(e){
            timeUp = false;
            score = 0;
            peep();
            setTimeout( () => timeUp = true, 10000);
        }

        function bonk(e) {
            if( !e.isTrusted) return; // cheater!
            score++;
            this.parentNode.classList.remove('up');
            scoreBoard.textContent = score;
        }

        moles.forEach( mole => mole.addEventListener('click', bonk));