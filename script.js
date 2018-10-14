$('#switch').on('click', () => {
    if ($('#switch').prop('checked')) {
        $('.wrapper').addClass('dark');
    } else {
        $('.wrapper').removeClass('dark');
    }
})