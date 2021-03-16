import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginIntercepService implements HttpInterceptor{

  constructor(private service: UserService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.url.includes('pacientes')){
      const userToken = this.service.userTokenValue
      const autReq = req.clone({
        setHeaders: {
          auth: userToken,
        }
      })
      return next.handle(autReq);
    }
      return next.handle(req)
  }
}
