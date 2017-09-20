import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Supmgr01Component } from './supmgr01.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {Supmgr01RoutingModule} from './supmgr01-routing.module';
import { MyIframeComponent } from '../../_shared/my-iframe/my-iframe.component';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    Supmgr01RoutingModule
  ],
  declarations: [
    Supmgr01Component,
    MyIframeComponent
  ]
})
export class Supmgr01Module { }
