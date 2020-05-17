import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { AboutUsRoutingModule } from './about-us.routering.module';
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
    AboutUsRoutingModule
  ],
  exports: [
    AboutUsComponent,
    PilotComponent,
    StoryLineComponent,
    SectionAboutUsComponent
  ]
})
export class AboutUsModule { }
