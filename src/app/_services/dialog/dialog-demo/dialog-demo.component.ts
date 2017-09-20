import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogService } from '../dialog.service';
import { DialogComponent } from '../dialog.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent implements OnInit {

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
    /* let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '600px',
      data: 'This text is passed into the dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    }) */
  }

}
