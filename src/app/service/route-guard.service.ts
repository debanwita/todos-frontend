import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService  implements CanActivate{

  constructor(private hardCodedAuthentication: HardcodedAuthenticationService,private router : Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardCodedAuthentication.isUserLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['login']);
      return false;
    }
  }

}
