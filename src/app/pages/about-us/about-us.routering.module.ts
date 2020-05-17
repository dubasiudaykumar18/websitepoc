import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import { PilotComponent } from './subpages/pilot/pilot.component';
import { StoryLineComponent } from './subpages/story-line/story-line.component';
import { MeetTheTeamComponent } from './subpages/meet-the-team/meet-the-team.component';

const aboutUsRouters: Routes = [
    {  path: '', component: AboutUsComponent },
    {  path: 'pilot', component: PilotComponent },
    {  path: 'story-line', component: StoryLineComponent },
    {  path: 'meet-the-team', component: MeetTheTeamComponent },
    { path: '**', redirectTo: '404' },
];  

@NgModule({
    imports: [RouterModule.forChild(aboutUsRouters)],
    exports: [RouterModule]
})
  
export class AboutUsRoutingModule { }