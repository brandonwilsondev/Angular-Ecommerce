import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showSpinner: boolean;
  constructor(private myAuth: AuthService) { }


  login() {
    this.showSpinner = true;
    this.myAuth.login().then(res => {
      console.log(res);
      if (res) {
        this.showSpinner = false;
      }
    });
  }


}
