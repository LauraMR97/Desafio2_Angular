import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MenuUsuarioComponent } from './components/menu-usuario/menu-usuario.component';
import { AmigosComponent } from './components/amigos/amigos.component';
import { PerfilesAgenosComponent } from './components/perfiles-agenos/perfiles-agenos.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeticionesComponent } from './components/peticiones/peticiones.component';


@NgModule({
  declarations: [
    MenuUsuarioComponent,
    AmigosComponent,
    PerfilesAgenosComponent,
    MiPerfilComponent,
    PeticionesComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
