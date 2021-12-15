import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import {AvisosService} from 'src/app/shared/services/avisos.service';
import {PersonaNueva} from '../../models/personaNueva';
import { RestAdministracionCrudService } from '../../services/rest-administracion-crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public nombre : string;
  public fotoPerfil: string;
  public logo: string;
  public perfil: any = [];
  public correo: string;
  public correoAnt: string;

  addForm:FormGroup;
  submitted: boolean =false;

  constructor(
    private router: Router,
    private notificationService: AvisosService,
    private formBuilder: FormBuilder,
    private administracionService: RestAdministracionCrudService
  ) {

    this.nombre='Wiikinder';
    this.fotoPerfil='../assets/perfilGenerico.png';
    this.logo='../assets/logo.png';
    this.correo='';
    this.correoAnt='';

    this.addForm= this.formBuilder.group({
      correo:['',[Validators.required, Validators.email]],
      nombre:['',[Validators.required]],
      nick:['',[Validators.required]],
      edad:['',[Validators.required]],
      ciudad:['',[Validators.required]],
      id_rol:['',[Validators.required]],
      id_genero:['',[Validators.required]],
      generoPreferido:['',[Validators.required]],
      tipoRelaccion:['',[Validators.required]],
      numHijos:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      quiereHijos:['',[Validators.required]],
      password1:['',[Validators.required, Validators.pattern]],
      password2:['',[Validators.required, Validators.pattern]],
      deporte:['',[Validators.required]],
      arte:['',[Validators.required]],
      politica:['',[Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  get formulario(){
    return this.addForm.controls;
  }

  onVolver(){
    this.router.navigate(['/administracion/crud']);
  }

  add(){
    this.submitted=true;
    console.log(this.addForm);
    if(this.addForm.invalid)
    return;

    let perfil= new PersonaNueva(
      this.addForm.value.correo,
      this.addForm.value.password1,
      this.addForm.value.password2,
      this.addForm.value.id_rol=parseInt(this.addForm.value.id_rol),
      this.addForm.value.id_genero=parseInt(this.addForm.value.id_genero),
      this.addForm.value.generoPreferido=parseInt(this.addForm.value.generoPreferido),
      this.addForm.value.nombre,
      this.addForm.value.nick,
      this.addForm.value.edad=parseInt(this.addForm.value.edad),
      this.addForm.value.ciudad,
      this.addForm.value.tipoRelaccion,
      this.addForm.value.numHijos=parseInt(this.addForm.value.numHijos),
      this.addForm.value.quiereHijos,
      this.addForm.value.descripcion,
      this.addForm.value.deporte=parseInt(this.addForm.value.deporte),
      this.addForm.value.arte=parseInt(this.addForm.value.arte),
      this.addForm.value.politica=parseInt(this.addForm.value.politica),
       );
       console.log(perfil);

       this.administracionService.addUser(perfil).subscribe({
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
