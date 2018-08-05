import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { UserService } from './user.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private myAuth: AuthService, private router: Router, private userServ: UserService) {

    this.myAuth.user$.subscribe(user => {
      if (user) {
        userServ.save(user);
        const url = sessionStorage.getItem('returnUrl');
        this.router.navigateByUrl(url);
      }
    });

  }

}
