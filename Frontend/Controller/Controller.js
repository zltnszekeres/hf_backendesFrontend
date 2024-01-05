import DataService from "../Model/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";


export default class  Controller{
    constructor(){
        this.dataService=new DataService();
        

        this.dataService.getData("api/songs", this.megjelenit)
        


        
        $(window).on("sorTorles",  (e) => {
            
            this.dataService.deleteData("api/songs", e.detail.song_id, this.hibaCallback, this.frissit)
        })



        $(window).on("ujAdatHozzaAdasa", (e)=>{
           this.dataService.postData(e.detail,"api/songs", ()=>this.megjelenit, this.frissit )
        })



        $(window).on("sorMentes", (e)=>{
            
             this.dataService.putData("api/songs", e.detail.song_id, e.detail,this.hibaCallback , this.frissit)
         })
        
    }



    frissit(){
        location.reload();

    }

    hibaCallback(err){
        console.log(err)
        


    }

    megjelenit(list){
        
        $(".adatok").html("<table class='table table-striped'><thead></thead><tbody></tbody></table>")
        new TablaView(list, $("table"))
    }
}