import {FormResponse} from "../models/req-response-form";
export class Formulario{

  static userfromJSON(obj: FormResponse){
    return new Formulario(
      obj['deporte'],
      obj['arte'],
      obj['politica'],
      obj['tipoRelaccion'],
      obj['numHijos'],
      obj['quiereHijos'],
      obj['generoPreferido'],
      obj['descripcion'],
      obj['correo'],
    );
  }


  constructor(
    public deporte: number,
    public arte: number,
    public politica: number,
    public tipoRelaccion: string,
    public  numHijos:number,
    public quiereHijos: number,
    public  generoPreferido: number,
    public  descripcion: string,
    public  correo: string
  ){}
}
