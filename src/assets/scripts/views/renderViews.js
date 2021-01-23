import { addEventListeners } from '../dispatcher/dispatcher';

export const renderView = (fragment, element = '#root') => {
  $(element).html(fragment);
};