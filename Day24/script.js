const nav = document.querySelector('#main');
        let topOfNav = nav.offsetTop;
        
        function fixNav(){
            console.log(topOfNav, window.scrollY);
            if ( window.scrollY >= topOfNav ){
                document.body.classList.add('fixed-nav');
                document.body.style.paddingTop = nav.offsetHeight + 'px';
                console.log(window.scrollY);
            } else {
                document.body.classList.remove('fixed-nav');
                document.body.style.paddingTop = 0;
            }
        }

        window.addEventListener('scroll', fixNav);