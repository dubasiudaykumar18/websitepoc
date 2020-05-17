import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-architecture',
  templateUrl: './section-architecture.component.html',
  styleUrls: ['./section-architecture.component.scss']
})
export class SectionArchitectureComponent implements OnInit {
  isActive: boolean;

  constructor() { }
  
  changeActiveTab(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
