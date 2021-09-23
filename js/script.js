// event pada saat link diklik
$('.page-scroll').on('click', function(e){
    // ambil isi href
    let href = $(this).attr('href');
    // tangkap elemen yang diklik
    let elemenHref = $(href);
    
    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenHref.offset().top - 50
    }, 1250, 'swing');

    e.preventDefault();
});