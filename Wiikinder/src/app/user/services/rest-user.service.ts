import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { PersonasResponse } from '../models/req-resp-personas';
import {BehaviorSubject, map} from 'rxjs';
import {PerfilPropio} from '../models/perfil';
import {PerfilResponse} from '../models/req-response.perfil';

@Injectable({
  providedIn: 'root'
})
export class RestUserService {

  public urlUser: string ="http://127.0.0.1:8000/api/preferenciasUsuario";
  public correo = new BehaviorSubject<string>("");
  constructor(private http: HttpClient) { }


  public getUsuariosYDiferencias(correo: string){
  let url: string="http://127.0.0.1:8000/api/preferenciasUsuario";
  let dato= {correo:correo};
  return this.http.post(url,dato);
  }

  public getMIPerfil(correo: string){
    let url: string="http://127.0.0.1:8000/api/miPerfil";
    let dato= {correo:correo};
    return this.http.post(url,dato);
    }

  public darCorreo(correo: string){
    this.correo.next(correo);
  }

  public darBaja(correo: string){
    const url: string="http://127.0.0.1:8000/api/borrarPerfil";
    let headers= new HttpHeaders({
      'Content-Type' : 'application/json',
    });
    let dato= {correo:correo};
    return this.http.post(url,dato,{headers: headers});
  }



  public editarPerfil(perfil: PerfilPropio){
    let url: string="http://127.0.0.1:8000/api/modificarPerfil";
    let headers= new HttpHeaders({
      'Content-Type' : 'application/json',
    });
    return this.http.post<PerfilResponse>(url,perfil,{headers:headers}).pipe(
      map((resp:PerfilResponse)=>{
        return PerfilPropio.userfromJSON(perfil);
      })
    );
  }

  public getAmigosLista(correo: string){
    let url: string="http://127.0.0.1:8000/api/amigos";
    let dato= {correo:correo};
    return this.http.post(url,dato);
  }

}
