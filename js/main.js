/* ============================================
   InAmigos Foundation - Interactive Features
   Shared across all pages
   ============================================ */

(function () {
  'use strict';

  // ---- 1. Page Loader ----
  function initLoader() {
    const loader = document.querySelector('.page-loader');
    if (!loader) return;
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 600);
      setTimeout(() => loader.remove(), 1200);
    });
  }

  // ---- 2. Scroll Progress Bar ----
  function initScrollProgress() {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    bar.style.width = '0%';
    document.body.appendChild(bar);
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = pct + '%';
    }, { passive: true });
  }

  // ---- 3. Back to Top Button ----
  function initBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '↑';
    btn.setAttribute('aria-label', 'Back to top');
    btn.title = 'Back to top';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- 4. Custom Cursor ----
  function initCustomCursor() {
    // Skip on touch devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX - 4 + 'px';
      dot.style.top = mouseY - 4 + 'px';
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = ringX - 18 + 'px';
      ring.style.top = ringY - 18 + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Scale on interactive elements
    const interactives = 'a, button, .btn, input, textarea, select, .project-card, .event-card, .team-card, .impact-card, .testimonial-card, .faq-question';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactives)) {
        dot.style.transform = 'scale(2.5)';
        ring.style.transform = 'scale(1.5)';
        ring.style.borderColor = 'rgba(231,111,31,0.8)';
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactives)) {
        dot.style.transform = 'scale(1)';
        ring.style.transform = 'scale(1)';
        ring.style.borderColor = 'rgba(231,111,31,0.4)';
      }
    });
  }

  // ---- 5. Enhanced Scroll Reveal ----
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach((el) => observer.observe(el));
  }

  // ---- 6. Counter Animation (enhanced) ----
  function initCounters() {
    const counters = document.querySelectorAll('[data-target]');
    if (!counters.length) return;

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          counterObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach((el) => counterObserver.observe(el));
  }

  function animateCounter(el) {
    const target = +el.dataset.target;
    const duration = 2200;
    const frameDuration = 16;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // Ease-out cubic
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      const current = Math.round(target * progress);

      if (target >= 1000) {
        el.textContent = current.toLocaleString('en-IN') + '+';
      } else if (target <= 10) {
        el.textContent = current;
      } else {
        el.textContent = current + '+';
      }

      if (frame >= totalFrames) {
        clearInterval(timer);
        // Final pulse
        el.classList.add('counting');
        setTimeout(() => el.classList.remove('counting'), 300);
      }
    }, frameDuration);
  }

  // ---- 7. Navbar Scroll Effect ----
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // ---- 8. Hamburger Menu ----
  function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    // Close on link click (mobile)
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }

  // ---- 9. Hero Slideshow ----
  function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    if (!slides.length) return;

    let current = 0;
    function goToSlide(n) {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');
      current = n;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    }
    dots.forEach((dot) => dot.addEventListener('click', () => goToSlide(+dot.dataset.slide)));
    setInterval(() => goToSlide((current + 1) % slides.length), 5000);
  }

  // ---- 10. Smooth Scroll for Anchor Links ----
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ---- 11. Parallax Floating Shapes ----
  function initParallax() {
    const shapes = document.querySelectorAll('.floating-shape');
    if (!shapes.length) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      shapes.forEach((shape, i) => {
        const speed = (i + 1) * 0.02;
        shape.style.transform = `translateY(${scrolled * speed}px)`;
      });
    }, { passive: true });
  }

  // ---- 12. Tilt Effect on Cards ----
  function initTiltCards() {
    const cards = document.querySelectorAll('.project-card, .team-card, .testimonial-card, .impact-card');
    if (!cards.length || !window.matchMedia('(hover: hover)').matches) return;

    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ---- 13. Particle Canvas (hero section) ----
  function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 40;

    function resize() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.4 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    }
    animate();
  }

  // ---- 14. Marquee Animation ----
  function initMarquee() {
    const marquee = document.querySelector('.marquee-inner');
    if (!marquee) return;
    // Clone children for seamless loop
    const children = marquee.innerHTML;
    marquee.innerHTML = children + children;
  }

  // ---- 15. Image Lightbox ---- 
  function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    if (!galleryItems.length) return;

    // Create lightbox overlay
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <div class="lightbox-content">
        <img src="" alt="Gallery Image" class="lightbox-img" />
        <button class="lightbox-close" aria-label="Close">&times;</button>
      </div>
    `;
    overlay.style.cssText = `
      position:fixed; inset:0; background:rgba(0,0,0,0.9); z-index:99999;
      display:none; align-items:center; justify-content:center; cursor:pointer;
      animation: fadeInUp 0.3s ease;
    `;
    const lbContent = overlay.querySelector('.lightbox-content');
    lbContent.style.cssText = `position:relative; max-width:90vw; max-height:90vh;`;
    const lbImg = overlay.querySelector('.lightbox-img');
    lbImg.style.cssText = `max-width:90vw; max-height:85vh; object-fit:contain; border-radius:12px; box-shadow:0 20px 60px rgba(0,0,0,0.5);`;
    const lbClose = overlay.querySelector('.lightbox-close');
    lbClose.style.cssText = `
      position:absolute; top:-16px; right:-16px; width:40px; height:40px;
      border-radius:50%; background:var(--accent); color:white; border:none;
      font-size:1.5rem; cursor:pointer; display:flex; align-items:center;
      justify-content:center; box-shadow:0 4px 16px rgba(0,0,0,0.3);
      transition: transform 0.3s ease;
    `;
    document.body.appendChild(overlay);

    galleryItems.forEach((img) => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target === lbClose) {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.style.display === 'flex') {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  // ---- 16. Typing Effect ----
  function initTypingEffect() {
    const elements = document.querySelectorAll('.typing-effect');
    elements.forEach((el) => {
      const text = el.dataset.text || el.textContent;
      el.textContent = '';
      el.style.visibility = 'visible';
      let i = 0;
      function type() {
        if (i < text.length) {
          el.textContent += text.charAt(i);
          i++;
          setTimeout(type, 60);
        }
      }
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            type();
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      obs.observe(el);
    });
  }

  // ---- INIT ALL ----
  function init() {
    initLoader();
    initScrollProgress();
    initBackToTop();
    initCustomCursor();
    initScrollReveal();
    initCounters();
    initNavbar();
    initHamburger();
    initHeroSlideshow();
    initSmoothScroll();
    initParallax();
    initTiltCards();
    initParticles();
    initMarquee();
    initLightbox();
    initTypingEffect();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
