import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { contactUsRouters } from './contact-us.routering';
import { ContactUsComponent } from './contact-us.component';
import { SectionContactUsComponent } from 'src/app/core/layouts/section-contact-us/section-contact-us.component';



@NgModule({
  declarations: [
    ContactUsComponent,
    SectionContactUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(contactUsRouters)
  ]
})
export class ContactUsModule { }
