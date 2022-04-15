$(function(){

    $(window).scroll(function () {
        var curr = $(window).scrollTop()
        if (curr > 0) {
            $('header').addClass('hide')
        } else {
            $('header').removeClass('hide')
        }
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

    if (matchMedia("screen and (max-width: 767px)").matches) 
         {var slide = new Swiper(".slide", {

        slidesPerView: '2',
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
    })}
        else { var slide = new Swiper(".slide", {

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
        }) }


    //flip
    gsap.registerPlugin(Flip);
    const squares = gsap.utils.toArray(".txt");
 
    function doFlip() {
    const state = Flip.getState(squares);
    swap(squares);
    Flip.from(state, {duration: 2, ease: "power1.inOut"});
    }

    function swap([a, b]) {
     a.parentNode.children[0] === a ? a.parentNode.appendChild(a) : a.parentNode.appendChild(b);
    }

    document.addEventListener("scroll", doFlip);



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
            },
            scale:1,
            opacity: 1,
            filter: 'blur(0px)'
        })
    });


      const prdTitle = new SplitType('.section3 h2 .txt_hide', { types: 'words, chars', });

      gsap.fromTo(prdTitle.chars,1,{
          opacity: 0,
          yPercent: 100
      },{

        scrollTrigger:{
            trigger:".section2",
            start:"top 80%",
        },
          opacity: 1,
          yPercent: 0,
          stagger:0.05
      })
})