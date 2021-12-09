import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {User} from '../models/user';
import {Persona} from '../models/nuevoUser';
import {UserResponse} from '../models/req-response';
import {map} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestIndexLoginService {

  constructor(private http:HttpClient) { }

  //Hacer login
  public login(user:User){
    let url: string="http://127.0.0.1:8000/api/login";
    let headers= new HttpHeaders({
      'Content-Type' : 'application/json',
    });
    return this.http.post<UserResponse>(url,user,{headers:headers}).pipe(
      map((resp:UserResponse)=>{
        return User.userfromJSON(user);
      })
    );
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
}
