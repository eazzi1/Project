function gotopage(){
  window.location.href="request.html"
}

document.addEventListener('DOMContentLoaded',function(){
  const scrollToTopBtn = document.getElementById('scrollToTop');

  scrollToTopBtn.addEventListener('click',function (){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});



// Chongs JS 

// New! Keyboard shortcuts … Drive keyboard shortcuts have been updated to give you first-letters navigation 

let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 22,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 1,
    },
    968: {
      slidesPerView: 2,
    },
  },
});


document.addEventListener('DOMContentLoaded', function () {
  let currentStep = 0; // Start at the first step (index 0)
  const steps = document.querySelectorAll('.step'); // All step elements
  const nextButtons = document.querySelectorAll('.nextBtn'); // All next buttons
  const prevButtons = document.querySelectorAll('.prevBtn'); // All previous buttons

  // Function to show the current step and hide others
  function showStep(stepIndex) {
    steps.forEach((step, index) => {
      if (index === stepIndex) {
        step.classList.add('active'); // Show the active step
      } else {
        step.classList.remove('active'); // Hide other steps
      }
    });
  }

  // Go to the next step
  nextButtons.forEach(button => {
    button.addEventListener('click', function () {
      if (currentStep < steps.length - 1) {
        currentStep++; // Move to the next step
        showStep(currentStep);
      }
    });
  });

  // Go to the previous step
  prevButtons.forEach(button => {
    button.addEventListener('click', function () {
      if (currentStep > 0) {
        currentStep--; // Move to the previous step
        showStep(currentStep);
      }
    });
  });

  // Initialize the first step to be visible
  showStep(currentStep);
});