document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.hero-main-slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  });

  // Scroll Top
  const scrollTopBtn = document.getElementById('scrollTop');
  scrollTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
