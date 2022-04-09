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

    // intro
    const introTxt = new SplitType('.section1 .txt_hide', { types: 'words, chars', });

    gsap.fromTo(introTxt.chars,1,{
        opacity: 0,
        yPercent: 100
    },{
        opacity: 1,
        yPercent: 0,
        stagger:0.05
    })









    // const txt = gsap.timeline({})
    // txt.fromTo('.section1 .text_animation div', {
    //         y: 0,
    //         duration: 0.1,
    //         stagger: 1,
    //     },{
    //         y: -100,
    //         duration: 0.1,
    //         stagger: 1,
    //     }
    //      )

    const prdMotion = gsap.timeline({
        defaults:{
            duration:1,
        }
    })
    const prdTxt = new SplitType('.prd_item .txt_hide', { types: 'words, chars', });

    prdMotion.addLabel('m1')
    .fromTo(prdTxt.chars,{opacity:0, yPercent: 1},{opacity:1,yPercent: 0,stagger:0.05},'m1')
    .fromTo('.prd_item p',{opacity:0},{opacity:1},"m1+=0.5")
    .fromTo('.prd_item .img_container',{opacity:0,rotation:3},{opacity:1, rotation:0},"m1+=1")


    // var txtMotion = gsap.fromTo('.section2 .text_animation',{
    //     yPercent: 100,
    // },{
    //     yPercent: 0,
    //     stagger: 0.2
    // })
    
    ScrollTrigger.create({
        animation: prdMotion,
        trigger:".section2",
        start:"top 80%",
        markers: true
    })

    
   
    // 제이쿼리
    // $('.section5 .img_container').each(function(index, item){
    //     gsap.to(item, {
    //         scale: 0.8
    //     },{
    
    //         scrollTrigger:{
    //             trigger: item,
    //             start:"top 80%",
    //             markers: true,
    //         },
    
    //         scale: 1
    //     })
    // })

    // gsap 유틸스
    gsap.utils.toArray('.section5 .img_container').forEach(el => {
        gsap.fromTo(el,{
            scale:0.8,
            opacity:0,
            filter: 'blur(30px)'
        },{
            scrollTrigger:{
                trigger:el,
                start:"top 80%",
                markers:true,
            },
            scale:1,
            opacity: 1,
            filter: 'blur(0px)'
        })
    });



    $(document).on("click", ".navbar", function () {
        var hasOn = $('.menu_close').hasClass('hide')
        console.log(hasOn)
        if(hasOn){
            
            $('body').addClass('hidden')
            $('.menu_open').addClass('hide')
            $('.menu_close').removeClass('hide')  
            $('.nav_main').addClass('on')
           
        } else {
            $('body').removeClass('hidden')
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



      const prdTitle = new SplitType('.section3 h2 .txt_hide', { types: 'words, chars', });

      gsap.fromTo(prdTitle.chars,1,{
          opacity: 0,
          yPercent: 100
      },{

        scrollTrigger:{
            trigger:".section2",
            start:"top 80%",
            markers: true
        },
          opacity: 1,
          yPercent: 0,
          stagger:0.05
      })
})