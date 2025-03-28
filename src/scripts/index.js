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