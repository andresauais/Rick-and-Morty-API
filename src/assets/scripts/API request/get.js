import axios from 'axios';

const url = 'https://rickandmortyapi.com/api/';

export const getInfo = () =>{
  axios.get(url)
  .then(resp =>{
    console.log(resp.data);
  })
}

export const getEpisodes = (episode) => {
  return axios.get(`${url}episode/${episode}`);
}
export const getEpisode = (episodeUrl) => {
  return axios.get(episodeUrl);
}

// export const getCharacters = (characterId) => {
//   return axios.get(`${url}character/${characterId}`);
// }
export const getCharacters = (characterUrl) => {
  return axios.get(characterUrl);
}

export const getCharacter = (character) => {
  return axios.get(`${url}character/${character}`);
}
export const getLocations = (locationId) => {
  return axios.get(`${url}location/${locationId}`);
}
export const getLocation = (locationUrl) => {
  return axios.get(locationUrl);
}

export const getAll = (option) => {
  return axios.get(url + option);
}
  // axios.all([getEpisodes(1), getEpisodes(2), getEpisodes(3)]).then((res)=>{
  //   console.log(res[0].data.characters[0]);
  // })