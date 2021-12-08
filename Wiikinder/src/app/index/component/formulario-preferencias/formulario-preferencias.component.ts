import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-preferencias',
  templateUrl: './formulario-preferencias.component.html',
  styleUrls: ['./formulario-preferencias.component.scss']
})
export class FormularioPreferenciasComponent implements OnInit {

  public nombre : string;
  public imagen: string;
  public titulo: string;
  public logo: string;

  constructor() {
    this.nombre='Wiikinder';
    this.imagen='../assets/formulario.jpg';
    this.titulo='Tus Preferencias';
    this.logo='../assets/logo.png';
   }

  ngOnInit(): void {
  }

}
