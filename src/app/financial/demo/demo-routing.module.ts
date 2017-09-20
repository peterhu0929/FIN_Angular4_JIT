import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Demo1Component} from './demo1/demo1.component';
import {Demo2Component} from './demo2/demo2.component';

const routes: Routes = [
  {
    path: 'Demo1',
    component: Demo1Component,
  },
  {
    path: 'Demo2',
    component: Demo2Component,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class DemoRoutingModule {
}
