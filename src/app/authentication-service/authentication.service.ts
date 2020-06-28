import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  constructor() { }

  login(username: string, password: string) {
    if (username != '' && password != '') {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('token', username);
      return true;
    }
    return false;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
  }
}