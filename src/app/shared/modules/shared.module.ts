import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../components/tabs/tabs.component';
import { Tab } from '../components/tabs/tab/tab.component';


@NgModule({
  declarations: [
    TabsComponent,
    Tab
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabsComponent,
    Tab
  ]
})
export class SharedModule { }
