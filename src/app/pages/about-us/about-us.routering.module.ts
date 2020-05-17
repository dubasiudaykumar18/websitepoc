import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import { PilotComponent } from './subpages/pilot/pilot.component';
import { StoryLineComponent } from './subpages/story-line/story-line.component';

const aboutUsRouters: Routes = [
    {  path: 'about-us', component: AboutUsComponent },
    {  path: 'pilot', component: PilotComponent },
    {  path: 'story-line', component: StoryLineComponent },
    { path: '**', redirectTo: '404' },
];  

@NgModule({
    imports: [RouterModule.forChild(aboutUsRouters)],
    exports: [RouterModule]
})
  
export class AboutUsRoutingModule { }