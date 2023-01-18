(function () {
  let Agency = {
    //메서드 (함수)
    init: function () {
      this.parallax();
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.section4();
      this.footer();
    },
    parallax: function () {
      const scrollEvent = {
        init: function () {
          this.header();
          this.section2();
          this.section3();
        },
        header: function () {
          let newScr = $(window).scrollTop();
          let oldScr = newScr;
          let result = "";
          $(window).scroll(function () {
            newScr = $(window).scrollTop();
            // console.log('newScr:'+newScr, 'oldScr' + oldScr);
            result = newScr - oldScr > 0 ? "DOWN" : "UP";
            if (result == "DOWN") {
              $("#header").removeClass("addParallaxDown72");
              $("#header").removeClass("addParallaxDown60");
              $("#header").addClass("addParalallaxUp");
            }
            if (result == "UP") {
              $("#header").removeClass("addParallaxDown72");
              $("#header").removeClass("addParalallaxUp");
              $("#header").addClass("addParallaxDown60");
              $("#header .header_inner").css("height", "60px");

              if ($(window).scrollTop() == 0) {
                $("#header").removeClass("addParallaxDown60");
                $("#header").addClass("addParallaxDown72");
                $("#header .header_inner").css("height", "72px");
              }
            }
            oldScr = newScr;
          });
        },
        section2: function () {
          const titT = $(".section2 .title").offset().top;
          let winH = $(window).height();
          let titTop = titT - winH;
          $(window).scroll(function () {
            if ($(window).scrollTop() > titTop) {
              $(".section2").addClass("addParallax");
            }
            if ($(window).scrollTop() == 0) {
              $(".section2").removeClass("addParallax");
            }
          });
        },
        section3: function () {
          const titT = $(".section3 .title").offset().top;
          let winH = $(window).height();
          let titTop = titT - winH;
          $(window).scroll(function () {
            if ($(window).scrollTop() > titTop) {
              $(".section3").addClass("addParallax");
            }
            if ($(window).scrollTop() == 0) {
              $(".section3").removeClass("addParallax");
            }
          });
        },
      };
      scrollEvent.init();
    },
    header: function () {
      //삼선메뉴바클릭이벤트
      $(".fa-bars").click(function () {
        $(".mobile-nav").slideToggle();
      });

      const container = $("#header .container");
      const mainBtn = $("#nav>ul>li>a");
      const sub = $(".sub");
      const subBtn = $(".sub-btn");
      const subSub = $(".sub-sub");

      mainBtn.on({
        mouseenter: function () {
          //원뎁스 호버 이벤트
          sub.stop().fadeOut(0); //리셋
          $(this).next().stop().fadeIn(300);
        },
      });
      subBtn.on({
        mouseenter: function () {
          //투뎁스 호버 이벤트
          subSub.stop().fadeOut(0); //리셋
          $(this).next().stop().fadeIn(300);
        },
      });
      container.on({
        mouseleave: function () {
          //메뉴 사라지는거
          sub.stop().fadeOut(300);
          subSub.stop().fadeOut(300);
        },
      });
    },
    section1: function () {
      $(window).resize(function () {
        let imgW = $(".slide-container>ul>li");
        imgW.each(function () {
          let thisImgW = $(this).find("img").width();
          // console.log(thisImgW);
          if (thisImgW < 1920) {
            $(".section1").height(thisImgW * 0.46); //화면줄일때 여백없애는 비율 최적화 공식 (무슨개소린지해석불가능)
          }
        });
      });

      // --------------------------------SLIDE----------------------------------
      const imgBanner = $(".slide-container>ul>li");
      let seIn;
      let current = 0;
      mainSlide();
      function mainSlide() {
        seIn = setInterval(function () {
          prev = imgBanner.eq(current);
          move(prev, 0, "-100%");
          current++;
          if (current == imgBanner.size()) {
            current = 0;
          }
          next = imgBanner.eq(current);
          move(next, "100%", 0);
        }, 2000);
      }
      function move(tg, start, end) {
        tg.css("left", start).stop().animate({ left: end }, 500);
      }

      $(".slide-container").on({
        mouseenter: function () {
          clearInterval(seIn);
        },
        mouseleave: function () {
          mainSlide();
        },
      });
    },
    section2: function () {},
    section3: function () {},
    section4: function () {
      let no=0;
      //갤러리 이벤트
      //클릭 이벤트
      //all
      //hide
      //show:20,23,22,21,24,16,26,19
      

      let winW=$(window).width();
      webResizeFn();//시작시실행
      $(window).resize(function(){webResizeFn()})//리사이즈시 실행
      function webResizeFn(){
        $('.gallery-btn').eq(0).on({
          click:function(){
            no=0;
            gallery();
          }
        });
        //hide 20,22,19
        //show 23,21,24,16,26
        $('.gallery-btn').eq(1).on({
          click:function(){
            no=1;
            gallery();
          }
        });
        //hide 20,19
        //show 23,22,21,24,16,26
        $('.gallery-btn').eq(2).on({
          click:function(){
            no=2;
            gallery();
          }
        });
        $('.gallery-btn').eq(3).on({
          click:function(){
            no=3;
            gallery();
          }
        });
        $('.gallery-btn').eq(4).on({
          click:function(){
            no=4;
            gallery();
          }
        });
        $('.gallery-btn').eq(5).on({
          click:function(){
            no=5;
            gallery();
          }
        });
        winW=$(window).width();
        if(winW>=1427){
          $('.gallery').css('height','calc(1903px/4*0.8125*2)');
          function gallery(){
            if(no==0){
              $('.gallery li').eq(0).show().animate({top: 1903/4*0.8125*0, left:1903/4*0},300);
              $('.gallery li').eq(1).show().animate({top: 1903/4*0.8125*0, left:1903/4*1},300);
              $('.gallery li').eq(2).show().animate({top: 1903/4*0.8125*0, left:1903/4*2},300);
              $('.gallery li').eq(3).show().animate({top: 1903/4*0.8125*0, left:1903/4*3},300);
              $('.gallery li').eq(4).show().animate({top: 1903/4*0.8125*1, left:1903/4*0},300);
              $('.gallery li').eq(5).show().animate({top: 1903/4*0.8125*1, left:1903/4*1},300);
              $('.gallery li').eq(6).show().animate({top: 1903/4*0.8125*1, left:1903/4*2},300);
              $('.gallery li').eq(7).show().animate({top: 1903/4*0.8125*1, left:1903/4*3},300);
            }else if(no==1){
              //0,2,7
              $('.gallery li').eq(0).hide();
              $('.gallery li').eq(2).hide();
              $('.gallery li').eq(7).hide();
              $('.gallery li').eq(1).show().animate({top: 1903/4*0.8125*0, left:1903/4*0},300);
              $('.gallery li').eq(3).show().animate({top: 1903/4*0.8125*0, left:1903/4*1},300);
              $('.gallery li').eq(4).show().animate({top: 1903/4*0.8125*0, left:1903/4*2},300);
              $('.gallery li').eq(5).show().animate({top: 1903/4*0.8125*0, left:1903/4*3},300);
              $('.gallery li').eq(6).show().animate({top: 1903/4*0.8125*1, left:1903/4*0},300);
            }else if(no==2){
              $('.gallery li').eq(0).hide();
              $('.gallery li').eq(7).hide();
              $('.gallery li').eq(1).show().animate({top: 1903/4*0.8125*0, left:1903/4*0},300);
              $('.gallery li').eq(2).show().animate({top: 1903/4*0.8125*0, left:1903/4*1},300);
              $('.gallery li').eq(3).show().animate({top: 1903/4*0.8125*0, left:1903/4*2},300);
              $('.gallery li').eq(4).show().animate({top: 1903/4*0.8125*0, left:1903/4*3},300);
              $('.gallery li').eq(5).show().animate({top: 1903/4*0.8125*1, left:1903/4*0},300);
              $('.gallery li').eq(6).show().animate({top: 1903/4*0.8125*1, left:1903/4*1},300);
            }else if(no==3){
              $('.gallery li').eq(0).hide();
              $('.gallery li').eq(2).hide();
              $('.gallery li').eq(4).hide();
              $('.gallery li').eq(7).hide();
              $('.gallery li').eq(1).show().animate({top: 1903/4*0.8125*0, left:1903/4*0},300);
              $('.gallery li').eq(3).show().animate({top: 1903/4*0.8125*0, left:1903/4*1},300);
              $('.gallery li').eq(5).show().animate({top: 1903/4*0.8125*0, left:1903/4*2},300);
              $('.gallery li').eq(6).show().animate({top: 1903/4*0.8125*0, left:1903/4*3},300);
            }else if(no==4){
              $('.gallery li').eq(1).hide();
              $('.gallery li').eq(2).hide();
              $('.gallery li').eq(3).hide();
              $('.gallery li').eq(4).hide();
              $('.gallery li').eq(5).hide();
              $('.gallery li').eq(6).hide();
              $('.gallery li').eq(0).show().animate({top: 1903/4*0.8125*0, left:1903/4*0},300);
              $('.gallery li').eq(7).show().animate({top: 1903/4*0.8125*0, left:1903/4*1},300);
            }else{
              $('.gallery li').eq(0).hide();
              $('.gallery li').eq(2).hide();
              $('.gallery li').eq(4).hide();
              $('.gallery li').eq(5).hide();
              $('.gallery li').eq(7).hide();
              $('.gallery li').eq(1).show().animate({top: 1903/4*0.8125*0, left:1903/4*0},300);
              $('.gallery li').eq(3).show().animate({top: 1903/4*0.8125*0, left:1903/4*1},300);
              $('.gallery li').eq(6).show().animate({top: 1903/4*0.8125*0, left:1903/4*2},300);
            }
          };
        }else if(winW>=951 && winW<1427){
          $('.gallery').css('height','calc(1903px/4*0.8125*3)');
          function gallery(){
            if(no==0){
              $('.gallery li').eq(0).show().animate({top: 1903/4*0.8125*0, left:1903/4*0},300);
              $('.gallery li').eq(1).show().animate({top: 1903/4*0.8125*0, left:1903/4*1},300);
              $('.gallery li').eq(2).show().animate({top: 1903/4*0.8125*0, left:1903/4*2},300);
              $('.gallery li').eq(3).show().animate({top: 1903/4*0.8125*1, left:1903/4*0},300);
              $('.gallery li').eq(4).show().animate({top: 1903/4*0.8125*1, left:1903/4*1},300);
              $('.gallery li').eq(5).show().animate({top: 1903/4*0.8125*1, left:1903/4*2},300);
              $('.gallery li').eq(6).show().animate({top: 1903/4*0.8125*2, left:1903/4*0},300);
              $('.gallery li').eq(7).show().animate({top: 1903/4*0.8125*2, left:1903/4*1},300);
            }else if(no==1){
              //0,2,7
              $('.gallery li').eq(0).hide();
              $('.gallery li').eq(2).hide();
              $('.gallery li').eq(7).hide();
              $('.gallery li').eq(1).show().animate({top: 1903/4*0.8125*0, left:1903/4*0},300);
              $('.gallery li').eq(3).show().animate({top: 1903/4*0.8125*0, left:1903/4*1},300);
              $('.gallery li').eq(4).show().animate({top: 1903/4*0.8125*0, left:1903/4*2},300);
              $('.gallery li').eq(5).show().animate({top: 1903/4*0.8125*1, left:1903/4*0},300);
              $('.gallery li').eq(6).show().animate({top: 1903/4*0.8125*1, left:1903/4*1},300);
            }else if(no==2){
              $('.gallery li').eq(0).hide();
              $('.gallery li').eq(7).hide();
              $('.gallery li').eq(1).show().animate({top: 1903/4*0.8125*0, left:1903/4*0},300);
              $('.gallery li').eq(2).show().animate({top: 1903/4*0.8125*0, left:1903/4*1},300);
              $('.gallery li').eq(3).show().animate({top: 1903/4*0.8125*0, left:1903/4*2},300);
              $('.gallery li').eq(4).show().animate({top: 1903/4*0.8125*1, left:1903/4*0},300);
              $('.gallery li').eq(5).show().animate({top: 1903/4*0.8125*1, left:1903/4*1},300);
              $('.gallery li').eq(6).show().animate({top: 1903/4*0.8125*1, left:1903/4*2},300);
            }else if(no==3){
              $('.gallery li').eq(0).hide();
              $('.gallery li').eq(2).hide();
              $('.gallery li').eq(4).hide();
              $('.gallery li').eq(7).hide();
              $('.gallery li').eq(1).show().animate({top: 1903/4*0.8125*0, left:1903/4*0},300);
              $('.gallery li').eq(3).show().animate({top: 1903/4*0.8125*0, left:1903/4*1},300);
              $('.gallery li').eq(5).show().animate({top: 1903/4*0.8125*0, left:1903/4*2},300);
              $('.gallery li').eq(6).show().animate({top: 1903/4*0.8125*1, left:1903/4*0},300);
            }else if(no==4){
              $('.gallery li').eq(1).hide();
              $('.gallery li').eq(2).hide();
              $('.gallery li').eq(3).hide();
              $('.gallery li').eq(4).hide();
              $('.gallery li').eq(5).hide();
              $('.gallery li').eq(6).hide();
              $('.gallery li').eq(0).show().animate({top: 1903/4*0.8125*0, left:1903/4*0},300);
              $('.gallery li').eq(7).show().animate({top: 1903/4*0.8125*0, left:1903/4*1},300);
            }else{
              $('.gallery li').eq(0).hide();
              $('.gallery li').eq(2).hide();
              $('.gallery li').eq(4).hide();
              $('.gallery li').eq(5).hide();
              $('.gallery li').eq(7).hide();
              $('.gallery li').eq(1).show().animate({top: 1903/4*0.8125*0, left:1903/4*0},300);
              $('.gallery li').eq(3).show().animate({top: 1903/4*0.8125*0, left:1903/4*1},300);
              $('.gallery li').eq(6).show().animate({top: 1903/4*0.8125*0, left:1903/4*2},300);
            }
          };
        }else{

        }
      };

      function gallery(){
        if(no==0){
          $('.gallery li').eq(0).show().animate({top: 1903/4*0.8125*0, left:1903/4*0},300);
          $('.gallery li').eq(1).show().animate({top: 1903/4*0.8125*0, left:1903/4*1},300);
          $('.gallery li').eq(2).show().animate({top: 1903/4*0.8125*0, left:1903/4*2},300);
          $('.gallery li').eq(3).show().animate({top: 1903/4*0.8125*0, left:1903/4*3},300);
          $('.gallery li').eq(4).show().animate({top: 1903/4*0.8125*1, left:1903/4*0},300);
          $('.gallery li').eq(5).show().animate({top: 1903/4*0.8125*1, left:1903/4*1},300);
          $('.gallery li').eq(6).show().animate({top: 1903/4*0.8125*1, left:1903/4*2},300);
          $('.gallery li').eq(7).show().animate({top: 1903/4*0.8125*1, left:1903/4*3},300);
        }else if(no==1){
          //0,2,7
          $('.gallery li').eq(0).hide();
          $('.gallery li').eq(2).hide();
          $('.gallery li').eq(7).hide();
          $('.gallery li').eq(1).show().animate({top: 1903/4*0.8125*0, left:1903/4*0},300);
          $('.gallery li').eq(3).show().animate({top: 1903/4*0.8125*0, left:1903/4*1},300);
          $('.gallery li').eq(4).show().animate({top: 1903/4*0.8125*0, left:1903/4*2},300);
          $('.gallery li').eq(5).show().animate({top: 1903/4*0.8125*0, left:1903/4*3},300);
          $('.gallery li').eq(6).show().animate({top: 1903/4*0.8125*1, left:1903/4*0},300);
        }else if(no==2){
          $('.gallery li').eq(0).hide();
          $('.gallery li').eq(7).hide();
          $('.gallery li').eq(1).show().animate({top: 1903/4*0.8125*0, left:1903/4*0},300);
          $('.gallery li').eq(2).show().animate({top: 1903/4*0.8125*0, left:1903/4*1},300);
          $('.gallery li').eq(3).show().animate({top: 1903/4*0.8125*0, left:1903/4*2},300);
          $('.gallery li').eq(4).show().animate({top: 1903/4*0.8125*0, left:1903/4*3},300);
          $('.gallery li').eq(5).show().animate({top: 1903/4*0.8125*1, left:1903/4*0},300);
          $('.gallery li').eq(6).show().animate({top: 1903/4*0.8125*1, left:1903/4*1},300);
        }else if(no==3){
          $('.gallery li').eq(0).hide();
          $('.gallery li').eq(2).hide();
          $('.gallery li').eq(4).hide();
          $('.gallery li').eq(7).hide();
          $('.gallery li').eq(1).show().animate({top: 1903/4*0.8125*0, left:1903/4*0},300);
          $('.gallery li').eq(3).show().animate({top: 1903/4*0.8125*0, left:1903/4*1},300);
          $('.gallery li').eq(5).show().animate({top: 1903/4*0.8125*0, left:1903/4*2},300);
          $('.gallery li').eq(6).show().animate({top: 1903/4*0.8125*0, left:1903/4*3},300);
        }else if(no==4){
          $('.gallery li').eq(1).hide();
          $('.gallery li').eq(2).hide();
          $('.gallery li').eq(3).hide();
          $('.gallery li').eq(4).hide();
          $('.gallery li').eq(5).hide();
          $('.gallery li').eq(6).hide();
          $('.gallery li').eq(0).show().animate({top: 1903/4*0.8125*0, left:1903/4*0},300);
          $('.gallery li').eq(7).show().animate({top: 1903/4*0.8125*0, left:1903/4*1},300);
        }else{
          $('.gallery li').eq(0).hide();
          $('.gallery li').eq(2).hide();
          $('.gallery li').eq(4).hide();
          $('.gallery li').eq(5).hide();
          $('.gallery li').eq(7).hide();
          $('.gallery li').eq(1).show().animate({top: 1903/4*0.8125*0, left:1903/4*0},300);
          $('.gallery li').eq(3).show().animate({top: 1903/4*0.8125*0, left:1903/4*1},300);
          $('.gallery li').eq(6).show().animate({top: 1903/4*0.8125*0, left:1903/4*2},300);
        }
      };
    },
    footer: function () {},
  };
  Agency.init();
})(jQuery);
