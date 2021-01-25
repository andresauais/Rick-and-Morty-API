export const characters = ({name, image, status, species, origin, id}) => {
  const template = `
  <div class="carousel-item">
    <div class="col-md-4">
      <div class="card card-body characters-card">
        <img class="card-img-top" src="${image}" alt="">
          <div class="card-body">
            <h4>${name}</h4>
            <p class="origin-info">${origin}</p>
            <p>${species} || ${status}</p>
            <button class="characters-card__button" id="${id}">More Info</button>
          </div>
      </div>
    </div>
</div>
  `;
  return template;
};