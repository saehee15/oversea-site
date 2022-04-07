$(function(){
    //cursor
    $('body').mousemove(function(e){
        xVal = e.pageX - $('.cursor').width()/2;
        yVal = e.pageY- $('.cursor').height()/2;

        gsap.to('.cursor',{
            x: xVal,
            y: yVal
        })
    })

    $('.navbar').click(function(){
        ('.nav_main').css("opacity", "1")
    })

    
    $('.btn > div').click(function () { 
        var hasOn = $(this).hasClass('on')

        if(hasOn){
            $(this).removeClass('on')
            $(this).siblings().addClass('on')
            $('.message').css("opacity", "1")
           
        } else {
            $(this).addClass('on')
            $(this).siblings().removeClass('on')
        }
    });

})