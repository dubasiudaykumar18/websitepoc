import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSliderComponent } from '../components/hero-slider/hero-slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { WhyUsComponent } from '../components/why-us/why-us.component';


@NgModule({
  declarations: [
    HeroSliderComponent,
    WhyUsComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports: [
    HeroSliderComponent,
    WhyUsComponent
  ]
})
export class SharedModule { }
