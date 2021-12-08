import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../models/user';
import {Persona} from '../models/nuevoUser';
import {UserResponse} from '../models/req-response';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestIndexLoginService {

  constructor(private http:HttpClient) { }

  //Obtiene todos los usuarios de una API

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

  //Registro de personas
  public addUser(user: Persona){
    const url: string="http://127.0.0.1:8000/api/registroPersona";
    let headers= new HttpHeaders({
      'Content-Type' : 'application/json',
    });
    return this.http.post(url,user,{headers: headers});
  }
}
