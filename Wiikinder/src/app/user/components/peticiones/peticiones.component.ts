import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RestIndexLoginService} from '../../../index/services/rest-index-login.service';
import { RestUserService } from '../../services/rest-user.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PerfilesAgenosComponent } from '../perfiles-agenos/perfiles-agenos.component';
import {AvisosService} from 'src/app/shared/services/avisos.service';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.scss']
})
export class PeticionesComponent implements OnInit {

  public peticiones: any = [];
  public respuesta: any = [];
  public nombre : string;
  public logo: string;
  public correo: string;

  constructor(
    private router: Router,
    private restUserIndexService: RestIndexLoginService,
    private restUserService: RestUserService,
    private modal: NgbModal,
    private notificacionService: AvisosService
  ) {
    this.nombre='Wiikinder';
    this.logo='../assets/logo.png';
    this.correo='';
   }

  ngOnInit(): void {
    this.getCorreo();
    this.getPeticiones();
  }

  public getCorreo(){
    this.restUserIndexService.correo.subscribe(correo =>{
      this.correo=correo;
    });
  }


  public getPeticiones(){
    this.restUserService.getSolicitudesAmistad(this.correo).subscribe((response)=>{
        this.peticiones=response;
        this.restUserService.darCorreo(this.correo);
        console.log(this.peticiones);
      });
    }


  mostrar(correo: string){
    this.modal.open(PerfilesAgenosComponent, {size: 'lg'});
    this.restUserService.perfilTrigger.emit(correo);
  }

  aceptar(correoAmigo: string){
    this.restUserService.aceptarNuevoAmigo(correoAmigo,this.correo).subscribe((response)=>{
      this.respuesta=response;
      this.notificacionService.showMessage(correoAmigo + ' Añadido');
    });
    this.router.navigate(['/usuario/peticiones']);
  }

  declinar(correoAmigo: string){
    this.restUserService.rechazarNuevoAmigo(correoAmigo,this.correo).subscribe((response)=>{
      this.respuesta=response;
      this.notificacionService.showMessage('Peticion de '+correoAmigo + ' Declinada');
    });
    this.router.navigate(['/usuario/menu']);
  }

  onVolver(){
    this.router.navigate(['/usuario/amigos']);
  }
}
