export const episodeinfo = ({name, air_date, episode}) => {
  const template = `
  <section>
    <h3>${name}</h3>
    <h3>${episode}</h3>
    <h4>${air_date}</h4>
    <section id="episodeCharacters"></section>
  </section>
  `;
  return template;
};