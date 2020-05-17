import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInWorkspaceComponent } from './sign-in-workspace.component';

describe('SignInWorkspaceComponent', () => {
  let component: SignInWorkspaceComponent;
  let fixture: ComponentFixture<SignInWorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
