import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  //password:any;
  //email:any;
  public userloggedin:any;

  constructor(private afAuth:AngularFireAuth,
    private firestore:AngularFirestore) { }

  loginUser(email, password) { //function loginUser
    return new Promise<any>((resolve, reject) => {
    //authenticating with email & password
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then(
          res => resolve(res), //attempt successful
          err => reject(err))  //attempt rejected
    })
  }//end loginUser

  simpanaduan(entry){
    //return this.firestore.collection('activities').add(entry);
    return new Promise((resolve,reject)=>{
    
      //firebase.database().ref('activities/'+post_key+'/')
      this.firestore.collection('butiranaduan').add(entry)
      .then(resp=>{
        resolve("OK");//record successfully added to root firebase
      },err=>{
        reject(err);//record failed to insert
      })

    })
  }//end simpanaduan

  senaraiaduan() {
    //fetch all records
      return this.firestore.collection('butiranaduan')
        .snapshotChanges();
    }
}//end firebase service
