// Объект с данными карточек
const cards = {
    card_1: {
      imageSrc: "img/фото1.jfif",
      imageClass: "fhoto1",
      title: "Portal TV",
      description: "Smart video calling on the biggest screen",
      linkText: "Learn more",
      linkHref: "#"
    },
    card_2: {
      imageSrc: "img/фото2.jfif",
      imageClass: "fhoto1",
      title: "Portal",
      description: "Smart video calling on a 10” HD display",
      linkText: "Learn more",
      linkHref: "#"
    },
    card_3: {
      imageSrc: "img/фото3.jfif",
      imageClass: "fhoto1",
      title: "Portal+",
      description: "Smart video calling on a 15.6” HD display",
      linkText: "Learn more",
      linkHref: "#"
    },
    card_4: {
      imageSrc: "img/фото4.jfif",
      imageClass: "fhoto1",
      title: "Portal Mini",
      description: "Smart video calling on an 8” HD display",
      linkText: "Learn more",
      linkHref: "#"
    }
  };
  
  // Функция для создания HTML-разметки карточки
  function createCard(cardData) {
    return `
      <div class="product">
        <img src="${cardData.imageSrc}" class="${cardData.imageClass}">
        <div class="price">
          <h2>${cardData.title}</h2>
          <h5>${cardData.description}</h5>
          <a href="${cardData.linkHref}">${cardData.linkText}</a>
        </div>
      </div>
    `;
  }
  
  // Функция для вставки карточек в контейнер
  function renderCards(cardsContainerSelector, cardsData) {
    const container = document.querySelector(cardsContainerSelector);
    
    if (!container) {
      console.error(`Container with selector "${cardsContainerSelector}" not found`);
      return;
    }
    
    // Очищаем контейнер перед добавлением новых карточек
    container.innerHTML = '';
    
    // Создаем и добавляем карточки в контейнер
    Object.values(cardsData).forEach(cardData => {
      const cardHTML = createCard(cardData);
      container.insertAdjacentHTML('beforeend', cardHTML);
    });
  }
  
  // Функция для получения карточек (заглушка для будущей реализации)
  function fetchCards() {
    // Здесь будет реализована логика получения карточек
    // например, с сервера или из localStorage
    console.log('Fetching cards data...');
    // Пока просто возвращаем существующие карточки
    return cards;
  }
  
  // Инициализация при загрузке страницы
  document.addEventListener('DOMContentLoaded', () => {
    // Получаем карточки (пока из локального объекта)
    const cardsData = fetchCards();
    
    // Рендерим карточки в контейнер
    renderCards('.card-container', cardsData);
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Данные карточек (можно добавить сколько угодно карточек)
    const products = [
      {
        id: 1,
        title: "Portal TV",
        price: "$149",
        image: "img/product1.jfif",
        description: "Smart video calling on your TV",
        buyLink: "#",
        learnLink: "#"
      },
      {
        id: 2,
        title: "Portal",
        price: "$179",
        image: "img/product2.jfif",
        description: "Smart video calling on a 10” HD display",
        buyLink: "#",
        learnLink: "#"
      },
      {
        id: 3,
        title: "Portal+",
        price: "$279",
        image: "img/product3.jfif",
        description: "Smart video calling on a 15.6” HD display",
        buyLink: "#",
        learnLink: "#"
      },
      {
        id: 4,
        title: "Portal Mini",
        price: "$129",
        image: "img/product4.jfif",
        description: "Smart video calling on an 8” HD display",
        buyLink: "#",
        learnLink: "#"
      },
      // Добавьте дополнительные карточки по необходимости
      {
        id: 5,
        title: "Portal Pro",
        price: "$349",
        image: "img/product4.jfif",
        description: "Professional video calling device",
        buyLink: "#",
        learnLink: "#"
      },
      {
        id: 6,
        title: "Portal Pro",
        price: "$349",
        image: "img/product4.jfif",
        description: "Professional video calling device",
        buyLink: "#",
        learnLink: "#"
      }
    ];

    // Элементы слайдера
    const slider = document.querySelector('.cards-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Создаем и добавляем карточки
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'cards_item';
      card.innerHTML = `
        <div class="card-body">
          <span class="card-title">${product.title}</span>
          <span class="card-subtitle">${product.price}</span>
          <div class="clearfix"></div>
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <p class="card-text">${product.description}</p>
          <div>
            <button class="btn btn-primary">Buy Now</button>
            <br>
            <a href="${product.learnLink}" class="btn-link">Learn More</a>
          </div>
        </div>
      `;
      slider.appendChild(card);
    });

    // Переменные для управления слайдером
    let currentPosition = 0;
    let cardWidth = 0;
    let visibleCards = 4; // По умолчанию 4 карточки
    
    // Функция для обновления параметров слайдера
    function updateSliderParams() {
      const firstCard = document.querySelector('.cards_item');
      if (firstCard) {
        cardWidth = firstCard.offsetWidth + 20; // + gap
      }
      
      // Определяем сколько карточек видно в зависимости от ширины экрана
      const containerWidth = document.querySelector('.slider-container').offsetWidth;
      if (containerWidth < 768) visibleCards = 2;
      if (containerWidth < 480) visibleCards = 1;
      if (containerWidth >= 768 && containerWidth < 1024) visibleCards = 3;
      if (containerWidth >= 1024) visibleCards = 4;
    }
    
    // Функция для перемещения слайдера
    function moveSlider(direction) {
      updateSliderParams();
      const maxPosition = (slider.scrollWidth - slider.parentElement.offsetWidth) * -1;
      
      if (direction === 'next') {
        currentPosition = Math.max(currentPosition - (cardWidth * visibleCards), maxPosition);
      } else {
        currentPosition = Math.min(currentPosition + (cardWidth * visibleCards), 0);
      }
      
      slider.style.transform = `translateX(${currentPosition}px)`;
      
      // Обновляем состояние кнопок
      prevBtn.disabled = currentPosition >= 0;
      nextBtn.disabled = currentPosition <= maxPosition;
    }
    
    // Инициализация слайдера
    function initSlider() {
      updateSliderParams();
      
      // Проверяем, нужны ли вообще кнопки
      if (slider.scrollWidth <= slider.parentElement.offsetWidth) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
      } else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        prevBtn.disabled = true;
        nextBtn.disabled = currentPosition <= (slider.scrollWidth - slider.parentElement.offsetWidth) * -1;
      }
    }
    
    // Обработчики событий
    nextBtn.addEventListener('click', () => moveSlider('next'));
    prevBtn.addEventListener('click', () => moveSlider('prev'));
    
    // Обработчик ресайза окна
    window.addEventListener('resize', () => {
      let resizeTimer;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initSlider();
      }, 250);
    });
    
    // Инициализируем слайдер при загрузке
    initSlider();
  });

  document.addEventListener('DOMContentLoaded', function() {
    const authButton = document.getElementById('authButton');
    const modalOverlay = document.getElementById('modalOverlay');
    const okButton = document.getElementById('okButton');
    const cancelButton = document.getElementById('cancelButton');

    // Открытие модалки
    authButton.addEventListener('click', function() {
        modalOverlay.style.display = 'block';
        document.body.classList.add('modal-open');
    });

    // Закрытие модалки
    function closeModal() {
        modalOverlay.style.display = 'none';
        document.body.classList.remove('modal-open');
    }

    // Закрытие по кнопкам
    okButton.addEventListener('click', closeModal);
    cancelButton.addEventListener('click', closeModal);

    // Закрытие по клику вне формы
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
});


window.addEventListener('DOMContentLoaded', () => {
  const preloader = document.querySelector('.preloader');
  
  // Центрирование прелоадера при любом положении скролла
  const updatePosition = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      preloader.style.top = `${scrollY}px`;
      preloader.style.height = `${window.innerHeight}px`;
  };

  // Обновляем позицию при скролле (на случай появления прелоадера после прокрутки)
  window.addEventListener('scroll', updatePosition);
  updatePosition(); // Инициализация позиции

  setTimeout(() => {
      preloader.style.opacity = '0';
      
      setTimeout(() => {
          preloader.remove();
          document.body.classList.add('loaded');
          window.removeEventListener('scroll', updatePosition);
      }, 400);
  }, 1500);
});