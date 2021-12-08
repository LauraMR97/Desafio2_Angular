import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailConfirmadoComponent } from './component/email-confirmado/email-confirmado.component';
import { FormularioPreferenciasComponent } from './component/formulario-preferencias/formulario-preferencias.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroConfirmadoComponent } from './component/registro-confirmado/registro-confirmado.component';
import { RegistroComponent } from './component/registro/registro.component';

;

const routes: Routes = [
 {
    path:'',
  component:LoginComponent
},
{
  path:'registro',
component:RegistroComponent
},
{
  path:'formulario-preferencias',
component:FormularioPreferenciasComponent
},
{
  path:'registroConfirmado',
component:RegistroConfirmadoComponent
},
{
  path:'emailConfirmado',
component:EmailConfirmadoComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
