import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashComponent } from './cash.component';
import { PipeModule } from '../../_pipe/pipe.module';
import { CashRoutingModule } from './cash-routing.module';
import { MyIframeComponent } from '../../_shared/my-iframe/my-iframe.component';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    CashRoutingModule
  ],
  declarations: [
    CashComponent,
    MyIframeComponent
  ]
})
export class CashModule { }
