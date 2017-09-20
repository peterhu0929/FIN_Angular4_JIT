import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MdCardModule } from '@angular/material';
// import { MdButtonModule } from '@angular/material';
// import { MdDialogModule } from '@angular/material';

import { AngularMaterialModule} from '../../_shared/angular-material.module';

import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { DialogComponent } from './dialog.component';


import { DialogService } from "./dialog.service";

@NgModule({

  declarations: [
    DialogDemoComponent,
    DialogComponent,

  ],
  imports: [
    CommonModule,
    // MdCardModule,
    // MdButtonModule,
    // MdDialogModule,
    AngularMaterialModule,

  ],
  entryComponents: [
    DialogComponent,
  ],
  providers: [DialogService]
})
export class DialogModule { }
