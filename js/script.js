document.addEventListener('DOMContentLoaded', function(){


    const nav = document.querySelector('.nav')
    function addnavaddons() {

        if (window.scrollY >= 250){
            nav.classList.add('nav-add-addons')
        } else {
            nav.classList.remove('nav-add-addons')
        }
    
    }

        window.addEventListener('scroll', addnavaddons)
    })