import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {
  isDashboardActive = false;

  constructor(private router: Router) { }
  
  hideHeaderAndFooter (): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      if (event.url === '/dashboard') {
        this.isDashboardActive = true;
      } else {
        this.isDashboardActive = false;
      }
    });
  }
  
  ngOnInit() {}

  ngAfterViewInit(): void {
    this.hideHeaderAndFooter();
  }
}
