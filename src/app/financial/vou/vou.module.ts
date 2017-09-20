import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VouComponent } from './vou.component';
import { PipeModule } from '../../_pipe/pipe.module';
import { VouRoutingModule } from './vou-routing.module';
import { MyIframeComponent } from '../../_shared/my-iframe/my-iframe.component';
@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    VouRoutingModule
  ],
  declarations: [
    VouComponent,
    MyIframeComponent

  ]
})
export class VouModule { }
