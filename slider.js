const slides = [
  {
    id: 1,
    title: 'Rostov-on-Don, Admiral',
    city: 'Rostov-on-Don',
    area: '81 m²',
    repairTime: '3.5 months',
    repairCost: 'Upon request',
    description:
      'A spacious apartment with panoramic windows and neutral palette. Our team transformed the open plan into a functional family space with a calm atmosphere.',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    title: 'Sochi Thieves',
    city: 'Sochi',
    area: '105 m²',
    repairTime: '4 months',
    repairCost: '$120,000',
    description:
      'Mediterranean inspired interior with natural stone, terrazzo, and curved lines. We highlighted the sea view with a soft color palette and sculptural lighting.',
    image:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    title: 'Rostov-on-Don, Patriotic',
    city: 'Rostov-on-Don',
    area: '94 m²',
    repairTime: '5 months',
    repairCost: '$145,000',
    description:
      'This premium residence blends brass details and walnut textures for a timeless look. Smart zoning and warm lighting support both work and leisure.',
    image:
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80'
  }
];

let currentIndex = 0;

const tabsContainer = document.getElementById('project-tabs');
const dotsContainer = document.getElementById('project-dots');
const descriptionEl = document.getElementById('project-description');
const cityEl = document.getElementById('project-city');
const areaEl = document.getElementById('project-area');
const repairTimeEl = document.getElementById('project-repair-time');
const repairCostEl = document.getElementById('project-repair-cost');
const imageEl = document.getElementById('project-image');
const prevButton = document.getElementById('prev-slide');
const nextButton = document.getElementById('next-slide');

// Create tabs and dots only once during initialization
slides.forEach((slide, index) => {
  const tab = document.createElement('button');
  tab.type = 'button';
  tab.className = 'project-slider__tab';
  tab.textContent = slide.title;
  tab.addEventListener('click', () => renderSlide(index));
  tabsContainer.append(tab);

  const dot = document.createElement('button');
  dot.type = 'button';
  dot.className = 'project-slider__dot';
  dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
  dot.addEventListener('click', () => renderSlide(index));
  dotsContainer.append(dot);
});

// Render slide state and update active classes
const renderSlide = (index) => {
  if (index < 0) {
    index = slides.length - 1;
  }
  if (index >= slides.length) {
    index = 0;
  }
  currentIndex = index;

  const slide = slides[index];
  descriptionEl.textContent = slide.description;
  cityEl.textContent = slide.city;
  areaEl.textContent = slide.area;
  repairTimeEl.textContent = slide.repairTime;
  repairCostEl.textContent = slide.repairCost;
  imageEl.src = slide.image;
  imageEl.alt = slide.title;

  const tabs = tabsContainer.querySelectorAll('.project-slider__tab');
  const dots = dotsContainer.querySelectorAll('.project-slider__dot');

  tabs.forEach((tab, tabIndex) => {
    tab.classList.toggle('project-slider__tab--active', tabIndex === index);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle('project-slider__dot--active', dotIndex === index);
  });
};

// Arrow navigation
prevButton.addEventListener('click', () => {
  renderSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  renderSlide(currentIndex + 1);
});

// Keyboard accessibility (optional but helpful)
document.getElementById('project-slider').addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    renderSlide(currentIndex - 1);
  }
  if (event.key === 'ArrowRight') {
    renderSlide(currentIndex + 1);
  }
});

// Initialize the slider with the first slide
renderSlide(0);