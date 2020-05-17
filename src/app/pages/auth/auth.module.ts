import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInWorkspaceComponent } from './sign-in-workspace/sign-in-workspace.component';
import { RouterModule } from '@angular/router';
import { authRouters } from './auth.routering';
import { SignInDomainComponent } from './sign-in-domain/sign-in-domain.component';
import { GetStartedComponent } from './get-started/get-started.component';



@NgModule({
  declarations: [
    SignInWorkspaceComponent,
    GetStartedComponent,
    SignInDomainComponent
  ],
  imports: [
    RouterModule.forChild(authRouters),
    ReactiveFormsModule,
    CommonModule
  ]
})
export class AuthModule { }
