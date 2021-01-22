export const home = () => {
  const template = `
  <h1>Rick And Morty</h1>
  <nav class="navbar navbar-expand-md navbar-dark">
    <li class="navbar-brand nav-item dropdown">
      <p class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Seasons
      </p>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <p class="dropdown-item">Season 1</p>
        <div class="dropdown-divider"></div>
        <p class="dropdown-item">Season 2</p>
        <div class="dropdown-divider"></div>
        <p class="dropdown-item">Season 3</p>
        <div class="dropdown-divider"></div>
        <p class="dropdown-item">Season 4</p>
      </div>
    </li>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Characters</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Locations</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  `;
  return template;
};