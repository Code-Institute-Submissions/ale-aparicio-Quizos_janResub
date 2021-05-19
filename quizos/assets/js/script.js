//Slider
window.onload=function(){
    const slider = document.querySelector(".slider");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const slides = document.querySelectorAll(".slide");
    const slideIcons = document.querySelectorAll(".slide-icon");
    const numberOfSlides = slides.length;
    var slideNumber = 0;

    //image slider next button
    nextBtn.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber++;

        if(slideNumber > (numberOfSlides - 1)){
            slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
        });

    //image slider previous button
    prevBtn.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber--;

        if(slideNumber < 0){
            slideNumber = numberOfSlides - 1;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
        });

        //autoplay
        var playSlider;

        var repeater = () => {
          playSlider = setInterval(function(){
            slides.forEach((slide) => {
              slide.classList.remove("active");
          });
          slideIcons.forEach((slideIcon) => {
              slideIcon.classList.remove("active");
          });

          slideNumber++;

          if(slideNumber > (numberOfSlides - 1)){
              slideNumber = 0;
          }

          slides[slideNumber].classList.add("active");
          slideIcons[slideNumber].classList.add("active");
          }, 4000);
        }
        repeater();

        //stop autoplay on mouseover
        slider.addEventListener("mouseover", () => {
          clearInterval(playSlider);
        });

        //start autoplay again on mouseout
        slider.addEventListener("mouseout", () => {
          repeater();
        });

        //SLIDER ENT 
        const sliderEnt = document.querySelector(".slider-ent");
        const nextBtnEnt = document.querySelector(".next-btn-ent");
        const prevBtnEnt = document.querySelector(".prev-btn-ent");
        const slidesEnt = document.querySelectorAll(".slide-ent");
        const slideIconsEnt = document.querySelectorAll(".slide-icon-ent");
        const numberOfSlidesEnt = slidesEnt.length;
        var slideNumberEnt = 0;

        //image slider next button
        nextBtnEnt.addEventListener("click", () => {
            slidesEnt.forEach((slideEnt) => {
                slideEnt.classList.remove("active");
            });
            slideIconsEnt.forEach((slideIconEnt) => {
                slideIconEnt.classList.remove("active");
            });

            slideNumberEnt++;

            if(slideNumberEnt > (numberOfSlidesEnt - 1)){
                slideNumberEnt = 0;
            }

            slidesEnt[slideNumberEnt].classList.add("active");
            slideIconsEnt[slideNumberEnt].classList.add("active");
            });

        //image slider previous button
        prevBtnEnt.addEventListener("click", () => {
            slidesEnt.forEach((slideEnt) => {
                slideEnt.classList.remove("active");
            });
            slideIconsEnt.forEach((slideIconEnt) => {
                slideIconEnt.classList.remove("active");
            });

            slideNumberEnt--;

            if(slideNumberEnt < 0){
                slideNumberEnt = numberOfSlidesEnt - 1;
            }

            slidesEnt[slideNumberEnt].classList.add("active");
            slideIconsEnt[slideNumberEnt].classList.add("active");
            });

            //autoplay
            var playSliderEnt;

            var repeater = () => {
              playSliderEnt = setInterval(function(){
                slidesEnt.forEach((slideEnt) => {
                  slideEnt.classList.remove("active");
              });
              slideIconsEnt.forEach((slideIconEnt) => {
                  slideIconEnt.classList.remove("active");
              });

              slideNumberEnt++;

              if(slideNumberEnt > (numberOfSlidesEnt - 1)){
                  slideNumberEnt = 0;
              }

              slidesEnt[slideNumberEnt].classList.add("active");
              slideIconsEnt[slideNumberEnt].classList.add("active");
              }, 4000);
            }
            repeater();

            //stop autoplay on mouseover
            sliderEnt.addEventListener("mouseover", () => {
              clearInterval(playSliderEnt);
            });

            //start autoplay again on mouseout
            sliderEnt.addEventListener("mouseout", () => {
              repeater();
            });
  }


