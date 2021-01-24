export const location = ({name, type, dimension}) => {
  const template = `
  <section>
    <h3>${name}</h3>
    <h3>${type}</h3>
    <h4>${dimension}</h4>
    <section id="episodeCharacters"></section>
  </section>
  `;
  return template;
};