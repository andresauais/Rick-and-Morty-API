import axios from 'axios';
import { carousel } from '../views/carousel';
import { carouselContainer } from '../views/components/containers/carouselContainer';
import { episodes } from '../views/components/containers/episodes';
import { renderView } from '../views/renderViews';
import { loadCharacterInfo, loadEpisode, loadLocationInfo } from "../store/store";
import { getCharacters, getEpisode } from '../API request/get';
import { characters } from '../views/components/containers/characters';

export function filterResp (data, season, eArray) {
  data.results.forEach(element => {
    if(parseInt(element.episode.substring(1, 3))==season){
      var episodeNumber = parseInt(element.episode.substring(4,6));
      eArray.push({
        number: episodeNumber,
        title: element.name,
        date: element.air_date,
        id: element.id,
        episode: element.episode
      });
    }
  });
  if(data.info.next != null){
    axios.get(data.info.next).then(resp =>{
      filterResp(resp.data, season, eArray);
    });
  }
  else{
    renderView(carouselContainer, "#infoContainer");
    renderView(createList(eArray, episodes), "#carouselInner");
    $(".carousel-item")[0].setAttribute("class", "carousel-item active");
    carousel();
    $('.episode-card__button').on("click", loadEpisode);
  }
}

export const createList = (data, component) => {
  const fragment = $(document.createDocumentFragment());
  data.forEach(element => {
    $(fragment).append(component(element));
  });
  return fragment;
};

export const filterCharacters = (data, cArray) =>{
  renderView(carouselContainer, "#infoContainer");
  data.forEach(element =>{
    getCharacters(element).then(resp =>{
      cArray.push({
        name: resp.data.name,
        image: resp.data.image,
        status: resp.data.status,
        species: resp.data.species,
        origin: resp.data.origin.name,
        id: resp.data.id
      });
      renderView(createList(cArray, characters), "#carouselInner");
      carousel();
      $(".carousel-item")[0].setAttribute("class", "carousel-item active");
      $(".characters-card__button").on("click", loadCharacterInfo);
      $(".origin-info").on("click", loadLocationInfo);
    })
  })
}

export const filterCharactersResp = (data, allCharArray) =>{
  data.results.forEach(elem =>{
    allCharArray.push({
      id: elem.id,
      name: elem.name,
      image: elem.image,
      status: elem.status,
      species: elem.species,
      origin: elem.origin.name,
      location: elem.location.name
    })
  })
  if(data.info.next != null){
    axios.get(data.info.next).then(resp =>{
      filterCharactersResp(resp.data, allCharArray);
    });
  }
  else{
    renderView(carouselContainer, "#infoContainer");
    renderView(createList(allCharArray, characters), "#carouselInner");
    carousel();
    $(".episodeInfoContainer").empty();
    $(".carousel-item")[0].setAttribute("class", "carousel-item active");
    $(".characters-card__button").on("click", loadCharacterInfo);
    $(".origin-info").on("click", loadLocationInfo);
    $(".characters-card__button").on("click", loadCharacterInfo);
  }
}

export const filterLocationsResp = (data, allLocArray) =>{
  data.results.forEach(elem =>{
    allLocArray.push({
      id: elem.id,
      name: elem.name,
      type: elem.type,
      dimension: elem.status,
      residents: elem.residents,
      numberResidents: elem.residents.length
    })
  })
  if(data.info.next != null){
    axios.get(data.info.next).then(resp =>{
      filterLocationsResp(resp.data, allLocArray);
    });
  }
  else{
    //TODO desplegar los personajes todavía no sé como
  }
}

export const filterEpisodes = (data, episodesArray) =>{
  renderView(carouselContainer, "#infoContainer");
  data.forEach(element =>{
    getEpisode(element).then(resp =>{
      var episodeNumber = parseInt(resp.data.episode.substring(4,6));
      episodesArray.push({
        number: episodeNumber,
        title: resp.data.name,
        date: resp.data.air_date,
        id: resp.data.id,
        episode: resp.data.episode
      });
      renderView(createList(episodesArray, episodes), "#carouselInner");
      carousel();
      $(".carousel-item")[0].setAttribute("class", "carousel-item active");
      $('.episode-card__button').on("click", loadEpisode);
    })
  })
}