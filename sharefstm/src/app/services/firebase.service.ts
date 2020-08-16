import { Injectable } from '@angular/core';
//import firebase auth plugins
import { AngularFireAuth } from '@angular/fire/auth';
//import firestore database
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
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

    loginUser(email, password) { //function loginUser
          return new Promise<any>((resolve, reject) => {
        //authenticating with email & password
            this.afAuth.signInWithEmailAndPassword(email, password)
              .then(
                res => resolve(res),  //successful
                err => reject(err))  //rejected
          })
        }//end loginUser
      
      createEntry(entry)
      {
        //return this.firestore.collection('activities').add(entry);
        return new Promise((resolve,reject)=>{
    
          //let post_key=this.firestore.collection().ref().child('secret').push().key;
          //_pfaiadslahahbsd
    
          //firebase.database().ref('activities/'+post_key+'/')
          this.firestore.collection('activities').add(entry)
          .then(resp=>{
            resolve("OK");//record successfully added to root firebase
          },err=>{
            reject(err);//record failed to insert
          })
    
        })
      }//end create entry

      readActivities() {
        return this.firestore.collection("activities").snapshotChanges();
      }
    
}
