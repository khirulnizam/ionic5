import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
//observable
//import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {

  constructor(private httpClient: HttpClient ) { 
    this.getData();
  }
  //aduan:any;
  tajuk:any;
  latitude:any;
  longitude:any;
  responses:any;
  //map:Observable;

  
  ngOnInit() {
  }

  hantaraduan(){
    var headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json' );
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    //const requestOptions = new RequestOptions({ headers: headers });

    let postData = {
            'tajuk': this.tajuk,
            'latitude': this.latitude,
            'longitude': this.longitude
    }//postdata

    console.log("JSON string");
    console.log(JSON.stringify(postData));

    this.httpClient.post("https://khirulnizam.com/training/aduaninsert.php", postData,{headers:headers})
       .subscribe(data => {
         console.log("Berjaya: ");
         console.log(data);
        }, error => {
          console.log("Ralat: ");
         console.log(error);
       });
       //refresh rekod display
       this.getData();
  }//hantaraduan

  getData() {
    this.httpClient.get('https://khirulnizam.com/training/aduanlist.php').subscribe((response) => {
    console.log(response);
    this.responses=response;
  });
}

}
