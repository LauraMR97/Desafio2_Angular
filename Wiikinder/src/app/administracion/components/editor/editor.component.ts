import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import {AvisosService} from 'src/app/shared/services/avisos.service';
import { RestUserService } from '../../../user/services/rest-user.service';
import {PersonaCrud} from '../../models/persona-crud';
import { RestAdministracionCrudService } from '../../services/rest-administracion-crud.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  public nombre : string;
  public fotoPerfil: string;
  public logo: string;
  public perfil: any = [];
  public correo: string;
  public correoAnt: string;

  editForm:FormGroup;
  submitted: boolean =false;


  constructor(
    private router: Router,
    private notificationService: AvisosService,
    private formBuilder: FormBuilder,
    private restUserService: RestUserService,
    private administracionService: RestAdministracionCrudService
  ) {
    this.nombre='Wiikinder';
    this.fotoPerfil='../assets/perfilGenerico.png';
    this.logo='../assets/logo.png';
    this.correo='';
    this.correoAnt='';

    this.editForm= this.formBuilder.group({
      correo:['',[Validators.required, Validators.email]],
      id_rol:['',[Validators.required]],
      password1:['',[Validators.required, Validators.pattern]],
      password2:['',[Validators.required, Validators.pattern]],
    });
  }

  ngOnInit(): void {
    this.getCorreo;
    this.getCorreoAsignado();
    this.getUsuario();
  }

  public getCorreo(){
    this.restUserService.correo.subscribe(correo =>{
      this.correo=correo;
    });
  }

  public getCorreoAsignado(){
    this.administracionService.correoAsignado.subscribe(correo =>{
      this.correoAnt=correo;
    });
  }

  public getUsuario(){
    this.administracionService.getUser(this.correoAnt).subscribe((response)=>{
        this.perfil=response;
        //Como es una llamada asincrona, obtengo mi perfil aqui y despues llamo a updateFrom para
        //poner los datos en el formulario
        this.updateForm();
        this.restUserService.darCorreo(this.correo);
      });
    }

    public updateForm(){
      this.editForm.controls['correo'].setValue(this.perfil[0].correo);
      this.editForm.controls['password1'].setValue(this.perfil[0].password);
      this.editForm.controls['password2'].setValue(this.perfil[0].password);
      this.editForm.controls['id_rol'].setValue(this.perfil[0].id_rol);
    }

  get formulario(){
    return this.editForm.controls;
  }

  onVolver(){
    this.router.navigate(['/administracion/crud']);
  }
  editar(){
    this.submitted=true;
    if(this.editForm.invalid)
      return;

   let perfil= new PersonaCrud(
    this.editForm.value.correo,
    this.correoAnt,
     this.editForm.value.password1,
     this.editForm.value.password2,
     this.editForm.value.id_rol,
     );

     this.administracionService.editarUser(perfil).subscribe({
       next:()=>{
         this.notificationService.showMessage(`Usuario ${perfil.correo} modificado correctamente'`,'/administracion/crud');
         //this.restUserService.darCorreoPersonaRegistrandose(perfil.correo);
       },
       error: e =>{
         this.notificationService.showMessage(`Fallo al modificar: `+e);
       }
     })
  }

}
