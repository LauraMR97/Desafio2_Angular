import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.scss']
})
export class AmigosComponent implements OnInit {


  public nombre : string;
  public logo: string;

  constructor() {
    this.nombre='Wiikinder';
    this.logo='../assets/logo.png';
   }

  ngOnInit(): void {
  }

}
