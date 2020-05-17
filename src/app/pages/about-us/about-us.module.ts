import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { AboutUsRoutingModule } from './about-us.routering.module';
import { SectionAboutUsComponent } from 'src/app/core/layouts/section-about-us/section-about-us.component';
import { PilotComponent } from './subpages/pilot/pilot.component';
import { StoryLineComponent } from './subpages/story-line/story-line.component';
import { MeetTheTeamComponent } from './subpages/meet-the-team/meet-the-team.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';



@NgModule({
  declarations: [
    AboutUsComponent,
    PilotComponent,
    MeetTheTeamComponent,
    StoryLineComponent,
    SectionAboutUsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AboutUsRoutingModule
  ],
  exports: [
    AboutUsComponent,
    MeetTheTeamComponent,
    PilotComponent,
    StoryLineComponent,
    SectionAboutUsComponent
  ]
})
export class AboutUsModule { }
