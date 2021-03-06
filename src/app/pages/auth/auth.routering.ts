import { Routes } from '@angular/router';
import { SignInWorkspaceComponent } from './sign-in-workspace/sign-in-workspace.component';
import { SignInDomainComponent } from './sign-in-domain/sign-in-domain.component';
import { GetStartedComponent } from './get-started/get-started.component';

export const authRouters: Routes = [
    { path: '', component: SignInWorkspaceComponent },
    { path: 'sign-in-domain', component: SignInDomainComponent },
    { path: 'get-started', component: GetStartedComponent }
];  