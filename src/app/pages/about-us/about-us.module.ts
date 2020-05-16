import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { RouterModule } from '@angular/router';
import { aboutUsRouters } from './about-us.routering';
import { SectionAboutUsComponent } from 'src/app/core/layouts/section-about-us/section-about-us.component';
import { PilotComponent } from './subpages/pilot/pilot.component';
import { StoryLineComponent } from './subpages/story-line/story-line.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    PilotComponent,
    StoryLineComponent,
    SectionAboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(aboutUsRouters)
  ],
  exports: [
    AboutUsComponent,
    PilotComponent,
    StoryLineComponent,
    SectionAboutUsComponent
  ]
})
export class AboutUsModule { }
