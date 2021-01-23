import { carouselContainer } from "./containers/carouselContainer";

export const home = () => {
  const template = `
  <h1>Rick And Morty</h1>
  <nav class="navbar navbar-expand-md navbar-dark">
    <li class="navbar-brand nav-item dropdown">
      <p class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Seasons
      </p>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <p class="dropdown-item" data-value="Season 1">Season 1</p>
        <div class="dropdown-divider"></div>
        <p class="dropdown-item" data-value="Season 2">Season 2</p>
        <div class="dropdown-divider"></div>
        <p class="dropdown-item" data-value="Season 3">Season 3</p>
        <div class="dropdown-divider"></div>
        <p class="dropdown-item" data-value="Season 4">Season 4</p>
      </div>
    </li>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" data-value="characters">
          <a class="nav-link" href="#">characters</a>
        </li>
        <li class="nav-item" data-value="locations">
          <a class="nav-link" href="#">locations</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><p href="#" id="seasonTitle"></p></li>
  </ol>
</nav>
  <section id="episodeInfoContainer"></section>
  <section id="infoContainer"></section>
  `;
  return template;
};