import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent implements OnInit {

  slides = [
    {
      img: "assets/images/eugene-lim-304646.jpg",
      content: 'We help making change happen'
    },
    {
      img: "assets/images/Layer-171_03.jpg",
      content: 'We help making change happen'
    },
    {
      img: "assets/images/oslider1-s3_03.jpg",
      content: 'Stay with us You gonna love it'
    },
    {img: "assets/images/s1-slide-1.jpg"}
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1
  };

  constructor() { }

  ngOnInit() {
  }

}
