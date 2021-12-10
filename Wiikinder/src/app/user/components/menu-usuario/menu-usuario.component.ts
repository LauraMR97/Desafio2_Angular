import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/index/models/user';
import { Router } from '@angular/router';
import { RestUserService } from '../../services/rest-user.service';
import {RestIndexLoginService} from '../../../index/services/rest-index-login.service';


@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.scss']
})
export class MenuUsuarioComponent implements OnInit {

  public diferencia: any = []
  public nombre : string;
  public logo: string;
  public correo: string;

  constructor(
    private restUserService: RestUserService,
    private router: Router,
    private restUserIndexService: RestIndexLoginService) {
    this.nombre='Wiikinder';
    this.logo='../assets/logo.png';
    this.correo='';
   }
  ngOnInit(): void {
    this.getCorreo();
    this.getUsuariosYDiferencias();
  }

  public getCorreo(){
    this.restUserIndexService.correo.subscribe(correo =>{
      this.correo=correo;
    });
  }
  public getUsuariosYDiferencias(){
  this.restUserService.getUsuariosYDiferencias(this.correo).subscribe((response)=>{
      this.diferencia=response;
    });
  }

  onVolver(){
    this.router.navigate(['']);
  }
}
