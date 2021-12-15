import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable , Output, EventEmitter} from '@angular/core';
import { PersonasResponse } from '../models/req-resp';
import { editResponse } from '../models/req-resp-edit';
import { PersonaCrud } from '../models/persona-crud';
import {BehaviorSubject, map} from 'rxjs';
import { PersonaNueva } from '../models/personaNueva';
import { addResponse } from '../models/personaNueva-resp';

@Injectable({
  providedIn: 'root'
})
export class RestAdministracionCrudService {

  public urlAdmin: string ="http://127.0.0.1:8000/api/crudAdmin";
  @Output() userTrigger: EventEmitter<string>= new EventEmitter();
  public correoAsignado = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) { }

public getUsuarios(){
  return this.http.get<PersonasResponse>(this.urlAdmin);
}

public borrarUsuario(correo:string){
  console.log(correo);
  const url: string="http://127.0.0.1:8000/api/borrar";
  let headers= new HttpHeaders({
    'Content-Type' : 'application/json',
  });
  let dato= {correo:correo};
  return this.http.post(url,dato,{headers: headers});
}

public darDeAlta(correo:string){
  console.log(correo);
  const url: string="http://127.0.0.1:8000/api/alta";
  let headers= new HttpHeaders({
    'Content-Type' : 'application/json',
  });
  let dato= {correo:correo};
  return this.http.post(url,dato,{headers: headers});
}

public darDeBaja(correo:string){
  console.log(correo);
  const url: string="http://127.0.0.1:8000/api/baja";
  let headers= new HttpHeaders({
    'Content-Type' : 'application/json',
  });
  let dato= {correo:correo};
  return this.http.post(url,dato,{headers: headers});
}

public editarUser(perfil: PersonaCrud){
  let url: string="http://127.0.0.1:8000/api/editar";
  let headers= new HttpHeaders({
    'Content-Type' : 'application/json',
  });
  return this.http.post<editResponse>(url,perfil,{headers:headers}).pipe(
    map((resp:PersonaCrud)=>{
      return PersonaCrud.userfromJSON(perfil);
    })
  );
}

public addUser(perfil: PersonaNueva){
  let url: string="http://127.0.0.1:8000/api/add";
  let headers= new HttpHeaders({
    'Content-Type' : 'application/json',
  });
  return this.http.post<addResponse>(url,perfil,{headers:headers}).pipe(
    map((resp:PersonaNueva)=>{
      return PersonaNueva.userfromJSON(perfil);
    })
  );
}

public darCorreo(correo: string){
  this.correoAsignado.next(correo);
}

public getUser(correo: string){
  let url: string="http://127.0.0.1:8000/api/user";
  let dato= {correo:correo};
  return this.http.post(url,dato);
  }

}

