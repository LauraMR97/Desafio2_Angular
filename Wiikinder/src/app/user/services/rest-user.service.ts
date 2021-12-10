import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { PersonasResponse } from '../models/req-resp-personas';

@Injectable({
  providedIn: 'root'
})
export class RestUserService {

  public urlUser: string ="http://127.0.0.1:8000/api/preferenciasUsuario";
  constructor(private http: HttpClient) { }

  /*public getUsuariosYDiferencias(correo: string){
    return this.http.get<PersonasResponse>(this.urlUser);
  }*/



  public getUsuariosYDiferencias(correo: string){
  let url: string="http://127.0.0.1:8000/api/preferenciasUsuario";
  let dato= {correo:correo};
  return this.http.post(url,dato);
}
}
