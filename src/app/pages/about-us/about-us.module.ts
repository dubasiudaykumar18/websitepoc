import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { RouterModule } from '@angular/router';
import { aboutUsRouters } from './about-us.routering';



@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(aboutUsRouters)
  ]
})
export class AboutUsModule { }
