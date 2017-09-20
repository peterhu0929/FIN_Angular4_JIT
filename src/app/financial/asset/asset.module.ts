import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetComponent } from './asset.component';
import {PipeModule} from '../../_pipe/pipe.module';
import {AssetRoutingModule} from './asset-routing.module';
import { MyIframeComponent } from '../../_shared/my-iframe/my-iframe.component';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    AssetRoutingModule
  ],
  declarations: [
    AssetComponent,
    MyIframeComponent
  ]
})
export class AssetModule { }
