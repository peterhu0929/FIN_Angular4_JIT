import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Oil20Component } from './oil20.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {Oil20RoutingModule} from './oil20-routing.module';
import { MyIframeComponent } from '../../_shared/my-iframe/my-iframe.component';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    Oil20RoutingModule
  ],
  declarations: [
    Oil20Component,
    MyIframeComponent
  ]
})
export class Oil20Module { }
