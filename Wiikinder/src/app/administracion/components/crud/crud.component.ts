import { Component, OnInit } from '@angular/core';
import {RestAdministracionCrudService} from 'src/app/administracion/services/rest-administracion-crud.service';
import { Router } from '@angular/router';
import { RestIndexLoginService } from 'src/app/index/services/rest-index-login.service';
import {AvisosService} from 'src/app/shared/services/avisos.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  public personas: any = []
  public respuesta: any =[];
  public nombre : string;
  public logo: string;
  public correo: string;

  constructor(
    private restCrudService: RestAdministracionCrudService,
    private router: Router,
    private restUserIndexService: RestIndexLoginService,
    private notificacionService: AvisosService
    ) {
    this.nombre='Wiikinder';
    this.logo='../assets/logo.png';
    this.correo ='';
  }

  ngOnInit(): void {
    this.getUsuarios();
    this.getCorreo();
  }

  public getCorreo(){
    this.restUserIndexService.correo.subscribe(correo =>{
      this.correo=correo;
    });
  }
  public getUsuarios(){
    this.restCrudService.getUsuarios().subscribe((response)=>{
      this.personas=response;
    })
  }
  onVolver(){
    this.router.navigate(['']);
  }

  borrar(correo: string){
    this.restCrudService.borrarUsuario(correo).subscribe((response)=>{
      this.respuesta=response;
      this.notificacionService.showMessage(correo + ' Borrado');
    });
    this.router.navigate(['/administracion/crud']);
  }

  activar(correo: string){
    this.restCrudService.darDeAlta(correo).subscribe((response)=>{
      this.respuesta=response;
      this.notificacionService.showMessage(correo + ' Activado');
    });
    this.router.navigate(['/administracion/crud']);
  }

  desactivar(correo: string){
    this.restCrudService.darDeBaja(correo).subscribe((response)=>{
      this.respuesta=response;
      this.notificacionService.showMessage(correo + ' Desactivado');
    });
    this.router.navigate(['/administracion/crud']);
  }

  editar(correo: string){
    this.restCrudService.darCorreo(correo);
    this.router.navigate(['/administracion/editar']);
  }

  add(){
    this.router.navigate(['/administracion/crear']);
  }
}
