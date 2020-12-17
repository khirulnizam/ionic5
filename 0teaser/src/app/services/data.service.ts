import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private username:any;
  private latitude:number;
  private longitude:number;

  constructor() { }

  getusername(){//method
    return this.username;
  }
  setusername(loginusername:any){//data shared globally
    this.username=loginusername;
  }
}
