import { Injectable } from '@angular/core';
//import firebase plugins
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afAuth: AngularFireAuth
    ) { }

  //function registerUser
  registerUser(email, password) {
        return new Promise<any>((resolve, reject) => {
     
          this.afAuth.createUserWithEmailAndPassword(email, password)
            .then(
              res => resolve(res),
              err => reject(err))
        })
      }//end function registerUser
    
}
