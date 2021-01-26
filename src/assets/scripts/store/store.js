import { getAll, getEpisodes, getInfo, getCharacter, getLocations } from "../API request/get";
import { filterResp, filterCharacters, filterCharactersResp, filterLocationsResp, filterEpisodes } from "../helpers/helpers";
import { home } from "../views/components/home";
import { renderView } from "../views/renderViews";
import { episodeinfo } from "../views/components/containers/episodeinfo";
import { characterinfo } from "../views/components/containers/characterinfo";
import { location } from "../views/components/containers/location";
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
            $("#navbarDropdown").text("Season 1");
            var eArray = [];
            filterResp(resp.data, 1, eArray);
            break;
          case "Season 2":
            $("#navbarDropdown").text("Season 2");
            var eArray = [];
            filterResp(resp.data, 2, eArray);
            break;
          case "Season 3":
            $("#navbarDropdown").text("Season 3");
            var eArray = [];
            filterResp(resp.data, 3, eArray);
            break;
          case "Season 4":
            $("#navbarDropdown").text("Season 4");
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
        $("#navbarDropdown").text("Seasons");
        getAll("character").then(resp =>{
          var allCharArray = [];
          filterCharactersResp(resp.data, allCharArray);
        })
        break;
      case "locations":
        $("#navbarDropdown").text("Seasons");
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
  $("#navbarDropdown").text("Seasons");
  getCharacter(e.target.id).then(resp =>{
    renderView(characterinfo(resp.data), "#episodeInfoContainer");
    $(".origin-info").on("click", loadLocationInfo);
    filterEpisodes(resp.data.episode, []);
  })
}

export const loadLocationInfo = e =>{
  $("#navbarDropdown").text("Seasons");
  getAll("location").then(resp=>{
    var allLocationArray = []
    filterLocationsResp(resp.data, allLocationArray);
    allLocationArray.forEach(elem =>{
      if(e.target.innerText == elem.name){
        getLocations(elem.id).then(resp =>{
          renderView(location(resp.data), "#episodeInfoContainer");
          filterCharacters(resp.data.residents, []);
        })
      }
    })
  })
}
