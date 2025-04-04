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
  const swiper = new Swiper(".feedback-slider", {
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
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });
});

// Global variable for the YouTube player
var player;

// This function must be in global scope for the YouTube API to call it
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-player', {
    playerVars: {
      'autoplay': 0,
      'controls': 1,
      'modestbranding': 1,
      'rel': 0,
      'playsinline': 1
    },
    videoId: '6taRNiJZIFA',
    events: {
      'onReady': onPlayerReady,
      'onError': onPlayerError
    }
  });
}

function onPlayerReady(event) {
  console.log('YouTube player ready');
  // Optional: You can add custom functionality when the player is ready
  
  // Make player responsive by adjusting container rather than iframe directly
  const responsive = () => {
    const container = document.getElementById('youtube-container');
    if (container) {
      const width = container.clientWidth;
      const height = width * 0.5625; // 16:9 aspect ratio
      const playerElement = document.getElementById('youtube-player');
      if (playerElement) {
        playerElement.style.width = '100%';
        playerElement.style.height = `${height}px`;
      }
    }
  };
  
  responsive();
  window.addEventListener('resize', responsive);
}

function onPlayerError(event) {
  console.error('YouTube player error:', event.data);
  // Handle error - maybe show a message to the user
}

// Load the YouTube API script
document.addEventListener('DOMContentLoaded', () => {
  // Create a container div for responsive sizing if it doesn't exist yet
  const videoSection = document.getElementById('youtube-player').parentElement;
  if (!videoSection.id) {
    videoSection.id = 'youtube-container';
    videoSection.className += ' position-relative ratio ratio-16x9';
  }
  
  // Load the iframe API script
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});