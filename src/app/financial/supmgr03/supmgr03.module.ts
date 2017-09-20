import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Supmgr03Component } from './supmgr03.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {Supmgr03RoutingModule} from './supmgr03-routing.module';
import { MyIframeComponent } from '../../_shared/my-iframe/my-iframe.component';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    Supmgr03RoutingModule
  ],
  declarations: [
    Supmgr03Component,
    MyIframeComponent
]
})
export class Supmgr03Module { }
