import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RestIndexLoginService} from '../../../index/services/rest-index-login.service';
import { RestUserService } from '../../services/rest-user.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PerfilesAgenosComponent } from '../perfiles-agenos/perfiles-agenos.component';
import {AvisosService} from 'src/app/shared/services/avisos.service';


@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.scss']
})
export class AmigosComponent implements OnInit {

  public amigos: any = [];
  public nombre : string;
  public logo: string;
  public logoOscuro: string;
  public correo: string;
  public tema: string;
  public respuesta: any = [];

  constructor(
    private router: Router,
    private restUserIndexService: RestIndexLoginService,
    private restUserService: RestUserService,
    private modal: NgbModal,
    private notificacionService: AvisosService
  ) {
    this.nombre='Wiikinder';
    this.logo='../assets/logo.png';
    this.logoOscuro='../assets/logoOscuro.png';
    this.correo='';
    this.tema=this.tema =(sessionStorage.getItem('tema') || '{}');
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

  onPeticiones(){
    this.router.navigate(['/usuario/peticiones']);
  }

  borrar(correoAmigo: string){
    this.restUserService.borrarAmigo(correoAmigo,this.correo).subscribe((response)=>{
      this.respuesta=response;
      this.notificacionService.showMessage(correoAmigo + 'Borrado');
    });
    this.router.navigate(['/usuario/menu']);
  }

  mostrar(correo: string){
    this.modal.open(PerfilesAgenosComponent, {size: 'lg'});
    this.restUserService.perfilTrigger.emit(correo);
  }
}
