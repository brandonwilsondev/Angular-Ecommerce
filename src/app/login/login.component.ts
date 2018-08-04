import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showSpinner: boolean;
  constructor(private afAuth: AngularFireAuth) {

  }
  ngOnInit() {

  }

  login() {
    this.showSpinner = true;
    const googleAuth = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then( res => {
      console.log(res);
      if (res) {
        this.showSpinner = false;
      }
    });
  }


}
