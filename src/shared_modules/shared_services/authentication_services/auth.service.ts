import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { userInfo } from 'src/shared_modules/shared/classes/user-info';
import { userLogin } from 'src/shared_modules/shared/classes/user-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  urlPost: string = 'https://route-egypt-api.herokuapp.com/signup';
  urlLogin: string = 'https://route-egypt-api.herokuapp.com/signin';

  addUser(user: userInfo) {
    return this.http.post(this.urlPost, user).pipe(
      catchError((error) => {
        return throwError(() => error.message || 'some error from server ');
      })
    );
  }

  login(userLogin: userLogin) {
    return this.http.post(this.urlLogin, userLogin).pipe(
      catchError((error) => {
        return throwError(() => error.message || 'some error from server ');
      })
    );
  }
}
