export const characterinfo = ({name, origin, gender, species, status, image}) => {
  const template = `
  <section>
    <section>
      <div class="card mb-3">
        <img class="card-img-top" src="${image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${origin.name}</p>
          <p class="card-text"><small class="text-muted">${gender}|| ${species} || ${status}</small></p>
        </div>
      </div>
    </section>
    <section></section>
  </section>
  `;
  return template;
};