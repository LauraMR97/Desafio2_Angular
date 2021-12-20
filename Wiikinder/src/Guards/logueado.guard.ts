import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { isEmpty, Observable } from 'rxjs';
import { RestIndexLoginService } from 'src/app/index/services/rest-index-login.service';
//import { runInThisContext } from 'vm';


@Injectable({
  providedIn: 'root'
})

export class LogueadoGuard implements CanActivateChild {
  public correo: string;

  constructor(
    private indexService: RestIndexLoginService,
    private router: Router){
      this.correo='';
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.indexService.correo.subscribe(correo =>{
        this.correo=correo;
      });
        if(this.correo){
          return true;
        }else{
          return false;
        }
  }

}
