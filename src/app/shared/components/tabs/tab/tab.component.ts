import { Component, Input } from '@angular/core';
import { TabsComponent } from '../tabs.component';

@Component({
  selector: 'tab',
  host: {
    '[class.active]': 'active'
  },
  template: `
  <div class='tab__body' [hidden]="!active">
      <ng-content></ng-content>
  </div>`
})

export class Tab {
  active: boolean;

  constructor(tabs: TabsComponent) {
      tabs.addTab(this);
  }

  @Input() tabTitle: string;
  @Input() tabImage: string;
}
