import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { SharedRoutingModule } from './shared-routing.module';
import { AvisosComponent } from './component/avisos/avisos.component';


@NgModule({
  declarations: [
    AvisosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedRoutingModule
  ],
  exports:[
    HttpClientModule,
    AvisosComponent
  ]
})
export class SharedModule { }
