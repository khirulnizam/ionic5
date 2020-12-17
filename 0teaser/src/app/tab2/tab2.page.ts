import { Component } from '@angular/core';
//camera options library
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
//import { DataService } from '../service/data.service';
import { Geolocation} from '@capacitor/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  tajuk:any;
  deskripsi:any;
  lokasi:any;
  base64Image:any;
  negeri:any;
  latitude: any;
  longitude: any;

  constructor(private camera: Camera ) {
    //geolocation
    this.getLocation();

    //tab1.page.ts borang
    //array assignment
    this.negeri =['Selangor','Johor', 'Melaka'];

    //display array value
    for(var x=0;x<3 ;x++){
      console.log(this.negeri[x]);
    }
    //foreach
    this.negeri.forEach(n => {
      console.log(n);
    });
  }

  //geolocation
  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
  }
  

  //capture data from input
  kumpuldata(){
    alert("Tajuk Aduan: "+this.tajuk);
    console.log("Tajuk Aduan: "+this.tajuk);
  }

  //camera options
  tangkapgambar(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation:false,
      saveToPhotoAlbum:true,
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     //console.log("Kamera gagal berfungsi");
     alert("Kamera gagal berfungsi");
    });
  }
}
