import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfiles-agenos',
  templateUrl: './perfiles-agenos.component.html',
  styleUrls: ['./perfiles-agenos.component.scss']
})
export class PerfilesAgenosComponent implements OnInit {

  public nombre : string;
  public fotoPerfil: string;
  public logo: string;

  constructor() {
    this.nombre='Wiikinder';
    this.fotoPerfil='../assets/perfilGenerico.png';
    this.logo='../assets/logo.png';
   }


  ngOnInit(): void {
  }

}
