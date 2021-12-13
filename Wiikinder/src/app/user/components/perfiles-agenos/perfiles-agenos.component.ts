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
  public perfil: string | undefined;

  constructor(
    private modalActive: NgbActiveModal,
    private userService: RestUserService
  ) {
    this.nombre='Wiikinder';
    this.fotoPerfil='../assets/perfilGenerico.png';
    this.logo='../assets/logo.png';

    this.userService.perfilTrigger.subscribe((data: string) =>{
      this.perfil=data;
    })
   }


  ngOnInit(): void {
  }

  CloseModal(){
    this.modalActive.dismiss();
  }

}
