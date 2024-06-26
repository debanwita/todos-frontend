import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string ){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataServiceService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(name: string){
    console.log("In execute Hello World Bean Service");
    /*
    let basicAuthHeaderString = this.createBasicAuthenticationHeader();
    let headers = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      }
    )
    */
    //console.log(this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`));
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
      //{headers:headers}
    );
  }
  /*
  createBasicAuthenticationHeader(){
    let username='in28minutes';
    let password='dummy';
    let basicAuthHeaderString='Basic '+ window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
    */
}
