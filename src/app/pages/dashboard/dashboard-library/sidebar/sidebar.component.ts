import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isSidebarActive: boolean;

  @Output() onOpen = new EventEmitter<boolean>();

  constructor() { }
  
  toggleSideBar () {
    this.isSidebarActive = !this.isSidebarActive;
    this.onOpen.emit(this.isSidebarActive);
  }

  ngOnInit() {
  }

}
