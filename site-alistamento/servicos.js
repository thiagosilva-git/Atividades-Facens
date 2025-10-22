
        function closeMobileMenu(){ 
            const menu = document.getElementById('mobileMenu');
            if(menu) menu.classList.remove('open');
        }
        document.getElementById('mobileMenuBtn')?.addEventListener('click', function(){
            document.getElementById('mobileMenu')?.classList.toggle('open');
        });
    