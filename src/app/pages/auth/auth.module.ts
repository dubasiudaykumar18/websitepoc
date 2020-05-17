import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInWorkspaceComponent } from './sign-in-workspace/sign-in-workspace.component';
import { RouterModule } from '@angular/router';
import { authRouters } from './auth.routering';



@NgModule({
  declarations: [
    SignInWorkspaceComponent
  ],
  imports: [
    RouterModule.forChild(authRouters),
    CommonModule
  ]
})
export class AuthModule { }
