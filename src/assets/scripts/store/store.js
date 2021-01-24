import { getAll, getCharacters, getEpisodes, getInfo, getCharacter } from "../API request/get";
import { filterResp, createList, filterCharacters, filterCharactersResp, filterLocationsResp, filterEpisodes } from "../helpers/helpers";
import { episodes } from "../views/components/containers/episodes";
import { home } from "../views/components/home";
import { renderView } from "../views/renderViews";
import { carouselContainer } from "../views/components/containers/carouselContainer"
import { episodeinfo } from "../views/components/containers/episodeinfo";
import { characters } from "../views/components/containers/characters";
import { characterinfo } from "../views/components/containers/characterinfo";
export const homeApp = () => {
  renderView(home);
};

export const changeSeason = () =>{
  $(".dropdown-item").on("click", (e)=>{
    $('#seasonTitle').text(e.target.innerText);
    $('#episodeInfoContainer').empty();
      getAll("episode").then(resp =>{
        switch(e.target.innerText){
          case "Season 1":
            var eArray = [];
            filterResp(resp.data, 1, eArray);
            break;
          case "Season 2":
            var eArray = [];
            filterResp(resp.data, 2, eArray);
            break;
          case "Season 3":
            var eArray = [];
            filterResp(resp.data, 3, eArray);
            break;
          case "Season 4":
            var eArray = [];
            filterResp(resp.data, 4, eArray);
            break;
        }
      }
    );
  });

  $(".nav-link").on("click", (e)=>{
    switch(e.target.innerText){
      case "characters":
        getAll("character").then(resp =>{
          var allCharArray = [];
          filterCharactersResp(resp.data, allCharArray);
        })
        break;
      case "locations":
        getAll("location").then(resp=>{
          var allLocationArray = []
          filterLocationsResp(resp.data, allLocationArray);
        })
        break;
    }
  })
}

export const loadEpisode = e => {
  getEpisodes(e.currentTarget.id).then(resp=>{
    renderView(episodeinfo(resp.data), "#episodeInfoContainer");
    var cArray = [];
    filterCharacters(resp.data.characters, cArray);
  })
}

export const loadCharacterInfo = e =>{
  getCharacter(e.target.id).then(resp =>{
    renderView(characterinfo(resp.data), "#episodeInfoContainer");
    //TODO fix this
    filterEpisodes(resp.data.episode, []);
  })
}
