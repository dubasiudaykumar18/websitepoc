import { Component, Input } from '@angular/core';

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"]
})

export class DropdownComponent {
  // Id of the element in the dropdown list 
  @Input() id: number;
  // Link on the element in the dropdown list  
  @Input() link: string;
  // Name of the element in the dropdown list
  @Input() name: string;
  // Array of elements in the dropdown menu
  @Input() options: [];
}