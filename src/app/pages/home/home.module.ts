import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { HeroSliderComponent } from 'src/app/core/layouts/hero-slider/hero-slider.component';
import { ArchitectureComponent } from 'src/app/core/layouts/architecture/architecture.component';
import { WhyUsComponent } from 'src/app/core/layouts/why-us/why-us.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSliderComponent,
    ArchitectureComponent,
    WhyUsComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    SharedModule  
  ],
  exports: [
    HomeComponent,
    HeroSliderComponent,
    ArchitectureComponent,
    WhyUsComponent
  ]
})
export class HomeModule { }
