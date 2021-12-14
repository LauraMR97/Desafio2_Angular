import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {User} from '../../models/user';
import {RestIndexLoginService} from '../../services/rest-index-login.service';
import {AvisosService} from 'src/app/shared/services/avisos.service';


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
  public rol:string;

  loginUsuario: FormGroup;
  submitted: boolean =false;
  user?:User;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private restLoginService: RestIndexLoginService,
    private notificacionService: AvisosService){

    this.nombre='Wiikinder';
    this.imagen='../assets/index.webp';
    this.titulo='Welcome';
    this.logo='../assets/logo.png';
    this.rol='';


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
      this.user= new User("",this.loginUsuario.value.email, this.loginUsuario.value.password,0);

      console.log("El usuario: " +user.email);
      console.log("La contrseña: " +user.password);
      this.onReset();

      this.getRol();
     this.restLoginService.login(this.user).subscribe({
       next:(user)=>{
         if(this.rol=='2'){
         this.notificacionService.showMessage(`Usuario ${user.correo} logeado'`,'/usuario/menu', {queryParams: this.user});
        this.user= user;
        this.restLoginService.darCorreo(user.correo);
      }else{
        this.notificacionService.showMessage(`Usuario ${user.correo} logeado'`,'/administracion/crud', {queryParams: this.user});
        this.user= user;
        this.restLoginService.darCorreo(user.correo);
      }
       },
       error: e =>{
         this.notificacionService.showMessage(`Fallo en el login: `+e);
       }
     })
  }

  public getRol(){
    this.restLoginService.rolAsignado.subscribe(rol =>{
      this.rol=rol;
    });
  }


  //Limpia el Formulario
  onReset(){
    this.submitted=false;
    this.loginUsuario.reset();
  }

  onRegister(){
    this.router.navigate(['registro']);
  }



}
