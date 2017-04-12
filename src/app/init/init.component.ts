import { Component, OnInit } from '@angular/core';
import { Auth } from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css'],
  providers:[Auth]
})
export class InitComponent implements OnInit {

   constructor(private auth: Auth, private route: Router) { }

  ngOnInit() {
    if(!this.auth.authenticated()){
      let destination:string = "/";
      this.route.navigate([destination]);
    }
  }

}
