export default class SorView {
    #obj = {};
  
    constructor(index, obj, szuloElem) {
      this.#obj = obj;
  
      this.index = index;
      this.szuloElem = szuloElem;
      this.sorElem = this.szuloElem.find("tr:last");
      this.songIdElem = this.sorElem.find(".song_id");
      this.titleElem = this.sorElem.find(".title");
      this.nameElem = this.sorElem.find(".name");
      this.DateElem = this.sorElem.find(".date");
      
  
      this.htmlOsszerak();
  
      
      this.torlesElem = this.szuloElem.find(".torles:last");
      this.mentesElem = this.sorElem.children("td").children(".mentes");
  
      this.torlesElem.on("click", () => {
        this.trigger("sorTorles");
      });
  
      this.mentesElem.on("click", (event) => {
        
        
        let list2 =  [];
        let list1 = ['song_id', 'title', 'name', 'date'];
        list2.push(
          this.songIdElem[0].innerText,
          this.titleElem[0].innerText,
          this.nameElem[0].innerText,
          this.DateElem[0].innerText
        );
        
        console.log(list1, list2);
       
        this.#obj = toObject(list1, list2);
        this.trigger("sorMentes", this.#obj);
  
      });
  
      function toObject(list1, list2){
       const obj = {};
       list1.forEach( (element, index) => {obj[element] = list2[index]} )
       console.log(obj)
       return obj;
    
      }
  
  
    }
  
  
    trigger(e){
      
      const esemenyem = new CustomEvent(e, { detail: this.#obj });
    
      window.dispatchEvent(esemenyem);
    }
  
    htmlOsszerak(){
      let txt = "<tr class='sorok'>";
      for (const key in this.#obj) {
        
        txt += `<td contenteditable="true" class="${key}">${this.#obj[key]}</td>`;
      }
  
      txt += `<td><button class="torles">Törlés</button></td><td><button class="mentes">Mentés</button></td>`;
      txt += "</tr>";
    
  
      this.szuloElem.append(txt);
    }
  
  }
  
  
  
  