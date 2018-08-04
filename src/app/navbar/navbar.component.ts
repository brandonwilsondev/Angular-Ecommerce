import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(info => {
      console.log(info);
    });
  }



  logout() {
    this.afAuth.auth.signOut();

  }
}
