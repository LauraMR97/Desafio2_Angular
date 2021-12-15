import {addResponse} from "../models/personaNueva-resp";
export class PersonaNueva{

  static userfromJSON(obj: addResponse){
    return new PersonaNueva(
      obj['correo'],
      obj['password1'],
      obj['password2'],
      obj['id_rol'],
      obj['id_genero'],
      obj['generoPreferido'],
      obj['nombre'],
      obj['nick'],
      obj['edad'],
      obj['ciudad'],
      obj['tipoRelaccion'],
      obj['numHijos'],
      obj['quiereHijos'],
      obj['descripcion'],
      obj['deporte'],
      obj['arte'],
      obj['politica'],
    );
  }
  constructor(
  public  correo:        string,
  public password1:      string,
  public password2:      string,
  public id_rol: number,
  public id_genero: number,
  public  generoPreferido: number,
  public  nombre: string,
  public  nick: string,
  public  edad: number,
  public ciudad: string,
  public  tipoRelaccion: string,
  public  numHijos: number,
  public  quiereHijos: number,
  public   descripcion: string,
  public  deporte: number,
  public  arte: number,
  public  politica: number,
  ){}
}
