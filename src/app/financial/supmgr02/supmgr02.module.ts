import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Supmgr02Component } from './supmgr02.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {Supmgr02RoutingModule} from './supmgr02-routing.module';
import { MyIframeComponent } from '../../_shared/my-iframe/my-iframe.component';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    Supmgr02RoutingModule
  ],
  declarations: [
    Supmgr02Component,
    MyIframeComponent
  ]
})
export class Supmgr02Module { }
