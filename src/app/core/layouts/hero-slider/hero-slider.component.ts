import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent implements OnInit {
  slideConfig = {
    "autoplay": true,
    "autoplaySpeed": 2000,
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "fade": true,
    "cssEase": 'linear',
    "arrows": true
  };
  
  constructor() { }

  beforeChange (event) {
    const currentSlide: number = event.currentSlide;
    
    // To add animation in the hero slider

    if ( currentSlide !== event.currentSlide) {
      console.log(event);
    }
  }

  ngOnInit() {
  }
}
