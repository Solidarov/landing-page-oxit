// Form validation logic
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.needs-validation');
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          alert('Дякуємо за реєстрацію!');
        }
        form.classList.add('was-validated');
      }, false);
    });
  });
// Form validation logic
document.addEventListener('DOMContentLoaded', () => {
    // Form validation code...
    
    // Phone number formatting logic
    const phoneInput = document.getElementById('phone_number');
    
    if (phoneInput) {
      phoneInput.addEventListener('input', (event) => {
        let value = phoneInput.value.replace(/\D/g, ''); // Remove all non-digit characters
        
        // Format with spaces
        if (value.length > 0) {
          // Format groups of digits with appropriate spaces
          if (value.length > 3) value = value.replace(/^(\d{3})(\d+)/, '$1 $2');
          if (value.length > 6) value = value.replace(/^(\d{3}) (\d{2})(\d+)/, '$1 $2 $3');
          if (value.length > 9) value = value.replace(/^(\d{3}) (\d{2}) (\d{2})(\d+)/, '$1 $2 $3 $4');
          
          // Limit to 13 characters (including spaces)
          phoneInput.value = value.slice(0, 13);
        }
      });
    }
  });

// Add to your index.js file inside the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
  // Form validation code...
  
  // Phone number formatting logic...
  
  // Partner slider initialization
  const partnerSliderContainer = document.querySelector('.partner-slider-container');
  const slides = document.querySelectorAll('.partner-slider .swiper-slide');
  
  let partnerSwiper;
  
  function initSwiper() {
    // Only initialize as a slider if there are more than 3 elements
    const shouldInitializeSlider = slides.length > 3 || window.innerWidth <= 995;
    
    if (shouldInitializeSlider) {
      partnerSwiper = new Swiper('.partner-slider', {
        spaceBetween: 20,
        navigation:{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
      document.querySelector('.swiper-button-next').style.display = 'flex';
      document.querySelector('.swiper-button-prev').style.display = 'flex';
    } else {
      // If 3 or fewer slides, destroy swiper if it exists and center the slides
      if (partnerSwiper) {
        partnerSwiper.destroy();
        partnerSwiper = undefined;
      }
      
      // Hide navigation and pagination
      document.querySelector('.swiper-button-next').style.display = 'none';
      document.querySelector('.swiper-button-prev').style.display = 'none';
      
      // Apply flexbox to center the slides
      document.querySelector('.swiper-wrapper').classList.add('d-flex', 'justify-content-center');
      
      // Make each slide take appropriate width
      slides.forEach(slide => {
        slide.style.width = `calc(${100 / Math.min(slides.length, 3)}% - 20px)`;
        slide.style.marginRight = '10px';
        slide.style.marginLeft = '10px';
      });
    }
  }
  
  // Initialize on page load
  initSwiper();
  
  // Re-initialize on window resize
  window.addEventListener('resize', initSwiper);
});

document.addEventListener('DOMContentLoaded', () => {
  var swiper = new Swiper(".feedback-slider", {
    spaceBetween: 30,
    effect: "fade",
    autoplay:{
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});