import { Component, OnInit } from '@angular/core';
import { dropdownHomeLinks } from '../nav/nav-dropdown-links/dropdown-home-links';
import { dropdownAboutLinks } from '../nav/nav-dropdown-links/dropdown-about-links';
import { dropdownServiceLinks } from '../nav/nav-dropdown-links/dropdown-services-links';
import { dropdownHowItWorksLinks } from '../nav/nav-dropdown-links/dropdown-how-it-works-links';
import { dropdownContactLinks } from '../nav/nav-dropdown-links/dropdown-contact-links';
import { NavDropdown } from '../nav/nav-dropdown';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dropdownHomeLinks: NavDropdown[] = dropdownHomeLinks;
  dropdownAboutLinks: NavDropdown[] = dropdownAboutLinks;
  dropdownServiceLinks: NavDropdown[] = dropdownServiceLinks;
  dropdownHowItWorksLinks: NavDropdown[] = dropdownHowItWorksLinks;
  dropdownContactLinks: NavDropdown[] = dropdownContactLinks;

  constructor() { }

  ngOnInit() {
  }

}
