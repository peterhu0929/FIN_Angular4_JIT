import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ilisEnvironment} from '../../../environments/environment';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {

  private _pgName: any;
  // url = 'https://ymfindev02.yangming.com/acctmvc/';
  url = ilisEnvironment.mvcFormRoot;

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._route.data.forEach((data: any) => {
      this._pgName = data['pgName'];
      // this.url += this._pgName + '/Index';
      this.url = data['url'];
      if (data['pgType'].toString() === 'W') {
        this.url = this.url + '?user_id=' + JSON.parse(localStorage.getItem('currentUser')).USER_ID + '&KNO=' + data['keyNo'].toString();
      }
    });
  }

}
