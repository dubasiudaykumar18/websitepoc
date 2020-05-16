import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { DropdownModule } from './components/dropdown/dropdown.module';


@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    RouterModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent
  ]
})
export class CoreModule { }
