import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArComponent } from './ar.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {ArRoutingModule} from './ar-routing.module';
import { MyIframeComponent } from '../../_shared/my-iframe/my-iframe.component';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    ArRoutingModule
  ],
  declarations: [
    ArComponent,
    MyIframeComponent
  ]
})
export class ArModule { }
