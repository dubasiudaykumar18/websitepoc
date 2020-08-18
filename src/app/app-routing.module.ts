import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UrlConstants } from '../app/core/services/url-constants';

const routes: Routes = [
  {  path: UrlConstants.HOME, redirectTo: 'home', pathMatch: 'full' },
  {  path: UrlConstants.HOME, loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  {  path: UrlConstants.ABOUT_US, loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule) },
  {  path: UrlConstants.CONTACT_US, loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule) },
  {  path: UrlConstants.DASHBOARD, loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  {  path: UrlConstants.AUTH, loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  {  path: UrlConstants.PAGE_NOT_FOUND,  component: PageNotFoundComponent },
  {  path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
