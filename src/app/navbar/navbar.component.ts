import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public myAuth: AuthService) { }



  logout() {
    this.myAuth.logout();

  }
}
