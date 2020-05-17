import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { HeroSliderComponent } from 'src/app/core/layouts/hero-slider/hero-slider.component';
import { WhyUsComponent } from 'src/app/core/layouts/why-us/why-us.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterModule } from '@angular/router';
import { ValuePropositionComponent } from './subpages/value-proposition/value-proposition.component';
import { homeRouters } from './home.routering';
import { ArchitectureComponent } from './subpages/architecture/architecture.component';
import { SectionArchitectureComponent } from 'src/app/core/layouts/section-architecture/section-architecture.component';
import { IntegrationComponent } from './subpages/integration/integration.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSliderComponent,
    ArchitectureComponent,
    SectionArchitectureComponent,
    WhyUsComponent,
    ValuePropositionComponent,
    IntegrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRouters),
    SlickCarouselModule,
    SharedModule  
  ],
  exports: [
    HomeComponent,
    HeroSliderComponent,
    SectionArchitectureComponent,
    ArchitectureComponent,
    WhyUsComponent
  ]
})
export class HomeModule { }
