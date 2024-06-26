import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent implements OnInit{
  username = 'in28minutes';
  password = '';
  errorMessage = "Invalid Credentials";
  invalidLogin = false;
 

  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  constructor(private router : Router,private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService : BasicAuthenticationService
  ){
    
   }

  ngOnInit(): void {
    
  }

  handleBasicAuthLogin(){
    // console.log(this.username);
    // console.log(this.password);{}
    this.basicAuthenticationService.executeAuthenticationService(this.username,this.password).subscribe(
      (data) => {
        console.log(data);
        //Redirect to welcome page
        this.router.navigate(['welcome',this.username]);
        this.invalidLogin = false;
      } ,
      (error) => {
        console.log(error);
        this.invalidLogin = true;
      }
    );   
  }

}
