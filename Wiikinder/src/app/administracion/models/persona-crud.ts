import {editResponse} from "../models/req-resp-edit";
export class PersonaCrud{

  static userfromJSON(obj: editResponse){
    return new PersonaCrud(
      obj['correo'],
      obj['correoAnt'],
      obj['password1'],
      obj['password2'],
      obj['id_rol'],
    );
  }


  constructor(
   public  correo: string,
   public correoAnt: string,
   public   password1:      string,
   public   password2:      string,
    public  id_rol: number,
  ){}
}
