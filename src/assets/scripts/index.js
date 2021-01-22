import '../styles/reset.css';
import '../styles/index.css';
import { homeApp } from './store/store';
import { carousel } from './views/carousel';

$(function(){
  homeApp();
  $('#recipeCarousel').carousel({
    interval: 10000
  });
  carousel();
});