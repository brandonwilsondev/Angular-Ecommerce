import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private myAuth: AuthService, private router: Router) { }
  canActivate() {
    // pipe operator RxJs 6 .. phheewwww ! need to Google more
    return this.myAuth.user$.pipe(map(user => {
      // tslint:disable-next-line:curly
      if (user) return true;
      this.router.navigate(['/login']);
      return false;
    }));

  }
}
