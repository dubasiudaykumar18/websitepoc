import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../components/tabs/tabs.component';
import { Tab } from '../components/tabs/tab/tab.component';
import { SocialLinksComponent } from '../components/social-links/social-links.component';


@NgModule({
  declarations: [
    TabsComponent,
    Tab,
    SocialLinksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabsComponent,
    Tab,
    SocialLinksComponent
  ]
})
export class SharedModule { }
