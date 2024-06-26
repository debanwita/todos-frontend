import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthticationService : BasicAuthenticationService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*
    let username='in28minutes';
    let password='dummy';
    let basicAuthHeaderString='Basic '+ window.btoa(username + ':' + password);
    */
   let basicAuthHeaderString = this.basicAuthticationService.getAuthenticatedToken();
   console.log("In interceptor "+ basicAuthHeaderString);
   let username = this.basicAuthticationService.getAuthenticatedUser();
   if(basicAuthHeaderString  && username) {
    request = request.clone({
        setHeaders :{
          Authorization : basicAuthHeaderString
        }
      });
    }
    return next.handle(request);
    
  }
}
