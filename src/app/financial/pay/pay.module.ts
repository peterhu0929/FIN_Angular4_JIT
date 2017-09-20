import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayComponent } from './pay.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {PayRoutingModule} from './pay-routing.module';
import { MyIframeComponent } from '../../_shared/my-iframe/my-iframe.component';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    PayRoutingModule
  ],
  declarations: [
    PayComponent,
    MyIframeComponent
  ]
})
export class PayModule { }
