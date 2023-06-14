const portfolioCards = document.querySelector('.portfolio__cards');

cards.forEach(card => {
  const htmlCard = `
    <div class="portfolio__card">
        <a href="${card.link}" class="portfolio__card-link"></a>
        <img src="img/${card.img}" alt="Портфолио" class="portfolio__card-img">
        <div class="portfolio__overlay">
            <p class="portfolio__card-top">Страниц: <span>${card.pages}</span></p>
            <h4 class="portfolio__card-bottom">${card.title}</h4>
        </div>
    </div>
`;

  portfolioCards.insertAdjacentHTML('beforeend', htmlCard);
});
