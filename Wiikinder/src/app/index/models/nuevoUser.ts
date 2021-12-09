import {UserResponseRegister} from "../models/req-response2";
export class Persona{

  static userfromJSON(obj: UserResponseRegister){
    return new Persona(
      obj['nombre'],
      obj['nick'],
      obj['correo'],
      obj['ciudad'],
      obj['edad'],
      obj['password'],
      obj['passRepeat'],
      obj['id_genero'],
    );
  }


  constructor(
    public nombre: string,
    public nick:string,
    public correo: string,
    public ciudad:string,
    public edad:number,
    public password: string,
    public passRepeat: string,
    public id_genero: number
  ){}
}
