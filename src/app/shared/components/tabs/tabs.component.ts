import { Component } from '@angular/core';
import { Tab } from './tab/tab.component';

@Component({
  selector: 'tabs',
  template: `
    <ul class='tabs__head'>
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)">
        <img *ngIf="tab.tabImage !== undefined" [src]='tab.tabImage' />
        <p>
          {{tab.tabTitle}}
        </p>
      </li>
    </ul>
    <ng-content></ng-content>
    `
})

export class TabsComponent{
  tabs: Tab[] = [];
  
  constructor() { }

  selectTab(tab: Tab) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
  }

  addTab(tab: Tab) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }
}
