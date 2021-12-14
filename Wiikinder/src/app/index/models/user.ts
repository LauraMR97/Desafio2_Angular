import {UserResponse} from "../models/req-response";
export class User{

  static userfromJSON(obj: UserResponse){
    return new User(
      obj['usuario'],
      obj['correo'],
      obj['password'],
      obj['rol'],
    );
  }


  constructor(
public usuario: string,
public correo: string,
public password: string,
public rol: number
  ){}
}
