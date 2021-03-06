export const carouselContainer = () =>{
  const template = `
  <div id="episodesCarousel" class="carousel slide w-100" data-ride="carousel">
    <div class="carousel-inner w-100" role="listbox" id="carouselInner">
    </div>
    <a class="carousel-control-prev w-auto" href="#episodesCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next w-auto" href="#episodesCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
  `;
  return template;
}