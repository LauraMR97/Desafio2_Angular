import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import {AvisosService} from 'src/app/shared/services/avisos.service';
import { RestUserService } from '../../services/rest-user.service';
import {PerfilPropio} from '../../models/perfil';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss']
})
export class MiPerfilComponent implements OnInit {

  public nombre : string;
  public fotoPerfil: string;
  public logo: string;
  public correo: string;
  public MIperfil: any = []

  miPerfil:FormGroup;
  submitted: boolean =false;

  constructor(
    private restUserService: RestUserService,
    private router: Router,
    private notificationService: AvisosService,
    private formBuilder: FormBuilder) {
    this.nombre='Wiikinder';
    this.fotoPerfil='../assets/perfilGenerico.png';
    this.logo='../assets/logo.png';
    this.correo='';

    this.miPerfil= this.formBuilder.group({
      nombre:['',[Validators.required]],
      nick:['',[Validators.required]],
      edad:['',[Validators.required]],
      ciudad:['',[Validators.required]],
      correo:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.pattern]],
      passRepeat:['',[Validators.required, Validators.pattern]],
      descripcion:['',[Validators.required]],
    });
   }
  ngOnInit(): void {
    this.getCorreo();
    this.getMIPerfil();
  }
  public getCorreo(){
    this.restUserService.correo.subscribe(correo =>{
      this.correo=correo;
    });
  }

  public getMIPerfil(){
    this.restUserService.getMIPerfil(this.correo).subscribe((response)=>{
        this.MIperfil=response;
        this.updateForm();
        this.restUserService.darCorreo(this.correo);
      });
    }

    get formulario(){
      return this.miPerfil.controls;
    }

    public updateForm(){
      this.miPerfil.controls['nombre'].setValue(this.MIperfil[0].nombre);
      this.miPerfil.controls['nick'].setValue(this.MIperfil[0].nick);
      this.miPerfil.controls['correo'].setValue(this.MIperfil[0].correo);
      this.miPerfil.controls['descripcion'].setValue(this.MIperfil[0].descripcion);
      this.miPerfil.controls['edad'].setValue(this.MIperfil[0].edad);
      this.miPerfil.controls['password'].setValue(this.MIperfil[0].password);
      this.miPerfil.controls['passRepeat'].setValue(this.MIperfil[0].password);
      this.miPerfil.controls['ciudad'].setValue(this.MIperfil[0].ciudad);
    }

  onVolver(){
    this.router.navigate(['/usuario/menu']);
  }
  darDeBaja(){
    this.restUserService.darBaja(this.correo).subscribe((response)=>{
      this.MIperfil=response;
    });
    this.router.navigate(['']);
  }

  editarMiPerfil(){
    this.submitted=true;
    if(this.miPerfil.invalid)
      return;

   /*let user= new Persona(
     this.nuevoUsuario.value.nombre,
     this.nuevoUsuario.value.nick,
     this.nuevoUsuario.value.correo,
     this.nuevoUsuario.value.ciudad,
     this.nuevoUsuario.value.edad,
     this.nuevoUsuario.value.password,
     this.nuevoUsuario.value.passRepeat,
     this.nuevoUsuario.value.id_genero=parseInt(this.nuevoUsuario.value.id_genero)
     );*/

     /*this.restUserService.addUser(user).subscribe({
       next:()=>{
         this.notificationService.showMessage(`Usuario ${user.correo} registrado correctamente'`,'/formulario-preferencias');
         this.restUserService.darCorreoPersonaRegistrandose(user.correo);
       },
       error: e =>{
         this.notificationService.showMessage(`Fallo en el registro: `+e);
       }
     })*/
  }
}
