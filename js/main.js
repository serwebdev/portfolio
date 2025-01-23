const portfolioCards = document.querySelector('.portfolio__cards');
const portfolioLinkBack = document.querySelector('.portfolio__link-back');

const url = new URL(window.location.href);
const paramsId = url.searchParams.get('id');

let cardsFilter = [];
if (paramsId) {
  cardsFilter = cards.filter(item => item.id === Number(paramsId));
  portfolioLinkBack.classList.add('show');
} else {
  cardsFilter = cards;
  portfolioLinkBack.classList.remove('show');
}

// console.log(cardsFilter);

cardsFilter.reverse();

cardsFilter.forEach(card => {
  const htmlCard = `
    <div class="portfolio__card">
      <img src="img/${card.img}" alt="Портфолио" class="portfolio__card-img">
      <a href="${card.link}" class="portfolio__overlay" target="_blank">
          <div class="portfolio__card-top">
              <div class="portfolio__card-pages">Страниц: <span>${
                card.pageCount
              }</span></div>
              <div class="portfolio__card-burger"><span></span></div>
          </div>
          <h4 class="portfolio__card-bottom">${card.title}</h4>
      </a>
      <nav class="menu">
          <ul class="menu__list">
          ${card.pages
            ?.map(page => {
              return `
                    <li class="menu__item">
                      <a href="${page.link}" class="menu__link" target="_blank">${page.title}</a>
                    </li>
                    `;
            })
            .join('')}
          </ul>
          <button class="menu__close"><span></span></button>
      </nav>
    </div>
    `;

  portfolioCards.insertAdjacentHTML('beforeend', htmlCard);
});

// Меню burger ===========================================
const cardArray = document.querySelectorAll('.portfolio__card');

cardArray.forEach(card => {
  const burgerMenu = card.querySelector('.portfolio__card-burger');
  const menu = card.querySelector('.menu');
  const closeBtn = card.querySelector('.menu__close');

  burgerMenu.addEventListener('click', e => {
    e.preventDefault();
    menu.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});
