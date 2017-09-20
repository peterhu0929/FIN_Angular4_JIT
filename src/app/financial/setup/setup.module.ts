import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {SetupRoutingModule} from './setup-routing.module';
import { MyIframeComponent } from '../../_shared/my-iframe/my-iframe.component';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    SetupRoutingModule
  ],
  declarations: [
    SetupComponent,
    MyIframeComponent
  ]
})
export class SetupModule { }
