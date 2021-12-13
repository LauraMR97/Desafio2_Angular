import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-confirmado',
  templateUrl: './registro-confirmado.component.html',
  styleUrls: ['./registro-confirmado.component.scss']
})
export class RegistroConfirmadoComponent implements OnInit {

  public nombre : string;
  public imagen: string;
  public titulo: string;
  public logo: string;

  constructor(
    private router: Router
  ) {
    this.nombre='Wiikinder';
    this.imagen='../assets/registroConfirmado.webp';
    this.titulo='Ya esta!';
    this.logo='../assets/logo.png';
   }

  ngOnInit(): void {
  }

  onVolver(){
    this.router.navigate(['/']);
  }
}
