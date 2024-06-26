$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Engineer", "Developer","Business Analyst","Data Analyst", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Business Analyst","Data Analyst","Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// pdf download

document.getElementById('cv').addEventListener('click',function(){
    var pdfurl='cv/Bhope Chaitanya CV.pdf';
    var link=document.createElement('a');
    link.href=pdfurl;
    link.download='Chaitanya-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// adding links to projects

function redirectToLink(){
    window.open('https://github.com/chaitanyabhope/AI','_blank')
}
function redirectToLink1(){
    window.open('https://chaitanyabhope.github.io/Grocery-store-Website/','_blank')
}

function redirectToLink2(){
    window.open('#','_blank')
}

function redirectToLink3(){
    window.open('https://github.com/chaitanyabhope/Smart-Face-recognition-system','_blank')
}
function redirectToLink4(){
    window.open('https://github.com/chaitanyabhope/hand-project','_blank')
}
function redirectToLink5(){
    window.open('https://github.com/chaitanyabhope/hand-project','_blank')
}
function redirectToLink6(){
    window.open('https://github.com/chaitanyabhope/hand-gesture-volume-controller','_blank')
}