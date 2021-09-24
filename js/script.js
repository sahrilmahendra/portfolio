// event pada saat link diklik
$('.page-scroll').on('click', function(e){
    // ambil isi href
    const href = $(this).attr('href');
    // tangkap elemen yang diklik
    const elemenHref = $(href);
    
    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenHref.offset().top - 50
    }, 1250, 'swing');

    e.preventDefault();
});


// parallax
// about
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function(){
    const windowScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron h1').css({
        'transform' : 'translate(0px,' + windowScroll/4 + '%)'
    });

    $('.jumbotron img').css({
        'transform' : 'translate(0px,' + windowScroll/6 + '%)'
    });

    $('.jumbotron h2').css({
        'transform' : 'translate(0px,' + windowScroll/1.3 + '%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px,' + windowScroll/1.3 + '%)'
    });


    // portfolio
    if(windowScroll > $('.portfolio').offset().top - 250){
           $('.portfolio .thumbnail').each(function (i) {
                setTimeout(function(){
                    $('.portfolio .thumbnail').eq(i).addClass('muncul');
                }, 300  * i);       
           });
    }
});