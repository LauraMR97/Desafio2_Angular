import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  public nombre : string;
  public imagen: string;
  public titulo: string;

  constructor() {
    this.nombre='Wiikinder';
    this.imagen='../assets/registro.jpg';
    this.titulo='Registro';
   }

  ngOnInit(): void {
  }

}
