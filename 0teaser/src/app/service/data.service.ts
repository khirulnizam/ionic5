import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public database: SQLiteObject;
  aduantable:string;
  fakedata:string;

  async createTables(){
    try {
        await this.database.executeSql(this.aduantable, []);
    }catch(e){
        console.log("Error !");
    }
  }//createTables
  async createDummydata(){
    try {
        await this.database.executeSql(this.fakedata, []);
    }catch(e){
        console.log("Error !");
    }
  }
  
  

      constructor(public sqlite :SQLite) {

        this.fakedata="INSERT INTO aduan(id, tajuk, deskripsi,lokasi)"+
          "VALUES('1','Sungai kotor','Makanan', 'Bangi')"+
          "INSERT INTO aduan(id, tajuk, deskripsi,lokasi)"+
          "VALUES('2','Hutan tercemar','Minumaman','Kajang');";

        this.aduantable = "CREATE TABLE IF NOT EXISTS  aduan ("+
          "id INTEGER PRIMARY KEY,"+
          "tajuk TEXT,"+
          "deskripsi TEXT,"+
          "lokasi TEXT) ;";

        this.sqlite.create({name:"data2.db", location:"default"})
        .then((db: SQLiteObject) => {
                this.database = db;
                this.createTables();
                this.createDummydata();
            }, (error) => {
                console.log("ERROR: ", error);
        }); 

  }//end constructor

}
