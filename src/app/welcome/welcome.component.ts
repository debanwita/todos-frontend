import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataServiceService } from '../service/data/welcome-data-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  message : string = 'Some Welcome Message';
  name = '';
  messageFromService: string | undefined;

  //ActivatedRouter
  constructor(private route: ActivatedRoute,private service: WelcomeDataServiceService){}
  ngOnInit(): void {
    console.log(this.message);
    this.name = this.route.snapshot.params['name'];
    console.log(this.route.snapshot.params['name']);
  }

  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log("last line of getWelcomeMessage");
    console.log("In this service");
  }

  handleSuccessfulResponse(response: any){
    
    this.messageFromService = response.message;
    
    
  }
  handleErrorResponse(error: any){
    this.messageFromService = error.error.message;
  }
}
