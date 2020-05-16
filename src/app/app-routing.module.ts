import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {  path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  {  path: 'about-us', loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule) },
  {  path: 'contact-us', loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule) },
  {  path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
