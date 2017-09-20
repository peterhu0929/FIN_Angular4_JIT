import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogComponent } from './dialog.component';

@Injectable()
export class DialogService {
  public dialogResult: string;
  constructor(public dialog: MdDialog) { }
  public OpenDialogBox(message: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: message
    });

    return dialogRef.afterClosed();
    /* dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    }) */
  }
}
