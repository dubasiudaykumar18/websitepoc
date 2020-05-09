import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent implements OnInit {

  slides = [
    {img: "assets/images/eugene-lim-304646.jpg"},
    {img: "assets/images/Layer-171_03.jpg"},
    {img: "assets/images/oslider1-s3_03.jpg"},
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
