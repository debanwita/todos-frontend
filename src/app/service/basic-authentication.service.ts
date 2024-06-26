import { Injectable } from '@angular/core';
import { HelloWorldBean } from './data/welcome-data-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }
  /*
  authenticate(username: string,password: string){
    console.log('before ' + this.isUserLoggedIn());
    if(username ==='in28minutes' && password==='dummy'){
      sessionStorage.setItem('authenticatedUser',username);
      console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }
*/
  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser');
    //return !(user === null);
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem('token');
    }
    return null;
  }
  executeAuthenticationService(username : string,password : string){
    console.log("In execute Hello World Bean Service");
    
    let basicAuthHeaderString='Basic '+ window.btoa(username + ':' + password);
    
    let headers = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      }
    )
    //console.log(this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`));
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,{headers:headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser',username);
          sessionStorage.setItem('token',basicAuthHeaderString)
          return data;
        }
      )
    );
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }
}

export class AuthenticationBean{
  constructor(public message: string){

  }
}