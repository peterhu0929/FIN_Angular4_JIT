import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Oil10Component } from './oil10.component';
import { PipeModule} from '../../_pipe/pipe.module';
import { Oil10RoutingModule} from './oil10-routing.module';
import { MyIframeComponent } from '../../_shared/my-iframe/my-iframe.component';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    Oil10RoutingModule
  ],
  declarations: [
    Oil10Component,
    MyIframeComponent
  ]
})
export class Oil10Module { }
