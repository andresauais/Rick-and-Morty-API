export const episodes = ({number,title, date, id, episode}) => {
  const template = `
  <div class="carousel-item">
    <div class="col-md-4 episode-card">
        <div class="card card-body">
          <p class="episode-card__number">${number} (${episode})</p>
          <p class="episode-card__title">${title}</p>
          <p class="episode-card__date">${date}</p>
          <button class="episode-card__button" id="${id}">More Info</button>
        </div>
    </div>
  </div>
  `;
  return template;
};