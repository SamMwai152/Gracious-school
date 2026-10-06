/* ============================================================
   GRACIOUS SCHOOL LANET — MAIN JAVASCRIPT
   Plain JavaScript. No frameworks, no dependencies.
   Handles: header/footer injection, mobile menu, active nav,
            gallery lightbox, current year in footer.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- SCHOOL DATA (edit here to update across all pages) ---------- */
  const SCHOOL = {
    name: 'Gracious School Lanet',
    brand: 'Gracious Schools',
    location: 'Lanet, Nakuru County, Kenya',
    phones: ['0722 165012', '0732 625447'],
    phoneTels: ['+254722165012', '+254732625447'],
    email: '[TO BE ADDED]',
    facebook: '[TO BE ADDED: Facebook URL]',
    instagram: '[TO BE ADDED: Instagram URL]',
    logo: '/images/logo.svg',
  };

  /* ---------- PAGE LIST (for nav + active state) ---------- */
  const PAGES = [
    { href: '/index.html', label: 'Home' },
    { href: '/about.html', label: 'About Us' },
    { href: '/academics.html', label: 'Academics' },
    { href: '/boarding.html', label: 'Boarding & Gallery' },
    { href: '/contact.html', label: 'Contact' },
  ];

  /* ---------- DETECT CURRENT PAGE ---------- */
  function currentPage() {
    const path = window.location.pathname;
    const match = PAGES.find(p => path.endsWith(p.href.replace('/', '')));
    return match ? match.href : '/index.html';
  }

  /* ---------- BUILD HEADER ---------- */
  function buildHeader() {
    const current = currentPage();
    const navLinks = PAGES.map(p =>
      `<a href="${p.href}" class="${p.href === current ? 'active' : ''}">${p.label}</a>`
    ).join('');

    return `
      <header class="site-header" role="banner">
        <div class="site-header__inner">
          <a href="/index.html" class="site-header__logo" aria-label="${SCHOOL.name} — Home">
            <img src="${SCHOOL.logo}" alt="${SCHOOL.name} crest logo" />
            <span class="site-header__logo-text">
              <span class="site-header__logo-name">Gracious Schools</span>
              <span class="site-header__logo-sub">Lanet • Nakuru</span>
            </span>
          </a>
          <nav class="site-nav" aria-label="Main navigation">
            ${navLinks}
          </nav>
          <div class="site-header__cta">
            <a href="/contact.html" class="btn btn-accent">Visit Us</a>
          </div>
          <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu">
            <span></span><span></span><span></span>
          </button>
        </div>
        <div class="mobile-menu" id="mobile-menu" role="navigation" aria-label="Mobile navigation">
          ${navLinks}
          <a href="/contact.html" class="btn btn-accent btn-block">Visit Us</a>
        </div>
      </header>
    `;
  }

  /* ---------- BUILD FOOTER ---------- */
  function buildFooter() {
    const year = new Date().getFullYear();
    const quickLinks = PAGES.map(p =>
      `<li><a href="${p.href}">${p.label}</a></li>`
    ).join('');

    return `
      <footer class="site-footer" role="contentinfo">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-col">
              <div class="footer-brand">
                <img src="${SCHOOL.logo}" alt="${SCHOOL.name} crest logo" />
                <span>Gracious Schools</span>
              </div>
              <p>A mixed day and boarding primary school in Lanet, Nakuru County, offering Competency-Based Education. Nurturing learning, creativity, and character.</p>
              <div class="footer-social">
                <a href="${SCHOOL.facebook}" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="${SCHOOL.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
              </div>
            </div>
            <div class="footer-col">
              <h4>Quick Links</h4>
              <ul>${quickLinks}</ul>
            </div>
            <div class="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><i class="fa-solid fa-location-dot"></i> ${SCHOOL.location}</li>
                <li><i class="fa-solid fa-phone"></i> <a href="tel:${SCHOOL.phoneTels[0]}">${SCHOOL.phones[0]}</a></li>
                <li><i class="fa-solid fa-phone"></i> <a href="tel:${SCHOOL.phoneTels[1]}">${SCHOOL.phones[1]}</a></li>
                <li><i class="fa-solid fa-envelope"></i> ${SCHOOL.email}</li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Visit Us</h4>
              <p>Weekday interviews and enquiries: 8:00 AM – 3:00 PM.</p>
              <p>We welcome you to tour our school and meet our team in person.</p>
              <a href="/contact.html" class="btn btn-accent" style="margin-top:12px;">Book a Tour</a>
            </div>
          </div>
          <div class="footer-bottom">
            &copy; ${year} ${SCHOOL.name}. All rights reserved.
          </div>
        </div>
      </footer>
    `;
  }

  /* ---------- BUILD FLOATING MOBILE BAR ---------- */
  function buildMobileBar() {
    return `
      <div class="mobile-bar" role="navigation" aria-label="Quick contact">
        <a href="tel:${SCHOOL.phoneTels[0]}" class="mobile-bar__call">
          <i class="fa-solid fa-phone"></i> Call
        </a>
        <a href="/contact.html" class="mobile-bar__visit">
          <i class="fa-solid fa-location-dot"></i> Visit Us
        </a>
      </div>
    `;
  }

  /* ---------- INJECT HEADER / FOOTER / MOBILE BAR ---------- */
  function injectLayout() {
    const headerSlot = document.getElementById('header-slot');
    const footerSlot = document.getElementById('footer-slot');
    const mobileBarSlot = document.getElementById('mobile-bar-slot');

    if (headerSlot) headerSlot.innerHTML = buildHeader();
    if (footerSlot) footerSlot.innerHTML = buildFooter();
    if (mobileBarSlot) mobileBarSlot.innerHTML = buildMobileBar();
  }

  /* ---------- MOBILE MENU TOGGLE ---------- */
  function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('mobile-menu');
    if (!hamburger || !menu) return;

    hamburger.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is tapped
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- GALLERY LIGHTBOX ---------- */
  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const items = Array.from(document.querySelectorAll('[data-gallery]'));
    if (items.length === 0) return;

    const imgEl = lightbox.querySelector('.lightbox__img');
    const captionEl = lightbox.querySelector('.lightbox__caption');
    const closeBtn = lightbox.querySelector('.lightbox__close');
    const prevBtn = lightbox.querySelector('.lightbox__prev');
    const nextBtn = lightbox.querySelector('.lightbox__next');

    let currentIdx = 0;

    function show(idx) {
      currentIdx = (idx + items.length) % items.length;
      const item = items[currentIdx];
      const src = item.getAttribute('data-src');
      const caption = item.getAttribute('data-caption') || '';
      imgEl.src = src;
      imgEl.alt = caption;
      captionEl.textContent = caption;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    items.forEach(function (item, idx) {
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', 'Open image: ' + (item.getAttribute('data-caption') || ''));
      item.addEventListener('click', function () { show(idx); });
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(idx); }
      });
    });

    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', function () { show(currentIdx - 1); });
    nextBtn.addEventListener('click', function () { show(currentIdx + 1); });

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) close();
    });

    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(currentIdx - 1);
      if (e.key === 'ArrowRight') show(currentIdx + 1);
    });
  }

  /* ---------- CURRICULUM ACCORDION ---------- */
  function initAccordion() {
    document.querySelectorAll('[data-accordion-trigger]').forEach(function (trigger) {
      const panelId = trigger.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      if (!panel) return;

      trigger.addEventListener('click', function () {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', String(!isExpanded));
        panel.hidden = isExpanded;
      });
    });
  }

  /* ---------- INIT ON DOM READY ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    injectLayout();
    initMobileMenu();
    initLightbox();
    initAccordion();
  });
})();
