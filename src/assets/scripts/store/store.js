import { getAll, getInfo } from "../API request/get";
import { episodes } from "../views/components/containers/episodes";
import { home } from "../views/components/home";
import { renderView } from "../views/renderViews";

export const homeApp = () => {
  renderView(home);
  getInfo();
  getAll();
};