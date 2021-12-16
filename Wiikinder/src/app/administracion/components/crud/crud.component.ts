import { Component, OnInit } from '@angular/core';
import {RestAdministracionCrudService} from 'src/app/administracion/services/rest-administracion-crud.service';
import { Router } from '@angular/router';
import { RestIndexLoginService } from 'src/app/index/services/rest-index-login.service';
import {AvisosService} from 'src/app/shared/services/avisos.service';
import { RestUserService } from 'src/app/user/services/rest-user.service';

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
  public logoOscuro: string;
  public correo: string;
  public tema: string;

  constructor(
    private restCrudService: RestAdministracionCrudService,
    private router: Router,
    private restUserIndexService: RestIndexLoginService,
    private notificacionService: AvisosService,
    private restUserService: RestUserService
    ) {
    this.nombre='Wiikinder';
    this.logo='../assets/logo.png';
    this.logoOscuro='../assets/logoOscuro.png';
    this.correo ='';
    this.tema=this.tema =(sessionStorage.getItem('tema') || '{}');
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
    this.restUserService.desconectar(this.correo).subscribe((response)=>{
      this.respuesta=response;
      this.notificacionService.showMessage(this.correo + 'Te has desconectado, vuelve pronto!');
    });
    this.router.navigate([' ']);
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

  cambiarTema(){

    if(this.tema=='claro'){
      sessionStorage.setItem('tema','oscuro');
    }else{
      sessionStorage.setItem('tema','claro');
    }

    this.restCrudService.tema(this.correo).subscribe({
      next:()=>{
        this.notificacionService.showMessage(`Tema modificado correctamente'`,'/administracion/crud');
        //this.restUserService.darCorreoPersonaRegistrandose(perfil.correo);
      },
      error: e =>{
        this.notificacionService.showMessage(`Fallo al modificar: `+e);
      }
    })

  }
}
