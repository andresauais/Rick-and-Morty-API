export const characterinfo = ({name, origin, gender, species, status, image}) => {
  const template = `
  <section>
    <section id="characterCardInfo">
      <div class="card flex-row flex-wrap">
        <div class="card-header border-0 character-card-info__img">
          <img class="card-img-top" src="${image}" alt="Card image cap">
        </div>
        <div class="card-block px-2 character-card-info__info">
          <h5 class="card-title">${name}</h5>
          <p class="card-text origin-info">${origin.name}</p>
          <p class="card-text"><small class="text-muted">${gender}|| ${species} || ${status}</small></p>
        </div>
        <div class="w-100"></div>
      </div>
    </section>
    <section></section>
  </section>
  `;
  return template;
};