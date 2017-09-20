import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import {DialogService} from '../../../_services/dialog/dialog.service';
//import { DialogComponent } from '../../../_services/dialog/dialog.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

    public dialogResult: Observable<any>;

    constructor(
      public dialog: MdDialog,
      private _DialogService: DialogService) { }

    ngOnInit() {
    }

    openDialog() {
      var result = this._DialogService.OpenDialogBox('Success!');
      result.subscribe(x => {
        console.log(`Dialog closed: ${x}`);
        this.dialogResult = x;
      });
    }
}
