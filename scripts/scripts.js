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