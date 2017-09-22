import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-md-dialog',
  templateUrl: './fin-dialog.component.html',
  styleUrls: ['./fin-dialog.component.css']
})
export class FinDialogComponent implements OnInit {

  constructor(public thisDialogRef: MdDialogRef<FinDialogComponent>, @Inject(MD_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}

