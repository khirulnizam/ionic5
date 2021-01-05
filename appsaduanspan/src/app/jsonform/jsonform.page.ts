import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-jsonform',
  templateUrl: './jsonform.page.html',
  styleUrls: ['./jsonform.page.scss'],
})
export class JsonformPage implements OnInit {
  data:any={};
  aduandata:any;
  headers:HttpHeaders;
  urlinsert:any="http://khirulnizam.com/training/aduaninsert.php";
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  hantaraduan(){
    this.aduandata={
      'tajuk':this.data.tajuk,
      'latitude':this.data.latitude,
      'longitude':this.data.longitude,
    };
    //headers
    this.headers=new HttpHeaders();
    this.headers.append('ContentType', 'application/json');
    //transmit to server
    this.http.post(this.urlinsert,this.aduandata,{headers:this.headers})
      .subscribe(data=>{
        console.log('berjaya');
    },error=> {
      console.log('error');
      console.log(error);
    });

  }//hantaraduan
}
