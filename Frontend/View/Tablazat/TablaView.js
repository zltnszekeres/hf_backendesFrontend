import { adatLeiro } from "../adatLeiro.js";
import FejlecView from "./FejlecView.js";
import SorView from "./SorView.js";

export default class TablaView {
  #list = [];
  constructor(list, szuloElem) {
    this.#list = list;

    
    new FejlecView(adatLeiro, $("thead"));
    this.sorMegjelenit();
  }

  sorMegjelenit() {
    
    this.#list.forEach((elem, index) => {
      new SorView(index, elem, $("tbody"));
    });
  }
}