import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user$: Observable<firebase.User>; //  -- removing bcz map operator was not working

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router) {
    // before async pipe
    // this.afAuth.authState.subscribe(user => this.user = user);
    this.user$ = this.afAuth.authState;
  }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    sessionStorage.setItem('returnUrl', returnUrl);

    const googleAuth = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
