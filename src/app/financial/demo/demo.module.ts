import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo1Component } from './demo1/demo1.component';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoService } from './demo.service';
import { Demo2Component } from './demo2/demo2.component';
import {AngularMaterialModule} from '../../_shared/angular-material.module';
import { DialogModule } from "app/_services/dialog/dialog.module";
@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    AngularMaterialModule,
    DialogModule
  ],
  declarations: [
    Demo1Component,
    Demo2Component
  ],
  providers:[
    DemoService
  ]
})
export class DemoModule { }
