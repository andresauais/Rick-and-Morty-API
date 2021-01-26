import '../styles/reset.css';
import '../styles/index.css';
import { homeApp } from './store/store';
import { addEventListners } from './dispatcher/dispatcher';

$(function(){
  homeApp();
  addEventListners();
});