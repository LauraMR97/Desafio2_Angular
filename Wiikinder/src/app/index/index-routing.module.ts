import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioPreferenciasComponent } from './component/formulario-preferencias/formulario-preferencias.component';
import { LoginComponent } from './component/login/login.component';
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
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
