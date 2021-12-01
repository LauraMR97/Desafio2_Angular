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
  public titulo2: string;

  constructor() {
    this.nombre='Wiikinder';
    this.imagen='../assets/index.jpg';
    this.titulo='Tus';
    this.titulo2='Preferencias';
   }

  ngOnInit(): void {
  }

}
