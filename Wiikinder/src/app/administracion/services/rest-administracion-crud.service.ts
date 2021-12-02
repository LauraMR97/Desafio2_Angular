import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestAdministracionCrudService {

  public urlAdmin: string ="http://127.0.0.1:8000/api/crudAdmin";
  constructor(private http: HttpClient) { }


public getUsuarios(){
  return this.http.get(this.urlAdmin);
}
}

