$(function(){
    // cursor
    $('body').mousemove(function(e){
        xVal = e.pageX - $('.cursor').width()/2;
        yVal = e.pageY- $('.cursor').height()/2;

        gsap.to('.cursor',{
            x: xVal,
            y: yVal
        })
    })

    const txt = gsap.timeline({})
    txt.fromTo('.section1 .text_animation div', {
            y: 0,
            duration: 0.1,
            stagger: 1,
        },{
            y: -100,
            duration: 0.1,
            stagger: 1,
        }
         )



    var txtMotion = gsap.fromTo('.section2 .text_animation',{
        yPercent: 100,
    },{
        yPercent: 0,
        stagger: 0.2
    })
    
    ScrollTrigger.create({
        trigger:".section2",
        start:"top 100%",
        onEnter:function(){
            $('.img_container').addClass('on')
            txtMotion
        }
    })

    $(document).on("click", ".navbar", function () {
        var hasOn = $('.menu_close').hasClass('hide')
        console.log(hasOn)
        if(hasOn){
            $('.menu_open').addClass('hide')
            $('.menu_close').removeClass('hide')  
            $('.nav_main').addClass('on')
           
        } else {
            $('.menu_open').removeClass('hide')
            $('.menu_close').addClass('hide')
            $('.nav_main').removeClass('on')   
        }
      });

    $(document).on("click", ".btn div", function () {
        var hasOn = $('.reservation_btn').hasClass('on')
        console.log(hasOn)
        if(hasOn){
            $('.reservation_btn').removeClass('on')
            $('.close_btn').addClass('on')  
            $('.message').addClass('on')
           
        } else {
            $('.reservation_btn').addClass('on')
            $('.close_btn').removeClass('on')
            $('.message').removeClass('on')
            
        }
      });
})