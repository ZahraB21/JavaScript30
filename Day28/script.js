const speed = document.querySelector('.speed');
        const bar = document.querySelector('.speed-bar');
        const video = document.querySelector('video');

        function handleMove(e){
            const y = e.pageY - this.offsetTop;
            const min = 0.4;
            const max = 4;
            const percent = y / this.offsetTop ;
            const height = Math.round(percent * 100);
            const playbackRate = percent * (max - min) + min;
            bar.style.height = height + '%';
            bar.textContent = playbackRate.toFixed(2) + 'x';

            video.playbackRate = playbackRate;
        }

        speed.addEventListener('mousemove', handleMove);