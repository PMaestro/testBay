import { Component, OnInit } from '@angular/core';
import { Auth } from '../service/auth.service';
import {Router} from '@angular/router';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[Auth]
})
export class HomeComponent implements OnInit {

  constructor(private auth: Auth, private route: Router) { }

  ngOnInit() {
    if(this.auth.authenticated()){
      //redirect
      let destination:string = "/init";
      this.route.navigate([destination]);
    }
    
  }

}
