import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
 username:any;
  constructor(private router: Router, 
      private acrouter: ActivatedRoute) { 
      this.username=this.acrouter.snapshot.params.username;
      alert ("Selamat datang "+this.username);
  }

  ngOnInit() {
  }

}
