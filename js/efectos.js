$(document).ready(function(){

    //Efecto Menu 
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 1000 + (index * 500));
    });

    //Efecto Header
    if( $(window).width() > 800 ){ //Solo se ejecutará en una pantalla mayor a 800px
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });
        
        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);

    }

    //Scroll Elementos Menu

    var acercaDe = $('#acerca-de').offset().top,
        menu = 

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 380
        }, 500);
    })
});