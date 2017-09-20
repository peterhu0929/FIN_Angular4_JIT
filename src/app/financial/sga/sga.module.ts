import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SgaComponent } from './sga.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {SgaRoutingModule} from './sga-routing.module';
import { MyIframeComponent } from '../../_shared/my-iframe/my-iframe.component';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    SgaRoutingModule
  ],
  declarations: [
    SgaComponent,
    MyIframeComponent
  ]
})
export class SgaModule { }
