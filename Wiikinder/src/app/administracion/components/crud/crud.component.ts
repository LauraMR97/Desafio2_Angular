import { Component, OnInit } from '@angular/core';
import {RestAdministracionCrudService} from 'src/app/administracion/services/rest-administracion-crud.service';
import { PersonasResponse } from '../../models/req-resp';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  public personas: any = []

  constructor(private restCrudService: RestAdministracionCrudService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }


  public getUsuarios(){
    this.restCrudService.getUsuarios().subscribe((response)=>{
      this.personas=response;
    })
  }
}
