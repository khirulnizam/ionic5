import { Injectable } from '@angular/core';
// authentication.service.ts
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private afAuth: AngularFireAuth) { }

  //daftar penguna
  registerUser(email,password) {
    return new Promise<any>((resolve, reject) => {
 
      this.afAuth.createUserWithEmailAndPassword(email, password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }//end register

  loginUser(email, password) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }//end loginUser
}//end LoginPage
