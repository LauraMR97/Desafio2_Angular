import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.scss']
})
export class MenuUsuarioComponent implements OnInit {

  public nombre : string;
  public logo: string;

  constructor() {
    this.nombre='Wiikinder';
    this.logo='../assets/logo.png';
   }

  ngOnInit(): void {
  }

}
