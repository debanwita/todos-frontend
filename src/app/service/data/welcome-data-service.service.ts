import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
    console.log(this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`));
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }
}
