import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { RestUserService } from '../../services/rest-user.service';
import {PerfilAgeno} from '../../models/perfilAgeno';

@Component({
  selector: 'app-perfiles-agenos',
  templateUrl: './perfiles-agenos.component.html',
  styleUrls: ['./perfiles-agenos.component.scss']
})
export class PerfilesAgenosComponent implements OnInit {

  public nombre : string;
  public fotoPerfil: string;
  public logo: string;
  public chica: string;
  public chico: string;
  public androgino: string;
  public perfil: any= [];
  public modeloPerfil: any= [];
  public logoOscuro: string;
  public correo: string;
  public tema: string;


  constructor(
    private modalActive: NgbActiveModal,
    private userService: RestUserService
  ) {
    this.nombre='Wiikinder';
    this.fotoPerfil='../assets/perfilGenerico.png';
    this.logo='../assets/logo.png';
    this.chica='../assets/mujer.png';
    this.chico='../assets/hombre.png';
    this.androgino='../assets/androgino.png';
    this.logoOscuro='../assets/logoOscuro.png';
    this.correo='';
    this.tema=this.tema =(sessionStorage.getItem('tema') || '{}');


    this.userService.perfilTrigger.subscribe((data: string) =>{
      this.correo=data;
    })
   }

  ngOnInit(): void {
   this.getPerfil();
  }

  public getPerfil(){
    this.userService.getPreferenciasOtraPersona(this.correo).subscribe((response)=>{
      this.perfil=response;
      this.crearPerfil();
      });
    }

    public crearPerfil(){
      this.modeloPerfil= new PerfilAgeno(
        this.perfil[0][0].nick,
        this.perfil[0][0].nombre,
        this.perfil[0][0].edad,
        this.perfil[0][0].descripcion,
        this.perfil[0][0].id_genero,
        this.perfil[0][0].ciudad,
        this.perfil[0][0].tieneHijos,
        this.perfil[0][0].tipoRelaccion,
        this.perfil[0][0].hijosDeseados,
        this.perfil[1][0].id,
        this.perfil[2][0].intensidad,
        this.perfil[2][1].intensidad,
        this.perfil[2][2].intensidad,
      )
      console.log(this.modeloPerfil);
    }

  CloseModal(){
    this.modalActive.dismiss();
  }

}
