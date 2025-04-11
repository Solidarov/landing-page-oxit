// Course slider logic
const slides = document.querySelectorAll('.course-slider .swiper-slide');
const shouldInitializeSlider = slides.length > 3 || window.innerWidth <= 995;

if (shouldInitializeSlider) {
    const courseSwiper = new Swiper('.course-slider', {
    spaceBetween: 20,
    pagination: {
        el: '.course-pagination',
        dynamicBullets: true,
    },
    breakpoints: {
        320: {
        slidesPerView: 1,
        spaceBetween: 20,
        },
        850: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        996: {
        slidesPerView: 3,
        spaceBetween: 30,
        }
    }
    });
    
    // Show navigation and pagination
    document.querySelector('.course-pagination').style.display = 'block';
    
} else {
    
    // Hide navigation and pagination
    document.querySelector('.course-pagination').style.display = 'none';
    
    // Apply flexbox to center the slides
    document.querySelector('.swiper-wrapper').classList.add('d-flex', 'justify-content-center');
    
    // Make each slide take appropriate width
    slides.forEach(slide => {
    slide.style.width = `calc(${100 / Math.min(slides.length, 3)}% - 20px)`;
    slide.style.marginRight = '10px';
    slide.style.marginLeft = '10px';
    });
};


// Feedback slider logic 
const feedback_swiper = new Swiper(".feedback-slider", {
    spaceBetween: 30,
    effect: "fade",
    fadeEffect: {
    crossFade: true
    },
    autoplay:{
    delay: 10000,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".feedback-pagination",
    clickable: true,
    },
    loop: true,
});


// Mentor slider logic
const mentorsSwiper = new Swiper(".mentors-slider", {
    spaceBetween: 30,
    effect: "fade",
    fadeEffect: {
    crossFade: true
    },
    autoplay:{
    delay: 10000,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".mentors-pagination",
    clickable: true,
    },
    loop: true,
});