import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private loggedIn = false;

  private LOGIN_KEY = 'LOGIN';

  constructor() {
      this.loggedIn = !!sessionStorage.getItem(this.LOGIN_KEY);
  }

  login(username: string, password: string): Observable<boolean>{
    if (username === 'Thomas' && password){
      this.loggedIn = true;
      sessionStorage.setItem('LOGIN', 'true');
      return of(true);
    }
    return throwError('Unauthorized user');
  }

  get isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
