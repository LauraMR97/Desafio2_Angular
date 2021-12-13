import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RestIndexLoginService} from '../../../index/services/rest-index-login.service';
import { RestUserService } from '../../services/rest-user.service';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.scss']
})
export class AmigosComponent implements OnInit {

  public amigos: any = []
  public nombre : string;
  public logo: string;
  public correo: string;

  constructor(
    private router: Router,
    private restUserIndexService: RestIndexLoginService,
    private restUserService: RestUserService,
  ) {
    this.nombre='Wiikinder';
    this.logo='../assets/logo.png';
    this.correo='';
   }

  ngOnInit(): void {
    this.getCorreo();
    this.getAmigos();
  }

  public getCorreo(){
    this.restUserIndexService.correo.subscribe(correo =>{
      this.correo=correo;
    });
  }

  public getAmigos(){
    this.restUserService.getAmigosLista(this.correo).subscribe((response)=>{
        this.amigos=response;
        this.restUserService.darCorreo(this.correo);
      });
    }

  onVolver(){
    this.router.navigate(['/usuario/menu']);
  }

  onBorrar(){
    this.router.navigate(['/usuario/menu']);
  }
}
