import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public nombre : string;
  public imagen: string;
  public logo: string;
  public titulo: string;

  constructor() {
    this.nombre='Wiikinder';
    this.imagen='../assets/index.png';
    this.titulo='Welcome';
    this.logo='../assets/logo.png';
   }

  ngOnInit(): void {
  }

}
