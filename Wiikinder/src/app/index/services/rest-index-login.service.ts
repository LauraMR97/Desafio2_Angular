import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {User} from '../models/user';
import {Persona} from '../models/nuevoUser';
import {Formulario} from '../models/formulario';
import {UserResponse} from '../models/req-response';
import {BehaviorSubject, map} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestIndexLoginService {

  public correo = new BehaviorSubject<string>("");
  public rolAsignado = new BehaviorSubject<string>("");
  constructor(private http:HttpClient) { }

  //Hacer login
  public login(user:User){
    let url: string="http://127.0.0.1:8000/api/login";
    let headers= new HttpHeaders({
      'Content-Type' : 'application/json',
    });
    return this.http.post<UserResponse>(url,user,{headers:headers}).pipe(
      map((resp:UserResponse)=>{
        this.darRol(resp.rol);
        sessionStorage.setItem('tema', resp.tema);
        return User.userfromJSON(user);
      })
    );
  }

public darRol(rol: number){
  this.rolAsignado.next(String(rol));
}

  /**
   * Buscar a una persona por el correo para enviar un email con una pass nueva
   * @param user
   * @returns
   */
  public passOlvidada(user:User){
    let url: string="http://127.0.0.1:8000/api/passwordOlvidada";
    let headers= new HttpHeaders({
      'Content-Type' : 'application/json',
    });
    return this.http.post<UserResponse>(url,user,{headers:headers}).pipe(
      map((resp:UserResponse)=>{
        return User.userfromJSON(user);
      })
    );
  }


  //Registro de personas
  public addUser(user: Persona){
    const url: string="http://127.0.0.1:8000/api/registroPersona";
    let headers= new HttpHeaders({
      'Content-Type' : 'application/json',
    });
    return this.http.post(url,user,{headers: headers});
  }

  public addForm(formulario: Formulario){
    const url: string="http://127.0.0.1:8000/api/formularioPreferencias";
    let headers= new HttpHeaders({
      'Content-Type' : 'application/json',
    });
    return this.http.post(url,formulario,{headers: headers});
  }

  public darCorreo(correo: string){
    this.correo.next(correo);
  }

  public darCorreoPersonaRegistrandose(correo: string){
    this.correo.next(correo);
  }
}
