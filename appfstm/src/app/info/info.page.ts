import { Component, OnInit } from '@angular/core';
//import camera library
import {Camera,CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})

export class InfoPage implements OnInit {
  //define camera object from class Camera
  constructor(private camera:Camera) { }

  ngOnInit() {
  }
  gambar:any;//to hold picture file
  useCamera(){
      //code to shoot image camera
      // https://ionicframework.com/docs/native/camera
      const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation:true,
      saveToPhotoAlbum:true
    }
  

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.gambar = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
      // Handle error
        alert('Camera failed to load');
      });
    }//end useCamera()
}
