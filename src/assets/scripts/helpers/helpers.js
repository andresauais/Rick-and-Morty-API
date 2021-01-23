import axios from 'axios';
import { carousel } from '../views/carousel';
import { episodes } from '../views/components/containers/episodes';
import { renderView } from '../views/renderViews';

export function filterResp (data, season, eArray) {
  data.results.forEach(element => {
    if(parseInt(element.episode.substring(1, 3))==season){
      var episodeNumber = parseInt(element.episode.substring(4,6));
      eArray.push({
        number: episodeNumber,
        title: element.name,
        date: element.air_date
      });
    }
  });
  if(data.info.next != null){
    axios.get(data.info.next).then(resp =>{
      filterResp(resp.data, season, eArray);
    });
  }
  else{
    renderView(createList(eArray, episodes), "#carouselInner");
    $(".carousel-item")[0].setAttribute("class", "carousel-item active");
    carousel();
  }
}

export const createList = (data, component) => {
  const fragment = $(document.createDocumentFragment());
  data.forEach(element => {
    $(fragment).append(component(element));
  });
  return fragment;
};