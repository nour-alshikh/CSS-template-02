$('.landing .icon').click(function(){
    $(window).scrollTop(0)
})

$(window).scroll(function(){
    if($(window).scrollTop() > 120 ){
        $('.landing .icon').css('display', 'flex')
    }else{
        $('.landing .icon').css('display', 'none')
    }
})

$(document).ready(function(){
    $('.loading .loader').fadeOut(1500, function(){
        $(window).scrollTop(0)
        $('body').css('overflow', 'auto')
        $('.loading').slideUp(800,function(){
            $('.loading').remove()
        })
    })
})