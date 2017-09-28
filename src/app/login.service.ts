import { DataserviceService } from './dataservice.service';
import { Injectable, Injector } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService implements CanActivate  {

private se:DataserviceService

  constructor(private Inj:Injector) {
    setTimeout(() =>this.se=Inj.get(DataserviceService));
   }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return this.t.onLogin1();
    return this.se.onLogin1();
  }
}
