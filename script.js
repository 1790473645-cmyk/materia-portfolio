const contactDialog = document.querySelector('.contact-dialog');
const projectDialog = document.querySelector('.project-dialog');
const projectTitle = document.querySelector('#project-title');
const contactForm = document.querySelector('.contact-form');
const formSuccess = document.querySelector('.form-success');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const productDetailDialog = document.querySelector('.product-detail-dialog');
const productDetailTitle = document.querySelector('#product-detail-title');
const productDetailSummary = document.querySelector('#product-detail-summary');
const detailMainCount = document.querySelector('#detail-main-count');
const detailMainSection = document.querySelector('#detail-main-section');
const detailMainGallery = document.querySelector('#detail-main-gallery');
const detailDesktopSection = document.querySelector('#detail-desktop-section');
const detailDesktopGallery = document.querySelector('#detail-desktop-gallery');
const detailMobileSection = document.querySelector('#detail-mobile-section');
const detailMobileGallery = document.querySelector('#detail-mobile-gallery');

document.querySelectorAll('main img').forEach((image) => {
  if (image.closest('.hero-carousel-slide')) return;
  image.loading = 'lazy';
  image.decoding = 'async';
});

const showreelVideo = document.querySelector('[data-showreel-video]');
const showreelSound = document.querySelector('[data-showreel-sound]');

if (showreelVideo && showreelSound) {
  const soundLabel = showreelSound.querySelector('[data-showreel-sound-label]');
  const syncSoundControl = () => {
    const soundIsOn = !showreelVideo.muted;
    showreelSound.setAttribute('aria-pressed', String(soundIsOn));
    soundLabel.textContent = soundIsOn ? 'Sound on' : 'Sound off';
  };

  showreelSound.addEventListener('click', () => {
    showreelVideo.muted = !showreelVideo.muted;
    if (showreelVideo.paused) showreelVideo.play().catch(() => {});
    syncSoundControl();
  });
  showreelVideo.addEventListener('volumechange', syncSoundControl);
  showreelVideo.play().catch(() => {});
  syncSoundControl();
}

document.querySelectorAll('.archive-grid, .campaign-grid, .other-grid').forEach((grid) => {
  grid.querySelectorAll('[data-reveal]').forEach((item, index) => {
    item.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
  });
});

const productDetails = {
  'campaign-valentine-rower': {
    title: 'GMVD / Valentine’s rower',
    summary: 'A Valentine’s Day campaign developed as one connected story across landscape, portrait and square compositions.',
    layout: 'campaign',
    countLabel: '3 campaign formats',
    mainImages: [
      { src: 'assets/campaign-valentine-rower/detail-01-landscape.jpg', alt: 'Valentine’s Day rowing machine campaign in a landscape composition' },
      { src: 'assets/campaign-valentine-rower/detail-02-portrait.jpg', alt: 'Valentine’s Day rowing machine campaign in a portrait composition' },
      { src: 'assets/campaign-valentine-rower/detail-03-square.jpg', alt: 'Valentine’s Day rowing machine campaign in a square composition' },
    ],
  },
  'campaign-valentine-winter': {
    title: 'GMVD / Valentine’s winter',
    summary: 'A winter Valentine’s Day campaign developed as one connected story across landscape, portrait and square compositions.',
    layout: 'campaign',
    countLabel: '3 campaign formats',
    mainImages: [
      { src: 'assets/campaign-valentine-winter/detail-01-landscape.jpg', alt: 'Winter Valentine’s Day workout bench campaign in a landscape composition' },
      { src: 'assets/campaign-valentine-winter/detail-02-portrait.jpg', alt: 'Winter Valentine’s Day workout bench campaign in a portrait composition' },
      { src: 'assets/campaign-valentine-winter/detail-03-square.jpg', alt: 'Winter Valentine’s Day workout bench campaign in a square composition' },
    ],
  },
  'campaign-game-day': {
    title: 'MIKOLO / Game day',
    summary: 'A stadium-scale game day campaign developed across landscape, portrait and square compositions for the F4 power rack.',
    layout: 'campaign',
    countLabel: '3 campaign formats',
    mainImages: [
      { src: 'assets/campaign-game-day/detail-01-landscape.jpg', alt: 'MIKOLO F4 power rack game day campaign in a landscape composition' },
      { src: 'assets/campaign-game-day/detail-02-portrait.jpg', alt: 'MIKOLO F4 power rack game day campaign in a portrait composition' },
      { src: 'assets/campaign-game-day/detail-03-square.jpg', alt: 'MIKOLO F4 power rack game day campaign in a square composition' },
    ],
  },
  'campaign-new-year': {
    title: 'GMVD / New year campaign',
    summary: 'A neon new year campaign developed across landscape, portrait and square compositions for a complete multi-format rollout.',
    layout: 'campaign',
    countLabel: '3 campaign formats',
    mainImages: [
      { src: 'assets/campaign-new-year/detail-01-landscape.jpg', alt: 'GMVD new year home gym campaign in a landscape composition' },
      { src: 'assets/campaign-new-year/detail-02-portrait.jpg', alt: 'GMVD new year home gym campaign in a portrait composition' },
      { src: 'assets/campaign-new-year/detail-03-square.jpg', alt: 'GMVD new year home gym campaign in a square composition' },
    ],
  },
  'campaign-winter-strength': {
    title: 'GMVD / Winter strength',
    summary: 'A winter sports campaign developed across landscape, portrait and square compositions around inclusive strength and movement.',
    layout: 'campaign',
    countLabel: '3 campaign formats',
    mainImages: [
      { src: 'assets/campaign-winter-strength/detail-01-landscape.jpg', alt: 'GMVD winter strength stair climber campaign in a landscape composition' },
      { src: 'assets/campaign-winter-strength/detail-02-portrait.jpg', alt: 'GMVD winter strength stair climber campaign in a portrait composition' },
      { src: 'assets/campaign-winter-strength/detail-03-square.jpg', alt: 'GMVD winter strength stair climber campaign in a square composition' },
    ],
  },
  'campaign-winter-bench': {
    title: 'GMVD / Winter bench',
    summary: 'A winter sports campaign developed across landscape, portrait and square compositions to connect strength training with the energy of competition.',
    layout: 'campaign',
    countLabel: '3 campaign formats',
    mainImages: [
      { src: 'assets/campaign-winter-bench/detail-01-landscape.jpg', alt: 'GMVD winter bench campaign in a landscape composition' },
      { src: 'assets/campaign-winter-bench/detail-02-portrait.jpg', alt: 'GMVD winter bench campaign in a portrait composition' },
      { src: 'assets/campaign-winter-bench/detail-03-square.jpg', alt: 'GMVD winter bench campaign in a square composition' },
    ],
  },
  'campaign-winter-rower': {
    title: 'GMVD / Winter rower',
    summary: 'A winter sports campaign developed across landscape, portrait and square compositions around adaptive performance and unstoppable movement.',
    layout: 'campaign',
    countLabel: '3 campaign formats',
    mainImages: [
      { src: 'assets/campaign-winter-rower/detail-01-landscape.jpg', alt: 'GMVD winter rower campaign in a landscape composition' },
      { src: 'assets/campaign-winter-rower/detail-02-portrait.jpg', alt: 'GMVD winter rower campaign in a portrait composition' },
      { src: 'assets/campaign-winter-rower/detail-03-square.jpg', alt: 'GMVD winter rower campaign in a square composition' },
    ],
  },
  'ap-weight-plates': {
    title: 'AP / Weighted training',
    summary: 'A complete product-image system, from the marketplace hero shots to the tailored A+ stories for desktop and mobile.',
    mainImages: [
      { src: 'assets/ap-weight-plates/main-01.jpg', alt: 'Mikolo rubber grip weight plate main product image 1' },
      { src: 'assets/ap-weight-plates/main-02.jpg', alt: 'Mikolo rubber grip weight plate main product image 2' },
      { src: 'assets/ap-weight-plates/main-03.jpg', alt: 'Mikolo rubber grip weight plate main product image 3' },
      { src: 'assets/ap-weight-plates/main-04.jpg', alt: 'Mikolo rubber grip weight plate main product image 4' },
      { src: 'assets/ap-weight-plates/main-05.jpg', alt: 'Mikolo rubber grip weight plate main product image 5' },
      { src: 'assets/ap-weight-plates/main-06.jpg', alt: 'Mikolo rubber grip weight plate main product image 6' },
      { src: 'assets/ap-weight-plates/main-07.jpg', alt: 'Mikolo rubber grip weight plate main product image 7' },
      { src: 'assets/ap-weight-plates/main-dimensions.jpg', alt: 'Mikolo rubber grip weight plate dimensions image' },
      { src: 'assets/ap-weight-plates/main-bundle.jpg', alt: 'Mikolo rubber grip weight plate bundle image' },
    ],
    desktopAplus: { src: 'assets/ap-weight-plates/aplus-desktop.jpg', alt: 'Mikolo rubber grip weight plate desktop A+ content' },
    mobileAplus: { src: 'assets/ap-weight-plates/aplus-mobile.jpg', alt: 'Mikolo rubber grip weight plate mobile A+ content' },
  },
  'cpgl-home-gym': {
    title: 'CPGL / Home gym system',
    summary: 'A six-image marketplace set showing the home-gym system, attachments and exercise use in full.',
    mainImages: [
      { src: 'assets/cpgl-home-gym/main-01.jpg', alt: 'CPGL home gym system main product image 1' },
      { src: 'assets/cpgl-home-gym/main-02.jpg', alt: 'CPGL home gym system main product image 2' },
      { src: 'assets/cpgl-home-gym/main-03.jpg', alt: 'CPGL home gym system main product image 3' },
      { src: 'assets/cpgl-home-gym/main-04.jpg', alt: 'CPGL home gym system main product image 4' },
      { src: 'assets/cpgl-home-gym/main-05.jpg', alt: 'CPGL home gym system main product image 5' },
      { src: 'assets/cpgl-home-gym/main-06.jpg', alt: 'CPGL home gym system main product image 6' },
    ],
  },
  'edb00-electric-bike': {
    title: 'EDB00 / Electric trail bike',
    summary: 'A complete 13-image product sequence covering the bike, key details and high-performance trail riding.',
    mainImages: [
      { src: 'assets/edb00-electric-bike/main-01.jpg', alt: 'EDB00 electric trail bike main product image 1' },
      { src: 'assets/edb00-electric-bike/main-02.jpg', alt: 'EDB00 electric trail bike main product image 2' },
      { src: 'assets/edb00-electric-bike/main-03.jpg', alt: 'EDB00 electric trail bike main product image 3' },
      { src: 'assets/edb00-electric-bike/main-04.jpg', alt: 'EDB00 electric trail bike main product image 4' },
      { src: 'assets/edb00-electric-bike/main-05.jpg', alt: 'EDB00 electric trail bike main product image 5' },
      { src: 'assets/edb00-electric-bike/main-06.jpg', alt: 'EDB00 electric trail bike main product image 6' },
      { src: 'assets/edb00-electric-bike/main-07.jpg', alt: 'EDB00 electric trail bike main product image 7' },
      { src: 'assets/edb00-electric-bike/main-08.jpg', alt: 'EDB00 electric trail bike main product image 8' },
      { src: 'assets/edb00-electric-bike/main-09.jpg', alt: 'EDB00 electric trail bike main product image 9' },
      { src: 'assets/edb00-electric-bike/main-10.jpg', alt: 'EDB00 electric trail bike main product image 10' },
      { src: 'assets/edb00-electric-bike/main-11.jpg', alt: 'EDB00 electric trail bike main product image 11' },
      { src: 'assets/edb00-electric-bike/main-12.jpg', alt: 'EDB00 electric trail bike main product image 12' },
      { src: 'assets/edb00-electric-bike/main-13.jpg', alt: 'EDB00 electric trail bike main product image 13' },
    ],
  },
  'k8-cable-rack': {
    title: 'K8 / Cable rack',
    summary: 'A complete 12-image marketplace sequence covering the K8 cable rack, its build, attachments and configurations.',
    mainImages: [
      { src: 'assets/k8-cable-rack/main-01.jpg', alt: 'K8 cable rack main product image 1' },
      { src: 'assets/k8-cable-rack/main-02.jpg', alt: 'K8 cable rack main product image 2' },
      { src: 'assets/k8-cable-rack/main-03.jpg', alt: 'K8 cable rack main product image 3' },
      { src: 'assets/k8-cable-rack/main-04.jpg', alt: 'K8 cable rack main product image 4' },
      { src: 'assets/k8-cable-rack/main-05.jpg', alt: 'K8 cable rack main product image 5' },
      { src: 'assets/k8-cable-rack/main-06.jpg', alt: 'K8 cable rack main product image 6' },
      { src: 'assets/k8-cable-rack/main-07.jpg', alt: 'K8 cable rack main product image 7' },
      { src: 'assets/k8-cable-rack/main-08.jpg', alt: 'K8 cable rack main product image 8' },
      { src: 'assets/k8-cable-rack/main-09.jpg', alt: 'K8 cable rack main product image 9' },
      { src: 'assets/k8-cable-rack/main-10.jpg', alt: 'K8 cable rack main product image 10' },
      { src: 'assets/k8-cable-rack/main-11.jpg', alt: 'K8 cable rack main product image 11' },
      { src: 'assets/k8-cable-rack/main-12.jpg', alt: 'K8 cable rack main product image 12' },
    ],
    desktopAplus: { src: 'assets/k8-cable-rack/aplus-desktop.jpg', alt: 'K8 cable rack desktop A+ content' },
    mobileAplus: { src: 'assets/k8-cable-rack/aplus-mobile.jpg', alt: 'K8 cable rack mobile A+ content' },
  },
  'pe00-training-vest': {
    title: 'PE00 / Training equipment',
    summary: 'A complete product image set for the weighted training vest, with a tailored long-form A+ story for mobile viewing.',
    mainImages: [
      { src: 'assets/pe00-training-vest/main-01.jpg', alt: 'PE00 weighted training vest main product image 1' },
      { src: 'assets/pe00-training-vest/main-02.jpg', alt: 'PE00 weighted training vest main product image 2' },
      { src: 'assets/pe00-training-vest/main-03.jpg', alt: 'PE00 weighted training vest main product image 3' },
      { src: 'assets/pe00-training-vest/main-04.jpg', alt: 'PE00 weighted training vest main product image 4' },
      { src: 'assets/pe00-training-vest/main-05.jpg', alt: 'PE00 weighted training vest main product image 5' },
      { src: 'assets/pe00-training-vest/main-06.jpg', alt: 'PE00 weighted training vest main product image 6' },
      { src: 'assets/pe00-training-vest/main-07.jpg', alt: 'PE00 weighted training vest main product image 7' },
    ],
    mobileAplus: { src: 'assets/pe00-training-vest/aplus-mobile.jpg', alt: 'PE00 weighted training vest mobile A+ content' },
  },
  'sm05-dual-cable': {
    title: 'SM05 / Dual cable system',
    summary: 'A complete nine-image product sequence showing the SM05 dual cable system, its stacks and training configurations.',
    mainImages: [
      { src: 'assets/sm05-dual-cable/main-01.jpg', alt: 'SM05 dual cable system main product image 1' },
      { src: 'assets/sm05-dual-cable/main-02.jpg', alt: 'SM05 dual cable system main product image 2' },
      { src: 'assets/sm05-dual-cable/main-03.jpg', alt: 'SM05 dual cable system main product image 3' },
      { src: 'assets/sm05-dual-cable/main-04.jpg', alt: 'SM05 dual cable system main product image 4' },
      { src: 'assets/sm05-dual-cable/main-05.jpg', alt: 'SM05 dual cable system main product image 5' },
      { src: 'assets/sm05-dual-cable/main-06.jpg', alt: 'SM05 dual cable system main product image 6' },
      { src: 'assets/sm05-dual-cable/main-07.jpg', alt: 'SM05 dual cable system main product image 7' },
      { src: 'assets/sm05-dual-cable/main-08.jpg', alt: 'SM05 dual cable system main product image 8' },
      { src: 'assets/sm05-dual-cable/main-09.jpg', alt: 'SM05 dual cable system main product image 9' },
    ],
  },
  'wb08-adjustable-bench': {
    title: 'WB08 / Adjustable bench',
    summary: 'A complete product image set for the WB08 adjustable bench, followed by the full desktop A+ story.',
    mainImages: [
      { src: 'assets/wb08-adjustable-bench/main-01.jpg', alt: 'WB08 adjustable bench main product image 1' },
      { src: 'assets/wb08-adjustable-bench/main-02.jpg', alt: 'WB08 adjustable bench main product image 2' },
      { src: 'assets/wb08-adjustable-bench/main-03.jpg', alt: 'WB08 adjustable bench main product image 3' },
      { src: 'assets/wb08-adjustable-bench/main-04.jpg', alt: 'WB08 adjustable bench main product image 4' },
      { src: 'assets/wb08-adjustable-bench/main-05.jpg', alt: 'WB08 adjustable bench main product image 5' },
      { src: 'assets/wb08-adjustable-bench/main-06.jpg', alt: 'WB08 adjustable bench main product image 6' },
      { src: 'assets/wb08-adjustable-bench/main-07.jpg', alt: 'WB08 adjustable bench main product image 7' },
      { src: 'assets/wb08-adjustable-bench/main-08.jpg', alt: 'WB08 adjustable bench main product image 8' },
      { src: 'assets/wb08-adjustable-bench/main-09.jpg', alt: 'WB08 adjustable bench main product image 9' },
    ],
    desktopAplus: { src: 'assets/wb08-adjustable-bench/aplus-desktop.jpg', alt: 'WB08 adjustable bench desktop A+ content' },
  },
  'sr07-plate-loaded-row': {
    title: 'SR07 / Plate-loaded row',
    summary: 'A complete product image set for the SR07 plate-loaded row machine, followed by the full desktop A+ story.',
    mainImages: [
      { src: 'assets/sr07-plate-loaded-row/main-01.jpg', alt: 'SR07 plate-loaded row main product image 1' },
      { src: 'assets/sr07-plate-loaded-row/main-02.jpg', alt: 'SR07 plate-loaded row main product image 2' },
      { src: 'assets/sr07-plate-loaded-row/main-03.jpg', alt: 'SR07 plate-loaded row main product image 3' },
      { src: 'assets/sr07-plate-loaded-row/main-04.jpg', alt: 'SR07 plate-loaded row main product image 4' },
      { src: 'assets/sr07-plate-loaded-row/main-05.jpg', alt: 'SR07 plate-loaded row main product image 5' },
      { src: 'assets/sr07-plate-loaded-row/main-06.jpg', alt: 'SR07 plate-loaded row main product image 6' },
      { src: 'assets/sr07-plate-loaded-row/main-07.jpg', alt: 'SR07 plate-loaded row main product image 7' },
      { src: 'assets/sr07-plate-loaded-row/main-08.jpg', alt: 'SR07 plate-loaded row main product image 8' },
      { src: 'assets/sr07-plate-loaded-row/main-09.jpg', alt: 'SR07 plate-loaded row main product image 9' },
      { src: 'assets/sr07-plate-loaded-row/main-10.jpg', alt: 'SR07 plate-loaded row main product image 10' },
      { src: 'assets/sr07-plate-loaded-row/main-11.jpg', alt: 'SR07 plate-loaded row main product image 11' },
    ],
    desktopAplus: { src: 'assets/sr07-plate-loaded-row/aplus-desktop.jpg', alt: 'SR07 plate-loaded row desktop A+ content' },
  },
};

const createImage = (image, className) => {
  const figure = document.createElement('figure');
  figure.className = className;
  const element = document.createElement('img');
  element.src = image.src;
  element.alt = image.alt;
  element.loading = 'lazy';
  figure.append(element);
  return figure;
};

const openProductDetail = (product) => {
  productDetailTitle.textContent = product.title;
  productDetailSummary.textContent = product.summary;
  detailMainCount.textContent = product.countLabel || (product.inlineAplus ? `${product.mainImages.length} images + A+` : `${product.mainImages.length} images`);
  detailMainGallery.classList.toggle('detail-main-gallery--campaign', product.layout === 'campaign');
  detailMainGallery.replaceChildren(...product.mainImages.map((image) => createImage(image, 'detail-main-card')), ...(product.inlineAplus ? [createImage(product.inlineAplus, 'detail-main-card detail-main-card--aplus')] : []));
  detailMainSection.classList.toggle('detail-block--last', !product.desktopAplus && !product.mobileAplus);
  detailDesktopSection.hidden = !product.desktopAplus;
  detailMobileSection.hidden = !product.mobileAplus;
  detailDesktopGallery.replaceChildren(...(product.desktopAplus ? [createImage(product.desktopAplus, 'detail-aplus-image')] : []));
  detailMobileGallery.replaceChildren(...(product.mobileAplus ? [createImage(product.mobileAplus, 'detail-aplus-image')] : []));
  productDetailDialog.showModal();
  productDetailDialog.querySelector('.product-detail-content').scrollTop = 0;
};

document.querySelectorAll('.js-contact').forEach((button) => {
  button.addEventListener('click', () => {
    projectDialog.close();
    contactDialog.showModal();
    contactDialog.querySelector('input').focus();
  });
});

document.querySelectorAll('.project-card').forEach((card) => {
  const openProject = () => {
    const product = productDetails[card.dataset.detailProduct];
    if (product) {
      openProductDetail(product);
      return;
    }
    projectTitle.textContent = card.dataset.project;
    projectDialog.showModal();
  };
  card.addEventListener('click', openProject);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProject();
    }
  });
});

document.querySelectorAll('.dialog-close').forEach((button) => {
  button.addEventListener('click', () => button.closest('dialog').close());
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formSuccess.textContent = 'Thank you — your note is on its way.';
  contactForm.reset();
});

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.classList.toggle('is-open');
  mainNav.classList.toggle('is-open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('is-open');
    mainNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const syncHeaderState = () => document.body.classList.toggle('is-scrolled', window.scrollY > 24);
syncHeaderState();
window.addEventListener('scroll', syncHeaderState, { passive: true });

const navigationLinks = [...mainNav.querySelectorAll('a[href^="#"]')];
const navigationTargets = navigationLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const navigationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navigationLinks.forEach((link) => {
      const isCurrent = link.getAttribute('href') === `#${entry.target.id}`;
      link.classList.toggle('is-current', isCurrent);
      if (isCurrent) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-32% 0px -58%', threshold: 0 });

navigationTargets.forEach((section) => navigationObserver.observe(section));

const heroCarousel = document.querySelector('[data-hero-carousel]');

if (heroCarousel) {
  const slides = [...heroCarousel.querySelectorAll('[data-hero-slide]')];
  const dots = [...heroCarousel.querySelectorAll('[data-hero-dot]')];
  const previousButton = heroCarousel.querySelector('[data-hero-prev]');
  const nextButton = heroCarousel.querySelector('[data-hero-next]');
  const counter = heroCarousel.querySelector('[data-hero-count]');
  const carouselStage = heroCarousel.querySelector('.hero-carousel-stage');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeIndex = 0;
  let carouselTimer;
  let transitionTimer;

  const renderSlide = (nextIndex, direction = 'forward') => {
    const normalisedIndex = (nextIndex + slides.length) % slides.length;
    if (normalisedIndex === activeIndex) return;

    const previousSlide = slides[activeIndex];
    const nextSlide = slides[normalisedIndex];
    window.clearTimeout(transitionTimer);
    slides.forEach((slide) => {
      if (slide !== previousSlide && slide !== nextSlide) slide.classList.remove('is-exiting');
    });
    carouselStage.classList.remove('is-changing', 'is-flow-forward', 'is-flow-backward');
    carouselStage.classList.add('is-changing', direction === 'backward' ? 'is-flow-backward' : 'is-flow-forward');
    previousSlide.classList.remove('is-active');
    previousSlide.classList.add('is-exiting');
    previousSlide.setAttribute('aria-hidden', 'true');
    nextSlide.classList.remove('is-exiting');
    nextSlide.classList.add('is-active');
    nextSlide.setAttribute('aria-hidden', 'false');

    transitionTimer = window.setTimeout(() => {
      previousSlide.classList.remove('is-exiting');
      carouselStage.classList.remove('is-changing', 'is-flow-forward', 'is-flow-backward');
    }, 1120);

    dots.forEach((dot, index) => dot.setAttribute('aria-current', String(index === normalisedIndex)));
    counter.textContent = `${String(normalisedIndex + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    activeIndex = normalisedIndex;
  };

  const stopAutoplay = () => window.clearInterval(carouselTimer);
  const startAutoplay = () => {
    stopAutoplay();
    if (!reducedMotion.matches) {
      carouselTimer = window.setInterval(() => renderSlide(activeIndex + 1, 'forward'), 6800);
    }
  };

  previousButton.addEventListener('click', () => {
    renderSlide(activeIndex - 1, 'backward');
    startAutoplay();
  });

  nextButton.addEventListener('click', () => {
    renderSlide(activeIndex + 1, 'forward');
    startAutoplay();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      renderSlide(index, index < activeIndex ? 'backward' : 'forward');
      startAutoplay();
    });
  });

  heroCarousel.addEventListener('mouseenter', stopAutoplay);
  heroCarousel.addEventListener('mouseleave', startAutoplay);
  heroCarousel.addEventListener('focusin', stopAutoplay);
  heroCarousel.addEventListener('focusout', (event) => {
    if (!heroCarousel.contains(event.relatedTarget)) startAutoplay();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAutoplay();
    else startAutoplay();
  });
  reducedMotion.addEventListener('change', startAutoplay);
  startAutoplay();
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -7%' });

document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));
