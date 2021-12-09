import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {User} from '../../models/user';
import {RestIndexLoginService} from '../../services/rest-index-login.service';
import {AvisosService} from 'src/app/shared/services/avisos.service';

@Component({
  selector: 'app-pass-olvidada',
  templateUrl: './pass-olvidada.component.html',
  styleUrls: ['./pass-olvidada.component.scss']
})
export class PassOlvidadaComponent implements OnInit {

  public nombre : string;
  public imagen: string;
  public titulo: string;
  public logo: string;

  buscarUsuario: FormGroup;
  submitted: boolean =false;
  user?:User;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private restLoginService: RestIndexLoginService,
    private notificacionService: AvisosService) {


    this.nombre='Wiikinder';
    this.imagen='../assets/passOlvidada.jpg';
    this.titulo='Recupera tu cuenta';
    this.logo='../assets/logo.png';

    this.buscarUsuario= this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
    });
   }

  ngOnInit(): void {
  }

  get formulario(){
    return this.buscarUsuario.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.buscarUsuario.invalid)
      return;

      let user= this.buscarUsuario.value;
      this.user= new User("",this.buscarUsuario.value.email,"");

      console.log("El usuario: " +user.email);
      this.onReset();

     this.restLoginService.passOlvidada(this.user).subscribe({
       next:(user)=>{
         this.notificacionService.showMessage(`Usuario ${user.correo} encontrado'`,'emailConfirmado', {queryParams: this.user});
        this.user= user;
       },
       error: e =>{
         this.notificacionService.showMessage(`Correo Invalido: `+e);
       }
     })
     /*this.notificacionService.showMessage(
       `Usuario ${this.user.correo} logeado`,
       '/usuario/menu',
       {queryParams: this.user}
     );*/
  }

  //Limpia el Formulario
  onReset(){
    this.submitted=false;
    this.buscarUsuario.reset();
  }

  onVolver(){
    this.router.navigate(['']);
  }

}


