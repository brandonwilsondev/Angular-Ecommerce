import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private myAuth: AuthService, private router: Router) { }

  // adding 2 param -->
  //  route : ActivatedRouteSnaphot
  //  state : RouterStateSnapshot
  // now we gonna use state

  canActivate(route, state: RouterStateSnapshot) {

    // pipe operator RxJs 6 .. phheewwww ! need to Google more
    return this.myAuth.user$.pipe(map(user => {

      // tslint:disable-next-line:curly
      if (user) return true;

      // if no user access then navigate and return false
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }));

  }
}
