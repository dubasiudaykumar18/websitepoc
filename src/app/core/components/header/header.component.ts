import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dropdonMenu = [{
    id: 1,
    name: "Value Proposition"
  },
  {
    id: 2,
    name: "Architecture"
  },
  {
    id: 3,
    name: "Integrations"
  }];

  constructor() { }

  ngOnInit() {
  }

}
