import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ValuePropositionComponent } from './subpages/value-proposition/value-proposition.component';
import { ArchitectureComponent } from './subpages/architecture/architecture.component';
import { IntegrationComponent } from './subpages/integration/integration.component';

export const homeRouters: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'value-proposition', component: ValuePropositionComponent },
    { path: 'architecture', component: ArchitectureComponent },
    { path: 'integrations', component: IntegrationComponent }
];  