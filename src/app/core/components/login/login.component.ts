import { AuthService } from './../../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'media-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<boolean>();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
  }

  ngOnInit(): void {
  }

  login(login: { username: string; password: string}){
      this.authService.login(login.username, login.password)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(isAuthorized => {
        if (isAuthorized){
            this.router.navigate(['tvshows']);
        }
      }, error => {
        console.log(error);
      });
  }

}
