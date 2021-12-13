import {PerfilAgenoResponse} from "../models/req-response-perfilAgeno";
export class PerfilAgeno{

  static userfromJSON(obj: PerfilAgenoResponse){
    return new PerfilAgeno(
      obj['nick'],
      obj['nombre'],
      obj['edad'],
      obj['descripcion'],
      obj['id_genero'],
      obj['ciudad'],
      obj['tieneHijos'],
      obj['tipoRelaccion'],
      obj['hijosDeseados'],
      obj['id_genero_preferido'],
      obj['deporte'],
      obj['arte'],
      obj['politica']
    )}


  constructor(
    public nick: string,
    public nombre: string,
    public edad: number,
    public descripcion: string,
    public  id_genero: number,
    public ciudad: string,
    public tieneHijos: number,
    public tipoRelaccion: string,
    public hijosDeseados: number,
    public  id_genero_preferido: number,
    public  deporte:number,
    public arte:number,
    public politica:number,
  ){}
}
