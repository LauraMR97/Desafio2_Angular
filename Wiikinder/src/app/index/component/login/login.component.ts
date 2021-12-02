import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public nombre : string;
  public imagen: string;
  public logo: string;
  public titulo: string;

  loginUsuario: FormGroup;
  submitted: boolean =false;

  constructor(private formBuilder: FormBuilder) {
    this.nombre='Wiikinder';
    this.imagen='../assets/index.png';
    this.titulo='Welcome';
    this.logo='../assets/logo.png';

    //Estoy definiendo un formulario reactivo en Angular
    //Con dos controles
    this.loginUsuario= this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.pattern]]
    });
   }

  ngOnInit(): void {
  }

  //Devuelve los controles del formulario(esto se devuelve en el html)
  get formulario(){
    return this.loginUsuario.controls;
  }

  //Metodo que hace el envio del formulario
  onSubmit(){
    this.submitted=true;
    if(this.loginUsuario.invalid)
      return;

      //Podemos obtener en un json TODOS los valores de los controles del formulario
      let user= this.loginUsuario.value;

      console.log("El usuario: " +user.email);
      console.log("La contrseña: " +user.password);
      this.onReset();
  }

  //Limpia el Formulario
  onReset(){
    this.submitted=false;
    this.loginUsuario.reset();
  }

}
