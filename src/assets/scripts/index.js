import '../styles/reset.css';
import '../styles/index.css';
import { homeApp } from './store/store';
import { carousel } from './views/carousel';
import { addEventListners } from './dispatcher/dispatcher';

$(function(){
  homeApp();
  addEventListners();
});