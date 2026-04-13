/* ═══════════════════════════════════════════
   AXEL TECH — main.js
   Toda la lógica dinámica del sitio
═══════════════════════════════════════════ */

'use strict';

/* ──────────────────────────────────────────
   DATOS — Edita aquí para actualizar contenido
────────────────────────────────────────── */

// 🔧 EDITAR: Tu número de WhatsApp sin + ni espacios
const WA_NUMBER = '59173955236';
const WA_BASE   = `https://wa.me/${WA_NUMBER}`;

const SERVICES = [
  {
    icon: 'fas fa-laptop',
    title: 'Mantenimiento de Computadoras',
    desc: 'Limpieza interna, cambio de pasta térmica, actualización de drivers y optimización de rendimiento.',
    tag: 'Preventivo'
  },
  {
    icon: 'fas fa-tools',
    title: 'Reparación de Computadoras',
    desc: 'Diagnóstico y solución de fallas en hardware: pantalla, teclado, RAM, disco duro y fuentes.',
    tag: 'Correctivo'
  },
  {
    icon: 'fas fa-house-user',
    title: 'Servicio a Domicilio',
    desc: 'Vamos hasta tu hogar u oficina. Sin que tengas que mover el equipo. Rápido y confiable.',
    tag: 'A domicilio'
  },
  {
    icon: 'fas fa-print',
    title: 'Reparación de Impresoras',
    desc: 'Especialistas en EPSON. Reseteo de almohadillas, cabezales, sistemas de tinta continua y más.',
    tag: 'EPSON especialista'
  }
];

const DESIGN_SERVICES = [
  {
    emoji: '🎂',
    gradient: 'linear-gradient(135deg,#1a0a2e,#0d1a40)',
    title: 'Invitaciones de Cumpleaños',
    desc: 'Diseños personalizados y coloridos para tu celebración.',
    waMsg: 'Hola, me interesa una invitación de cumpleaños'
  },
  {
    emoji: '🎉',
    gradient: 'linear-gradient(135deg,#0a2e1a,#0a1a30)',
    title: 'Flyers de Felicitación',
    desc: 'Publicaciones digitales para compartir en redes sociales.',
    waMsg: 'Hola, necesito un flyer de felicitación'
  },
  {
    emoji: '📅',
    gradient: 'linear-gradient(135deg,#2e1a0a,#0a1a2e)',
    title: 'Invitaciones Cronológicas',
    desc: 'Líneas de tiempo visuales para bodas, quinceañeras y eventos.',
    waMsg: 'Hola, quiero una invitación cronológica'
  },
  {
    emoji: '✏️',
    gradient: 'linear-gradient(135deg,#0a2e2e,#080c20)',
    title: 'Creación de Logos',
    desc: 'Identidad visual profesional para tu negocio o emprendimiento.',
    waMsg: 'Hola, me interesa crear un logo para mi negocio'
  }
];

// 🔧 EDITAR: Agrega o modifica trabajos del portafolio
// Para agregar imagen real: reemplaza imgPlaceholder con imgSrc: 'ruta/imagen.jpg'
const PORTFOLIO_ITEMS = [
  {
    cat: 'diseno', catLabel: 'Diseño Gráfico', date: 'Abril 2025',
    title: 'Invitación Quinceañera – Valentina',
    desc: 'Diseño cronológico con paleta rosado y dorado, tipografía elegante y fotos de la festejada.',
    detail: 'Diseño completo con 6 módulos cronológicos, portada, contraportada y versión para historias de Instagram. Entregado en formato PNG y PDF en menos de 24 horas.',
    icon: 'fas fa-star'
  },
  {
    cat: 'tecnico', catLabel: 'Servicio Técnico', date: 'Marzo 2025',
    title: 'Reparación Impresora EPSON L3250',
    desc: 'Reset de almohadillas, limpieza profunda de cabezal y configuración Wifi.',
    detail: 'El cliente reportó error de almohadillas llenas e impresión borrosa. Se realizó reseteo con software oficial, limpieza de cabezal con ciclos de limpieza, y calibración completa. Garantía 30 días.',
    icon: 'fas fa-print'
  },
  {
    cat: 'diseno', catLabel: 'Diseño Gráfico', date: 'Febrero 2025',
    title: 'Logo Corporativo – Ferretería El Clavo',
    desc: 'Identidad visual completa con logotipo, paleta de colores y variantes.',
    detail: 'Se entregaron: logo principal, versión horizontal, versión solo ícono, fondo blanco y negro. Archivos en PNG transparente, SVG y AI. Uso libre para el negocio.',
    icon: 'fas fa-paint-brush'
  },
  {
    cat: 'tecnico', catLabel: 'Servicio Técnico', date: 'Enero 2025',
    title: 'Mantenimiento Preventivo – Laptop HP',
    desc: 'Limpieza completa, cambio de pasta térmica y reinstalación de Windows 11.',
    detail: 'La laptop presentaba sobrecalentamiento y lentitud extrema. Se realizó desmontaje completo, limpieza de ventilador y disipador, cambio de pasta térmica Thermal Grizzly, y instalación limpia de Windows 11 Pro.',
    icon: 'fas fa-laptop'
  },
  {
    cat: 'diseno', catLabel: 'Diseño Gráfico', date: 'Diciembre 2024',
    title: 'Flyer Navideño – Farmacia Salud Total',
    desc: 'Publicación para redes sociales con promociones navideñas del negocio.',
    detail: 'Diseño corporativo adaptado a la temporada navideña. Incluye versión feed (1080×1080) e historia (1080×1920). Colores de marca mantenidos con elementos festivos discretos.',
    icon: 'fas fa-snowflake'
  },
  {
    cat: 'tecnico', catLabel: 'Servicio Técnico', date: 'Noviembre 2024',
    title: 'Reparación PC de escritorio – No enciende',
    desc: 'Diagnóstico, cambio de fuente de poder y revisión de placa madre.',
    detail: 'PC de oficina no encendía. Diagnóstico reveló fuente de poder quemada por sobretensión. Se reemplazó por fuente de 600W con protecciones, se revisó placa y memoria. Equipo operando al 100%.',
    icon: 'fas fa-desktop'
  }
];

/* ──────────────────────────────────────────
   UTILIDADES
────────────────────────────────────────── */
function $(id) { return document.getElementById(id); }
function $$(sel, ctx = document) { return Array.from(ctx.querySelectorAll(sel)); }

function buildWaLink(msg) {
  return `${WA_BASE}?text=${encodeURIComponent(msg)}`;
}

/* ──────────────────────────────────────────
   HERO CANVAS — partículas flotantes
────────────────────────────────────────── */
function initHeroCanvas() {
  const canvas = $('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createParticles() {
    const count = Math.floor((W * H) / 14000);
    particles = Array.from({ length: count }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      r:  Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.1
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,230,180,${p.alpha})`;
      ctx.fill();

      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
    });

    // Connect close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,230,180,${(1 - dist / 90) * 0.12})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener('resize', () => { resize(); createParticles(); });
}

/* ──────────────────────────────────────────
   HEADER — scroll + active nav
────────────────────────────────────────── */
function initHeader() {
  const header = $('header');
  const navLinks = $$('#mainNav a, .mobile-drawer a');

  // Scroll effect
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 40);

    // Active link
    const sections = $$('section[id], div[id]');
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger
  const hamburger = $('hamburger');
  const drawer    = $('mobileDrawer');

  hamburger.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close drawer on link click
  $$('.mobile-drawer a').forEach(a => {
    a.addEventListener('click', () => {
      drawer.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
}

/* ──────────────────────────────────────────
   REVEAL ON SCROLL — Intersection Observer
────────────────────────────────────────── */
function initReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          // Stagger cards in a grid
          const delay = e.target.dataset.delay || 0;
          setTimeout(() => e.target.classList.add('visible'), delay);
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  $$('[data-reveal]').forEach(el => observer.observe(el));
}

/* ──────────────────────────────────────────
   COUNTER ANIMATION — stats
────────────────────────────────────────── */
function animateCounter(el, target, duration = 1200) {
  const start    = performance.now();
  const isDecimal = target < 10;

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    const value    = eased * target;
    el.textContent = isDecimal ? value.toFixed(1) : Math.floor(value);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

function initCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el     = e.target;
        const target = parseInt(el.dataset.count, 10);
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  $$('[data-count]').forEach(el => observer.observe(el));
}

/* ──────────────────────────────────────────
   RENDER SERVICES
────────────────────────────────────────── */
function renderServices() {
  const grid = $('servicesGrid');
  if (!grid) return;

  grid.innerHTML = SERVICES.map((s, i) => `
    <div class="service-card" data-reveal style="transition-delay:${i * 80}ms">
      <div class="service-icon"><i class="${s.icon}"></i></div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <span class="service-tag">${s.tag}</span>
    </div>
  `).join('');

  // Re-observe new elements
  $$('[data-reveal]').forEach(el => {
    if (!el.classList.contains('visible')) {
      new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const delay = parseInt(e.target.style.transitionDelay) || 0;
            setTimeout(() => e.target.classList.add('visible'), 0);
          }
        });
      }, { threshold: 0.1 }).observe(el);
    }
  });
}

/* ──────────────────────────────────────────
   RENDER DESIGN SERVICES
────────────────────────────────────────── */
function renderDesign() {
  const grid = $('designGrid');
  if (!grid) return;

  grid.innerHTML = DESIGN_SERVICES.map((d, i) => `
    <div class="design-card" data-reveal style="transition-delay:${i * 80}ms">
      <div class="design-thumb" style="background:${d.gradient}">
        <span style="position:relative;z-index:1">${d.emoji}</span>
      </div>
      <div class="design-info">
        <h3>${d.title}</h3>
        <p>${d.desc}</p>
        <a href="${buildWaLink(d.waMsg)}" target="_blank" class="design-wa">
          <i class="fab fa-whatsapp"></i> Solicitar diseño <i class="fas fa-arrow-right" style="font-size:.7rem"></i>
        </a>
      </div>
    </div>
  `).join('');
}

/* ──────────────────────────────────────────
   PORTFOLIO — render + filter + load more
────────────────────────────────────────── */
let portfolioVisible = 3; // items shown initially

function renderPortfolio(filter = 'all') {
  const grid = $('portfolioGrid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(p => p.cat === filter);

  grid.innerHTML = filtered.map((p, i) => `
    <div class="portfolio-card ${i >= portfolioVisible ? 'hidden' : ''}"
         data-reveal data-index="${i}" data-id="${i}" style="transition-delay:${(i % 3) * 80}ms">
      <div class="portfolio-img" style="background:linear-gradient(135deg,#0a1020,#0c1830)">
        <i class="${p.icon}"></i>
        <!-- 🔧 Para imagen real: reemplaza todo el div por <img src="tu-imagen.jpg" alt="${p.title}"> -->
        <div class="overlay"><i class="fas fa-expand"></i></div>
      </div>
      <div class="portfolio-body">
        <div class="portfolio-meta">
          <span class="portfolio-cat">${p.catLabel}</span>
          <span class="portfolio-date">· ${p.date}</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>
    </div>
  `).join('');

  // Attach click for lightbox
  $$('.portfolio-card', grid).forEach(card => {
    card.addEventListener('click', () => {
      const idx  = parseInt(card.dataset.id);
      const item = filtered[idx];
      openLightbox(item);
    });
  });

  // Update load more button
  const btn = $('loadMoreBtn');
  if (btn) {
    const total = filtered.length;
    btn.parentElement.style.display = total > portfolioVisible ? 'block' : 'none';
  }
}

function initPortfolioFilters() {
  const filters = $$('.filter-btn');
  let current   = 'all';
  portfolioVisible = 3;

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      current = btn.dataset.filter;
      portfolioVisible = 3;
      renderPortfolio(current);
      triggerReveal();
    });
  });

  const loadMore = $('loadMoreBtn');
  if (loadMore) {
    loadMore.addEventListener('click', () => {
      portfolioVisible += 3;
      renderPortfolio(current);
      triggerReveal();
    });
  }
}

/* ──────────────────────────────────────────
   LIGHTBOX
────────────────────────────────────────── */
function openLightbox(item) {
  const lb   = $('lightbox');
  const body = $('lightboxBody');
  body.innerHTML = `
    <span class="lb-cat">${item.catLabel} · ${item.date}</span>
    <h3>${item.title}</h3>
    <p>${item.desc}</p>
    <p style="margin-top:10px">${item.detail}</p>
    <a href="${buildWaLink(`Hola, vi el trabajo "${item.title}" y me interesa algo similar`)}"
       target="_blank" class="btn-primary" style="margin-top:22px;display:inline-flex">
      <i class="fab fa-whatsapp"></i> Quiero algo similar
    </a>
  `;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function initLightbox() {
  const lb    = $('lightbox');
  const close = $('lightboxClose');
  close.addEventListener('click', () => closeLightbox());
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}

function closeLightbox() {
  $('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

/* ──────────────────────────────────────────
   CONTACT FORM → WhatsApp
────────────────────────────────────────── */
function initContactForm() {
  const form     = $('contactForm');
  const msgInput = $('fmsg');
  const charCnt  = $('charCount');
  const MAX_CHARS = 300;

  if (!form) return;

  // Character counter
  msgInput.addEventListener('input', () => {
    const len = msgInput.value.length;
    charCnt.textContent = `${len} / ${MAX_CHARS}`;
    charCnt.style.color = len > MAX_CHARS ? '#f56565' : 'var(--muted)';
    if (len > MAX_CHARS) msgInput.value = msgInput.value.slice(0, MAX_CHARS);
  });

  // Validation helpers
  function setError(inputId, errId, msg) {
    const el  = $(inputId);
    const err = $(errId);
    el.classList.toggle('error', !!msg);
    if (err) err.textContent = msg;
    return !!msg;
  }

  function validate() {
    let hasError = false;
    const name = $('fname').value.trim();
    const msg  = $('fmsg').value.trim();
    if (!name) { setError('fname', 'fnameError', 'Por favor ingresa tu nombre'); hasError = true; }
    else        { setError('fname', 'fnameError', ''); }
    if (!msg)   { $('fmsg').classList.add('error'); hasError = true; }
    else        { $('fmsg').classList.remove('error'); }
    return !hasError;
  }

  // Submit → build WhatsApp message and open
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validate()) return;

    const name    = $('fname').value.trim();
    const phone   = $('fphone').value.trim();
    const service = $('fservice').value;
    const msg     = $('fmsg').value.trim();

    let waText = `Hola, me llamo *${name}*.`;
    if (phone)   waText += `\nMi número: ${phone}`;
    if (service) waText += `\nServicio de interés: *${service}*`;
    waText += `\n\n${msg}`;

    const btn = $('submitBtn');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Abriendo WhatsApp...</span>';
    btn.disabled = true;

    setTimeout(() => {
      window.open(buildWaLink(waText), '_blank');
      btn.innerHTML = '<i class="fab fa-whatsapp"></i> <span>Enviar por WhatsApp</span>';
      btn.disabled = false;
      form.reset();
      charCnt.textContent = '0 / 300';
    }, 700);
  });

  // Live validation on blur
  $('fname').addEventListener('blur', () => {
    const v = $('fname').value.trim();
    setError('fname', 'fnameError', v ? '' : 'Por favor ingresa tu nombre');
  });
}

/* ──────────────────────────────────────────
   FOOTER YEAR
────────────────────────────────────────── */
function initFooterYear() {
  const el = $('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ──────────────────────────────────────────
   SMOOTH SCROLL — for older browsers
────────────────────────────────────────── */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 70;
        const top    = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ──────────────────────────────────────────
   TRIGGER REVEAL — for dynamically added elements
────────────────────────────────────────── */
function triggerReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = e.target.style.transitionDelay
          ? parseFloat(e.target.style.transitionDelay) * 1000
          : 0;
        setTimeout(() => e.target.classList.add('visible'), delay);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  $$('[data-reveal]:not(.visible)').forEach(el => observer.observe(el));
}

/* ──────────────────────────────────────────
   INIT — run everything
────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initHeroCanvas();
  initHeader();
  renderServices();
  renderDesign();
  renderPortfolio();
  initPortfolioFilters();
  initLightbox();
  initContactForm();
  initFooterYear();
  initSmoothScroll();
  initReveal();
  initCounters();
  triggerReveal();
});
