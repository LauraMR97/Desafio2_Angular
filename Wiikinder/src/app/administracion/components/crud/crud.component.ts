import { Component, OnInit } from '@angular/core';
import {RestAdministracionCrudService} from 'src/app/administracion/services/rest-administracion-crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  constructor(private restCrudService: RestAdministracionCrudService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  public getUsuarios(){
this.restCrudService.getUsuarios().subscribe(
  response=>{
    console.log(response);
  }
)
  }
}
