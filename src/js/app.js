import * as flsFunction from "./function.js";
import  {burger} from './burger.js';
import WOW from "../../node_modules/wowjs/dist/wow.js";
document.addEventListener("DOMContentLoaded", function () {
  flsFunction.isWebp();
  burger();
  new WOW.WOW({
    mobile: false,
  }).init();
});
