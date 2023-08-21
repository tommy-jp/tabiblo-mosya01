'use strict';
{
  // ハンバーガーメニュー
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const header = document.querySelector('header');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    header.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    header.classList.remove('hide');
  });
  
  // カルーセル
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const cal = document.getElementById('cal');
  const slides = cal.children;
  const dots = [];
  let currentIndex = 0;

  function updateButtonds() {
    prev.classList.remove('cal-hidden');
    next.classList.remove('cal-hidden');

    if (currentIndex === 0) {
      prev.classList.add('cal-hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('cal-hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    cal.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;    
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        updateButtonds();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('.car-nav').appendChild(button);
    }
    
    dots[0].classList.add('current');
  }
  
  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  updateButtonds();
  setupDots();

  next.addEventListener('click', () => {
    currentIndex++;
    updateButtonds();
    updateDots();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtonds();
    updateDots();
    moveSlides();
  });

  window.addEventListener('resize', () => {
    moveSlides();
  });

}
