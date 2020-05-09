import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSliderComponent } from '../components/hero-slider/hero-slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    HeroSliderComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports: [
    HeroSliderComponent
  ]
})
export class SharedModule { }
