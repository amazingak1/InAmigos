/* ============================================
   InAmigos Foundation - Additional Interactive Features
   ============================================ */

(function () {
  'use strict';

  // ---- 1. Ripple Effect on Buttons ----
  function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        let x = e.clientX - e.target.getBoundingClientRect().left;
        let y = e.clientY - e.target.getBoundingClientRect().top;
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        ripples.classList.add('ripple-overlay');
        this.appendChild(ripples);
        setTimeout(() => {
          ripples.remove();
        }, 1000);
      });
    });
  }

  // ---- 2. Magnetic Buttons ----
  function initMagneticButtons() {
    const magneticElements = document.querySelectorAll('.btn, .nav-donate');
    magneticElements.forEach(btn => {
      btn.addEventListener('mousemove', function(e) {
        const position = btn.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
      });
      btn.addEventListener('mouseout', function(e) {
        btn.style.transform = `translate(0px, 0px)`;
      });
    });
  }

  // ---- 3. Dynamic Card Shadows ----
  function initDynamicShadows() {
    const cards = document.querySelectorAll('.project-card, .event-card, .impact-card, .testimonial-card, .team-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate shadow direction opposite to mouse
        const shadowX = (centerX - x) / 10;
        const shadowY = (centerY - y) / 10;
        
        card.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(231,111,31,0.2)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
      });
    });
  }

  // ---- 4. Confetti on Donate ----
  function initConfetti() {
    const donateBtns = document.querySelectorAll('.nav-donate, .btn-primary[href*="rzp.io"]');
    
    donateBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        createConfetti(e.clientX, e.clientY);
      });
    });
  }

  function createConfetti(x, y) {
    const colors = ['#e76f1f', '#f4a261', '#1a6b5a', '#2a9d8f', '#ffffff'];
    for (let i = 0; i < 40; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti-piece');
      document.body.appendChild(confetti);
      
      const size = Math.random() * 10 + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      confetti.style.width = size + 'px';
      confetti.style.height = size + 'px';
      confetti.style.backgroundColor = color;
      confetti.style.position = 'fixed';
      confetti.style.left = x + 'px';
      confetti.style.top = y + 'px';
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      confetti.style.zIndex = '99999';
      confetti.style.pointerEvents = 'none';
      
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 15 + 5;
      const vx = Math.cos(angle) * velocity;
      let vy = Math.sin(angle) * velocity - 10;
      
      let posX = x;
      let posY = y;
      let rotation = Math.random() * 360;
      let rotSpeed = Math.random() * 10 - 5;
      
      function animatePiece() {
        vy += 0.5; // gravity
        posX += vx;
        posY += vy;
        rotation += rotSpeed;
        
        confetti.style.transform = `translate(${posX - x}px, ${posY - y}px) rotate(${rotation}deg)`;
        
        if (posY > window.innerHeight) {
          confetti.remove();
        } else {
          requestAnimationFrame(animatePiece);
        }
      }
      
      requestAnimationFrame(animatePiece);
    }
  }

  // Add necessary CSS styles for the new JS features dynamically
  function injectStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
      .btn { position: relative; overflow: hidden; transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease; }
      .ripple-overlay {
        position: absolute;
        background: rgba(255, 255, 255, 0.4);
        transform: translate(-50%, -50%);
        pointer-events: none;
        border-radius: 50%;
        animation: jsRipple 1s linear;
        width: 0;
        height: 0;
      }
      @keyframes jsRipple {
        0% { width: 0; height: 0; opacity: 1; }
        100% { width: 500px; height: 500px; opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  // ---- INIT ALL ----
  function initMore() {
    injectStyles();
    initRippleEffect();
    initMagneticButtons();
    initDynamicShadows();
    initConfetti();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMore);
  } else {
    initMore();
  }
})();
