$(function(){

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


    var slide = new Swiper(".slide", {

        slidesPerView: '3',
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 0,
            stretch: 10,
            slideShadows: false,
          },
        speed: 1000,
        loop: true,
        autoplay: true,
        centeredSlides: true,

        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        //     renderBullet: function (index, className) {
        //       return '<span class="' + className + '">' + "</span>";
        // }}

        
    });

    $(document).ready(function() {
        var containers = $('.container');
    
        if (containers.length) {
            containers.each(function() {
                var container = $(this);
    
                // Support small text - copy to fill screen width
                if (container.find('.scrolling-text').outerWidth() < $(window).width()) {
                    var windowToScrolltextRatio = Math.round($(window).width() / container.find('.scrolling-text').outerWidth()),
                        scrollTextContent = container.find('.scrolling-text .scrolling-text-content').text(),
                        newScrollText = '';
                    for (var i = 0; i < windowToScrolltextRatio; i++) {
                        newScrollText += ' ' + scrollTextContent;
                    }
                    container.find('.scrolling-text .scrolling-text-content').text(newScrollText);
                }
    
                // Init variables and config
                var scrollingText = container.find('.scrolling-text'),
                    scrollingTextWidth = scrollingText.outerWidth(),
                    scrollingTextHeight = scrollingText.outerHeight(true),
                    startLetterIndent = parseInt(scrollingText.find('.scrolling-text-content').css('font-size'), 10) / 4.8,
                    startLetterIndent = Math.round(startLetterIndent),
                    scrollAmountBoundary = Math.abs($(window).width() - scrollingTextWidth),
                    transformAmount = 0,
                    leftBound = 0,
                    rightBound = scrollAmountBoundary,
                    transformDirection = container.hasClass('left-to-right') ? -1 : 1,
                    transformSpeed = 200;
    
                // Read transform speed
                if (container.attr('speed')) {
                    transformSpeed = container.attr('speed');
                }
            
                // Make scrolling text copy for scrolling infinity
                container.append(scrollingText.clone().addClass('scrolling-text-copy'));
                container.find('.scrolling-text').css({'position': 'absolute', 'left': 0});
                container.css('height', scrollingTextHeight);
            
                var getActiveScrollingText = function(direction) {
                    var firstScrollingText = container.find('.scrolling-text:nth-child(1)');
                    var secondScrollingText = container.find('.scrolling-text:nth-child(2)');
            
                    var firstScrollingTextLeft = parseInt(container.find('.scrolling-text:nth-child(1)').css("left"), 10);
                    var secondScrollingTextLeft = parseInt(container.find('.scrolling-text:nth-child(2)').css("left"), 10);
            
                    if (direction === 'left') {
                        return firstScrollingTextLeft < secondScrollingTextLeft ? secondScrollingText : firstScrollingText;
                    } else if (direction === 'right') {
                        return firstScrollingTextLeft > secondScrollingTextLeft ? secondScrollingText : firstScrollingText;
                    }
                }
            
                $(window).on('wheel', function(e) {
                    var delta = e.originalEvent.deltaY;
                    
                    if (delta > 0) {
                        // going down
                        transformAmount += transformSpeed * transformDirection;
                        container.find('.scrolling-text .scrolling-text-content').css('transform', 'skewX(10deg)');
                    }
                    else {
                        transformAmount -= transformSpeed * transformDirection;
                        container.find('.scrolling-text .scrolling-text-content').css('transform', 'skewX(-10deg)');
                    }
                    setTimeout(function(){
                        container.find('.scrolling-text').css('transform', 'translate3d('+ transformAmount * -1 +'px, 0, 0)');
                    }, 10);
                    setTimeout(function() {
                        container.find('.scrolling-text .scrolling-text-content').css('transform', 'skewX(0)');
                    }, 500)
            
                    // Boundaries
                    if (transformAmount < leftBound) {
                        var activeText = getActiveScrollingText('left');
                        activeText.css({'left': Math.round(leftBound - scrollingTextWidth - startLetterIndent) + 'px'});
                        leftBound = parseInt(activeText.css("left"), 10);
                        rightBound = leftBound + scrollingTextWidth + scrollAmountBoundary + startLetterIndent;
            
                    } else if (transformAmount > rightBound) {
                        var activeText = getActiveScrollingText('right');
                        activeText.css({'left': Math.round(rightBound + scrollingTextWidth - scrollAmountBoundary + startLetterIndent) + 'px'});
                        rightBound += scrollingTextWidth + startLetterIndent;
                        leftBound = rightBound - scrollingTextWidth - scrollAmountBoundary - startLetterIndent;
                    }
                });
            })
        }
    });



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

    ScrollTrigger.create({
        animation: prdMotion,
        trigger:".section2",
        start:"top 80%",
        markers: true
    })

    

    const motion = gsap.timeline({
        defaults:{
            duration:1,
        }
    })
    const txt = new SplitType('.section4 .txt_hide', { types: 'words, chars', });

    motion.fromTo(txt.chars,{opacity:0, yPercent: 1},{opacity:1,yPercent: 0,stagger:0.05})


    ScrollTrigger.create({
        animation: motion,
        trigger:".section4",
        start:"top 80%",
        markers: true
    })
   
   



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