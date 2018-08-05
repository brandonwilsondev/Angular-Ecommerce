import { UserService } from './user.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/switchMap';
// import { pipe } from 'rxjs';
// import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard {

  // facing issues with firebase hence TODO: // authorization of admin routes we'll do later
  // implements CanActivate {

  constructor(private myAuth: AuthService, private userServ: UserService) { }

  // canActivate(): Observable<boolean> {

  //   return this.myAuth.user$
  //     .switchMap(user => this.userServ.get(user.uid))
  //     .map(appUser => appUser.isAdmin);


  // }

}



/*
return this.myAuth.user$
      .pipe(

        switchMap(userFromFirebaseObject => this.userServ.get(userFromFirebaseObject.uid))
          .map(x => x.isAdmin)

      )

*/




