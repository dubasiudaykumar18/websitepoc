import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-workspace',
  templateUrl: './sign-in-workspace.component.html'
})
export class SignInWorkspaceComponent implements OnInit {

  constructor(private router: Router) { }

  // Method that check if user has valid domain
  // If user has valid domain is redirected to sign-in-domain component
  submitDomain(): void {
    this.router.navigateByUrl('/auth/sign-in-domain');
  }

  ngOnInit() {
  }
}
