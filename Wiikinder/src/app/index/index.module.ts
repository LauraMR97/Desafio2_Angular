import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';



@NgModule({
  declarations: [
  
    LoginComponent,
       RegistroComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
