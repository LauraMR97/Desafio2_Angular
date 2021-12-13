import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { FormularioPreferenciasComponent } from './component/formulario-preferencias/formulario-preferencias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailConfirmadoComponent } from './component/email-confirmado/email-confirmado.component';
import { RegistroConfirmadoComponent } from './component/registro-confirmado/registro-confirmado.component';
import { PassOlvidadaComponent } from './component/pass-olvidada/pass-olvidada.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from '../user/user-routing.module';



@NgModule({
  declarations: [

    LoginComponent,
       RegistroComponent,
       FormularioPreferenciasComponent,
       EmailConfirmadoComponent,
       RegistroConfirmadoComponent,
       PassOlvidadaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IndexRoutingModule,
    ReactiveFormsModule,
    UserRoutingModule
  ]
})
export class IndexModule { }
