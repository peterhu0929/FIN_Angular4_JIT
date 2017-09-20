import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlComponent } from './gl.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {GlRoutingModule} from './gl-routing.module';
import { MyIframeComponent } from '../../_shared/my-iframe/my-iframe.component';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    GlRoutingModule
  ],
  declarations: [
    GlComponent,
    MyIframeComponent
  ]
})
export class GlModule { }
