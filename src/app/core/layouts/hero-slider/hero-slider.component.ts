import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent implements OnInit {

  slides = [
    {
      img: "assets/images/image1-min.jpg",
      content: 'We help making change happen'
    },
    {
      img: "assets/images/image2-min.jpg",
      content: 'We help making change happen'
    },
    {
      img: "assets/images/image3-min.jpg",
      content: 'Stay with us You gonna love it'
    },
    {img: "assets/images/image4-min.jpg"}
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1
  };

  constructor() { }

  ngOnInit() {
  }

}
