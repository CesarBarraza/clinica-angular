import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlertService } from 'ngx-alerts';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSubject: BehaviorSubject<User>
  isLogged: Observable<User>
  userToken = new BehaviorSubject<string>(null)

  constructor(private http: HttpClient, private alert: AlertService) { 
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))
    this.isLogged = this.userSubject.asObservable();
  }

get userTokenValue(): string{
  return this.userToken.getValue();
}

  loginUser(user: User): Observable<any> {
   
    return this.http.post<any>(environment.URL_API+'/auth/login', user).pipe(
      map((data:any) =>{
         
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('user', JSON.stringify(data));
        this.userToken.next(data.token)
        this.userSubject.next(data)
        return data
      }),
    catchError((error: any) => of(alert(error.error.message))))
  }

  logout(){
    localStorage.clear();
    this.userSubject.next(null);
  }
}

