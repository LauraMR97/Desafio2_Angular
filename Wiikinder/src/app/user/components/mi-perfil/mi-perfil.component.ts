import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import {AvisosService} from 'src/app/shared/services/avisos.service';
import { RestUserService } from '../../services/rest-user.service';
@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss']
})
export class MiPerfilComponent implements OnInit {

  public nombre : string;
  public fotoPerfil: string;
  public logo: string;
  public correo: string;
  public MIperfil: any = []

  constructor(
    private restUserService: RestUserService,
    private router: Router,
    private notificationService: AvisosService) {
    this.nombre='Wiikinder';
    this.fotoPerfil='../assets/perfilGenerico.png';
    this.logo='../assets/logo.png';
    this.correo='';
   }
  ngOnInit(): void {
    this.getCorreo();
    this.getMIPerfil();
  }
  public getCorreo(){
    this.restUserService.correo.subscribe(correo =>{
      this.correo=correo;
    });
  }

  public getMIPerfil(){
    this.restUserService.getMIPerfil(this.correo).subscribe((response)=>{
        this.MIperfil=response;
        this.restUserService.darCorreo(this.correo);
      });
    }

  onVolver(){
    this.router.navigate(['/usuario/menu']);
  }
  darDeBaja(){
    this.restUserService.darBaja(this.correo).subscribe((response)=>{
      this.MIperfil=response;
    });
    this.router.navigate(['']);
  }
  editarMiPerfil(){
    this.router.navigate(['/usuario/menu']);
  }
}
