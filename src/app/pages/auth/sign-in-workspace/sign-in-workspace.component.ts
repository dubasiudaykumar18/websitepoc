import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in-workspace',
  templateUrl: './sign-in-workspace.component.html'
})
export class SignInWorkspaceComponent implements OnInit {
  formSignIn: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  // Method that check if user has valid domain
  // If user has valid domain is redirected to sign-in-domain component
  submitDomain(): void {
    this.router.navigateByUrl('/auth/sign-in-domain');
  }

  // Initialize form sign-in in ngOninit
  formInitializer () :void {
    this.formSignIn = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])]
    })
  }

  ngOnInit() {
    this.formInitializer();
  }
}
