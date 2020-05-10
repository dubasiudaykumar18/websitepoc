import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  { 
    path: 'about-us', loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
