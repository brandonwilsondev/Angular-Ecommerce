import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  spinner: boolean;
  constructor(private myAuth: AuthService) { }


  login() {

    this.spinner = true;
    this.myAuth.login();

  }


}
