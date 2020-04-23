$(document).ready(function(){
    $('.categoriaslista .categoriaVideo[category="todo"]').addClass('ct_video_active');
    $('.categoriaVideo').click(function(){
        var catVideo = $(this).attr('category');
        console.log(catVideo);

        $('.categoriaVideo').removeClass('ct_video_active');
        $(this).addClass('ct_video_active');

        $('.video').hide();
        $('.video[category="'+catVideo+'"]').show();
    });
    $('.categoriaVideo[category="todo"]').click(function(){
        $('.video').show();
    });
});
