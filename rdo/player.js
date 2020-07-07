$('#play').on('click', function() {
    $('#audio1').trigger('play');
    $('body').addClass('play');
    $('body').removeClass('pause');
});

$('#pause').on('click', function() {
    $('#audio1').trigger('pause');
    $('body').addClass('pause');
    $('body').removeClass('play');
});

$('.rdo').on('click', function() {
    $('#audio1').attr('src', $(this).data('url')).trigger('play');
    $('.nav-list button.active').removeClass('active');
    $(this).addClass('active');
    $('body').removeClass('pause');
    $('body').removeClass('play');
});
