import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Persona} from '../../models/nuevoUser';
import {RestIndexLoginService} from '../../services/rest-index-login.service';
import {AvisosService} from 'src/app/shared/services/avisos.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  public nombre : string;
  public imagen: string;
  public titulo: string;
  public logo: string;

  nuevoUsuario: FormGroup;
  submitted: boolean =false;

  constructor(
    private formBuilder: FormBuilder,
    private restUserService: RestIndexLoginService,
    private notificationService: AvisosService) {
    this.nombre='Wiikinder';
    this.imagen='../assets/registro.jpg';
    this.titulo='Registro';
    this.logo='../assets/logo.png';

    this.nuevoUsuario= this.formBuilder.group({
      nombre:['',[Validators.required]],
      nick:['',[Validators.required]],
      edad:['',[Validators.required]],
      ciudad:['',[Validators.required]],
      correo:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.pattern]],
      password2:['',[Validators.required, Validators.pattern]]
    });
   }

  ngOnInit(): void {
  }

   //Devuelve los controles del formulario(esto se devuelve en el html)
   get formulario(){
    return this.nuevoUsuario.controls;
  }

 //Metodo que hace el envio del formulario
 onSubmit(){
  this.submitted=true;
  if(this.nuevoUsuario.invalid)
    return;

    //Podemos obtener en un json TODOS los valores de los controles del formulario
 let user= new Persona(
   this.nuevoUsuario.value.nombre,
   this.nuevoUsuario.value.nick,
   this.nuevoUsuario.value.correo,
   this.nuevoUsuario.value.ciudad,
   this.nuevoUsuario.value.edad,
   this.nuevoUsuario.value.password);

   console.log(user);
    console.log("El usuario: " +user.correo);
    console.log("La contrseña: " +user.password);
    this.onReset();

   this.restUserService.addUser(user).subscribe({
     next:()=>{
       this.notificationService.showMessage(`Usuario ${user.correo} registrado correctamente'`,'/formulario-preferencias');
     },
     error: e =>{
       this.notificationService.showMessage(`Fallo en el registro: `+e);
     }
   })
}

//Limpia el Formulario
onReset(){
  this.submitted=false;
  this.nuevoUsuario.reset();
}
}



