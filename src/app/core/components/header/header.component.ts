import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dropdownHome = [{
    name: "Value Proposition",
    link: 'value-proposition'
  },
  {
    name: "Architecture",
    link: 'architecture'
  },
  {
    name: "Integrations",
    link: 'integrations'
  }];

  constructor() { }

  ngOnInit() {
  }

}
