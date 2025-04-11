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


// Youtube player logic
var player;

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
}

document.addEventListener('DOMContentLoaded', () => {
  
  const videoSection = document.getElementById('youtube-player').parentElement;
  if (!videoSection.id) {
    videoSection.id = 'youtube-container';
    videoSection.className += ' position-relative ratio ratio-16x9';
  }
  
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});