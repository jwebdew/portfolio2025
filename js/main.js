
$(function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
 

    history.scrollRestoration = "auto";
    //첫번째 section의 item 가로 스크롤

    // let itemW = $('#newItems .item').outerWidth(true);
    // let itemLength = $('#newItems .item').length;

    // $('#newItems').width(itemW * itemLength);

    const horTextAnimation = () => {
        // FOR RESPONSIVE
       /*  const triggers = ScrollTrigger.getAll();
        triggers.forEach((trigger) => trigger.kill()); 이 코드로 인해 스크롤 줌이 실행이 안됨*/
        // TARGET ELEMENT
        const horText = document.querySelector(".newItem .list_wrap");
        if (horText) {
            // ANIMAATION
            console.log(horText.offsetWidth)
            console.log(window.innerWidth)
            gsap.to(horText, {
                x: () => -(horText.offsetWidth - window.innerWidth / 2),
                ease: "linear",
                scrollTrigger: {
                    trigger: ".newItem",
                    pin: true,
                    scrub: true,
                    invalidateOnRefresh: true,
                    end: () => `+=${horText.offsetWidth - window.innerWidth / 2}`
                },

            });



            // REFRESH
            ScrollTrigger.refresh();
        }
    };
    // RUN ANIMATION
    horTextAnimation();
    // RESPONSIVE
    window.addEventListener("resize", horTextAnimation);

    
    //-------------------------------------------------
    //포트폴리오
    //스크롤하다가 해당 콘텐츠에 멈춤
    // Timeline with ScrollTrigger
    gsap.timeline({
        scrollTrigger: {
            trigger: ".has-audio",
            start: "top top",
            end: "bottom top+=20%",
            scrub: true,
            pin: true,
            toggleActions: "restart none none reset",
            fastScrollEnd: true,
        }
    });



    /* 그래픽디자인 스와이퍼 슬라이드 */
    var swiper = new Swiper(".graphic_swiper", {
        slidesPerView: 'auto',
        spaceBetween: 36,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        /* autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }, */
    });


    //포트폴리오 탭메뉴
    let portfolioItem = document.querySelectorAll('.portfolio .item');
    let portfolioMenu = document.querySelectorAll('.portfolio .menu li');

    for(let i = 0; i < portfolioMenu.length; i++) {
        portfolioMenu[i].addEventListener('click', () => {
            portfolioMenu.forEach(portfolioMenu => {
                portfolioMenu.classList.remove('active');
            }) 
            portfolioMenu[i].classList.add('active');

            portfolioItem.forEach(portfolioItem => {
                portfolioItem.classList.remove('active');
            }) 
            portfolioItem[i].classList.add('active');
        });//portfolioMenu.click()
    }


    //팬시박스
     Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });

}) 