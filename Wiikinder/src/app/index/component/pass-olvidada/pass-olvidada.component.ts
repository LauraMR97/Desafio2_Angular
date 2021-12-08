import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-olvidada',
  templateUrl: './pass-olvidada.component.html',
  styleUrls: ['./pass-olvidada.component.scss']
})
export class PassOlvidadaComponent implements OnInit {

  public nombre : string;
  public imagen: string;
  public titulo: string;
  public logo: string;

  constructor() {
    this.nombre='Wiikinder';
    this.imagen='../assets/passOlvidada.jpg';
    this.titulo='Recupera tu cuenta';
    this.logo='../assets/logo.png';
   }

  ngOnInit(): void {
  }

}
