import { Component, OnInit } from '@angular/core';
import {RestAdministracionCrudService} from 'src/app/administracion/services/rest-administracion-crud.service';
import { PersonasResponse } from '../../models/req-resp';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  public personas: any = []
  public nombre : string;
  public logo: string;

  constructor(
    private restCrudService: RestAdministracionCrudService,
    private router: Router,
    ) {
    this.nombre='Wiikinder';
    this.logo='../assets/logo.png';
  }

  ngOnInit(): void {
    this.getUsuarios();
  }


  public getUsuarios(){
    this.restCrudService.getUsuarios().subscribe((response)=>{
      this.personas=response;
    })
  }
  onVolver(){
    this.router.navigate(['']);
  }
}
