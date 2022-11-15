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

$(window).scroll(function(){
    let servicesOffset = $('.services').offset().top
    if ($(window).scrollTop() > servicesOffset - 500){
        $('.services .container').slideDown(1000)
    }else{
        $('.services .container').css('display', 'none')
    }
})


$(window).scroll(function () {
    let portfolioOffset = $('.portfolio').offset().top
    if ($(window).scrollTop() > portfolioOffset - 500) {
        $('.portfolio .cont').slideDown(1000)
    } else {
        $('.portfolio .cont').css('display', 'none')
    }
})

$(window).scroll(function () {
    let aboutOffset = $('.about').offset().top
    if ($(window).scrollTop() > aboutOffset - 500) {
        $('.about .cont').slideDown(1000)
    } else {
        $('.about .cont').css('display', 'none')
    }
})