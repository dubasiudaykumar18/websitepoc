import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { RouterModule } from '@angular/router';
import { aboutUsRouters } from './about-us.routering';
import { SectionAboutUsComponent } from 'src/app/core/layouts/section-about-us/section-about-us.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    SectionAboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(aboutUsRouters)
  ]
})
export class AboutUsModule { }
