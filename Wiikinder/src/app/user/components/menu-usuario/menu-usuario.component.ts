import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/index/models/user';
import { RestUserService } from '../../services/rest-user.service';


@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.scss']
})
export class MenuUsuarioComponent implements OnInit {

  public diferencia: any = []
  public nombre : string;
  public logo: string;


  constructor(private restUserService: RestUserService) {
    this.nombre='Wiikinder';
    this.logo='../assets/logo.png';
   }

  ngOnInit(): void {
    this.getUsuariosYDiferencias();
  }


  public getUsuariosYDiferencias(){
    this.restUserService.getUsuariosYDiferencias().subscribe((response)=>{
      this.diferencia=response;
    })
  }
}
