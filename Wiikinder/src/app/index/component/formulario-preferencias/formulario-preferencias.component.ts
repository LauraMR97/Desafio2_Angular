import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {RestIndexLoginService} from '../../../index/services/rest-index-login.service';
import {AvisosService} from 'src/app/shared/services/avisos.service';
import {Formulario} from '../../models/formulario';

@Component({
  selector: 'app-formulario-preferencias',
  templateUrl: './formulario-preferencias.component.html',
  styleUrls: ['./formulario-preferencias.component.scss']
})
export class FormularioPreferenciasComponent implements OnInit {

  public nombre : string;
  public imagen: string;
  public titulo: string;
  public logo: string;
  public correo: string;

  rellenoFormulario: FormGroup;
  submitted: boolean =false;

  constructor(
    private formBuilder: FormBuilder,
    private restUserService: RestIndexLoginService,
    private router: Router,
    private notificationService: AvisosService) {
    this.nombre='Wiikinder';
    this.imagen='../assets/formulario.jpg';
    this.titulo='Tus Preferencias';
    this.logo='../assets/logo.png';
    this.correo='';


    this.rellenoFormulario= this.formBuilder.group({
      deporte:['',[Validators.required]],
      arte:['',[Validators.required]],
      politica:['',[Validators.required]],
      tipoRelaccion:['',[Validators.required]],
      numHijos:['',[Validators.required]],
      quiereHijos:['',[Validators.required]],
      generoPreferido:['',[Validators.required]],
      descripcion:['',[Validators.required]]
    });
   }

   ngOnInit(): void {
    this.getCorreo();
  }


  public getCorreo(){
    this.restUserService.correo.subscribe(correo =>{
      this.correo=correo;
    });
  }

   //Devuelve los controles del formulario(esto se devuelve en el html)
   get formulario(){
    return this.rellenoFormulario.controls;
  }

 //Metodo que hace el envio del formulario
 onSubmit(){
  this.submitted=true;
  if(this.rellenoFormulario.invalid)
    return;

    //Podemos obtener en un json TODOS los valores de los controles del formulario
 let formulario= new Formulario(
   this.rellenoFormulario.value.deporte=parseInt(this.rellenoFormulario.value.deporte),
   this.rellenoFormulario.value.arte=parseInt(this.rellenoFormulario.value.arte),
   this.rellenoFormulario.value.politica=parseInt(this.rellenoFormulario.value.politica),
   this.rellenoFormulario.value.tipoRelaccion,
   this.rellenoFormulario.value.numHijos=parseInt(this.rellenoFormulario.value.numHijos),
   this.rellenoFormulario.value.quiereHijos,
   this.rellenoFormulario.value.generoPreferido=parseInt(this.rellenoFormulario.value.generoPreferido),
   this.rellenoFormulario.value.descripcion,
   this.correo
   );

   console.log(formulario);
    this.onReset();

   this.restUserService.addForm(formulario).subscribe({
     next:()=>{
       this.notificationService.showMessage(`Usuario ${this.correo} registrado correctamente'`,'/registroConfirmado');

     },
     error: e =>{
       this.notificationService.showMessage(`Fallo en el registro: `+e);
     }
   })
}



//Limpia el Formulario
onReset(){
  this.submitted=false;
  this.rellenoFormulario.reset();
}

}



