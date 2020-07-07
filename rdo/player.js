$('#play').on('click', function() {
    $('#mediaPlayer').trigger('play');
    $('body').addClass('play');
    $('body').removeClass('pause');
});

$('#pause').on('click', function() {
    $('#mediaPlayer').trigger('pause');
    $('body').addClass('pause');
    $('body').removeClass('play');
});

$('.rdo').on('click', function() {
    $('#mediaPlayer source').attr('src', $(this).data('url'));
    $('#mediaPlayer').trigger('play');
    $('.nav-list button.active').removeClass('active');
    $(this).addClass('active');
    $('body').removeClass('pause');
    $('body').removeClass('play');
});
