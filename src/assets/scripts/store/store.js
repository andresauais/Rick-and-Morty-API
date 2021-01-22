import { getAll, getInfo } from "../API request/get";
import { home } from "../views/components/home";
import { renderView } from "../views/renderViews";

export const homeApp = () => {
  renderView(home);
  getInfo();
  getAll();
};