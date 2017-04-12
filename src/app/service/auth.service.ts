
import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import {Router} from '@angular/router';

// Avoid name not found warnings
declare var Auth0Lock: any;


@Injectable()
export class Auth {
  // Configure Auth0
 
  lock = new Auth0Lock('PFGYumwWpLEujPGWSAAsOKnN9BNfiHoY', 'ericmax.auth0.com', {
    languageDictionary: {
    title: "Test Bay"
  }
  });

  constructor(private router: Router) {
    // Add callback for lock `authenticated` event
   
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      if(localStorage.getItem('id_token')!=null) {
            let destination:string = "/init"
            this.router.navigate([destination], {});
        } else {
            //just loggin in - take to user profile page
            this.router.navigate(['/'], {});
        }
    });
   
  }


  public login() {
    // Call the show method to display the widget.
  console.log("Open login windows");
    this.lock.show();
  }
 
  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    this.router.navigate(['/']);
  }
}
 