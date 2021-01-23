import { getAll, getEpisodes, getInfo } from "../API request/get";
import { filterResp, createList } from "../helpers/helpers";
import { episodes } from "../views/components/containers/episodes";
import { home } from "../views/components/home";
import { renderView } from "../views/renderViews";
import { carouselContainer } from "../views/components/containers/carouselContainer"

export const homeApp = () => {
  renderView(home);
};

export const changeSeason = () =>{
  $(".dropdown-item").on("click", (e)=>{
    $('#seasonTitle').text(e.target.innerText);
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
        const charactersInfo = getAll("character");
        console.log(charactersInfo);
        break;
      case "locations":
        const locationsInfo = getAll("location");
        console.log(locationsInfo);
        break;
    }
  })
}

