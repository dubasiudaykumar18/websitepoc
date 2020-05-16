import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import { PilotComponent } from './subpages/pilot/pilot.component';
import { StoryLineComponent } from './subpages/story-line/story-line.component';

export const aboutUsRouters: Routes = [
    {  path: '', component: AboutUsComponent },
    {  path: 'pilot', component: PilotComponent },
    {  path: 'story-line', component: StoryLineComponent }
];  