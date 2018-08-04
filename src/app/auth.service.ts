import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
    // before async pipe
    // this.afAuth.authState.subscribe(user => this.user = user);
    this.user$ = this.afAuth.authState;
  }

  login() {
    const googleAuth = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
