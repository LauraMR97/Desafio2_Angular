import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MenuUsuarioComponent } from './components/menu-usuario/menu-usuario.component';
import { AmigosComponent } from './components/amigos/amigos.component';


@NgModule({
  declarations: [
    MenuUsuarioComponent,
    AmigosComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
