import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInWorkspaceComponent } from './sign-in-workspace/sign-in-workspace.component';
import { RouterModule } from '@angular/router';
import { authRouters } from './auth.routering';
import { SignInDomainComponent } from './sign-in-domain/sign-in-domain.component';



@NgModule({
  declarations: [
    SignInWorkspaceComponent,
    SignInDomainComponent
  ],
  imports: [
    RouterModule.forChild(authRouters),
    CommonModule
  ]
})
export class AuthModule { }
