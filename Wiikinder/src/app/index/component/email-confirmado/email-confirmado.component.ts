import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-confirmado',
  templateUrl: './email-confirmado.component.html',
  styleUrls: ['./email-confirmado.component.scss']
})
export class EmailConfirmadoComponent implements OnInit {

  public nombre : string;
  public imagen: string;
  public titulo: string;
  public logo: string;

  constructor() {
    this.nombre='Wiikinder';
    this.imagen='../assets/envioEmail.webp';
    this.titulo='Enviado!';
    this.logo='../assets/logo.png';
   }

  ngOnInit(): void {
  }

}
