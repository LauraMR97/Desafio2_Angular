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
  public correoAnt: string;
  public password2: string;
  public MIperfil: any = []
  public logoOscuro: string;
  public correo: string;
  public tema: string;

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
    this.correoAnt='';
    this.password2='';
    this.logoOscuro='../assets/logoOscuro.png';
    this.correo='';
    this.tema=this.tema =(sessionStorage.getItem('tema') || '{}');

    this.miPerfil= this.formBuilder.group({
      nombre:['',[Validators.required]],
      nick:['',[Validators.required]],
      edad:['',[Validators.required]],
      ciudad:['',[Validators.required]],
      correo:['',[Validators.required, Validators.email]],
      password1:['',[Validators.required, Validators.pattern]],
      passRepeat:['',[Validators.required, Validators.pattern]],
      descripcion:['',[Validators.required]],
      tema:['',[Validators.required]],
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
        console.log( this.MIperfil);
        //Como es una llamada asincrona, obtengo mi perfil aqui y despues llamo a updateFrom para
        //poner los datos en el formulario
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
      this.miPerfil.controls['password1'].setValue(this.MIperfil[0].password);
      this.miPerfil.controls['passRepeat'].setValue(this.MIperfil[0].password);
      this.miPerfil.controls['ciudad'].setValue(this.MIperfil[0].ciudad);
      this.miPerfil.controls['tema'].setValue(this.MIperfil[0].tema);
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

   let perfil= new PerfilPropio(
    this.miPerfil.value.descripcion,
    this.miPerfil.value.correo,
    this.correoAnt=this.correo,
    this.miPerfil.value.nick,
    this.miPerfil.value.nombre,
    this.miPerfil.value.edad=parseInt(this.miPerfil.value.edad),
     this.miPerfil.value.ciudad,
     this.miPerfil.value.password1,
     this.password2=this.miPerfil.value.passRepeat,
     this.miPerfil.value.tema
     );

     if(this.miPerfil.value.tema=='claro'){
       sessionStorage.setItem('tema','claro');
     }else{
      sessionStorage.setItem('tema','oscuro');
     }

     this.restUserService.editarPerfil(perfil).subscribe({
       next:()=>{
         this.notificationService.showMessage(`Usuario ${perfil.correo} modificado correctamente'`,'/usuario/menu');
         //this.restUserService.darCorreoPersonaRegistrandose(perfil.correo);
       },
       error: e =>{
         this.notificationService.showMessage(`Fallo al modificar: `+e);
       }
     })

  }
}
