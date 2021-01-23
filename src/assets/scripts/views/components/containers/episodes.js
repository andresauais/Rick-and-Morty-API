export const episodes = ({number,title, date}) => {
  const template = `
  <div class="carousel-item">
    <div class="col-md-4 episode-card">
        <div class="card card-body">
          <p class="episode-card__number">${number}</p>
          <p class="episode-card__title">${title}</p>
          <p class="episode-card__date">${date}</p>
          <button class="episode-card__button">More Info</button>
        </div>
    </div>
  </div>
  `;
  return template;
};