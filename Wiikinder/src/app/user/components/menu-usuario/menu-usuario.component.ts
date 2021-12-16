import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/index/models/user';
import { Router } from '@angular/router';
import { RestUserService } from '../../services/rest-user.service';
import {RestIndexLoginService} from '../../../index/services/rest-index-login.service';
import { PerfilesAgenosComponent } from '../perfiles-agenos/perfiles-agenos.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PerfilAgeno } from '../../models/perfilAgeno';
import {AvisosService} from 'src/app/shared/services/avisos.service';



@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.scss']
})
export class MenuUsuarioComponent implements OnInit {

  public diferencia: any = [];
  public respuesta: any = [];
  public nombre : string;
  public logo: string;
  public logoOscuro: string;
  public correo: string;
  public tema: string;


  constructor(
    private restUserService: RestUserService,
    private router: Router,
    private restUserIndexService: RestIndexLoginService,
    private modal: NgbModal,
    private notificacionService: AvisosService) {
    this.nombre='Wiikinder';
    this.logo='../assets/logo.png';
    this.logoOscuro='../assets/logoOscuro.png';
    this.correo='';
    this.tema=this.tema =(sessionStorage.getItem('tema') || '{}');
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
      this.restUserService.darCorreo(this.correo);
    });
  }

  onVolver(){
    this.restUserService.desconectar(this.correo).subscribe((response)=>{
      this.respuesta=response;
      this.notificacionService.showMessage(this.correo + 'Te has desconectado, vuelve pronto!');
    });
    this.router.navigate([' ']);
  }

  onMiPerfil(){
    this.router.navigate(['/usuario/miPerfil']);
  }

  onAmigos(){
    this.router.navigate(['/usuario/amigos']);
  }
  mostrar(correo: string){
    this.modal.open(PerfilesAgenosComponent, {size: 'lg'});
    this.restUserService.perfilTrigger.emit(correo);
  }

  add(correoAmigo: string){
    this.restUserService.addAmigo(correoAmigo,this.correo).subscribe((response)=>{
      this.respuesta=response;
      this.notificacionService.showMessage(correoAmigo + 'Peticion Enviada');
    });
    this.router.navigate(['/usuario/menu']);

  }
}
