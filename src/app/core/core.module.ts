import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { DropdownModule } from './components/dropdown/dropdown.module';
import { SharedModule } from '../shared/modules/shared.module';


@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DropdownModule,
    RouterModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent
  ]
})
export class CoreModule { }
