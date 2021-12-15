import {PerfilResponse} from "../models/req-response.perfil";
export class PerfilPropio{

  static userfromJSON(obj: PerfilResponse){
    return new PerfilPropio(
      obj['descripcion'],
      obj['correo'],
      obj['correoAnt'],
      obj['nick'],
      obj['nombre'],
      obj['edad'],
      obj['ciudad'],
      obj['password1'],
      obj['password2'],
      obj['tema'],
    );
  }


  constructor(
    public descripcion: string,
    public correo: string,
    public correoAnt: string,
    public nick: string,
    public nombre: string,
    public edad: number,
    public ciudad: string,
    public password1: string,
    public password2: string,
    public tema: string
  ){}
}
