import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SignInWorkspaceComponent } from './sign-in-workspace.component';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('SignInWorkspaceComponent', () => {
  let component: SignInWorkspaceComponent;
  let fixture: ComponentFixture<SignInWorkspaceComponent>;
  let router: Router;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInWorkspaceComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInWorkspaceComponent);
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should email address be valid ', () => {
    component = fixture.componentInstance;
    const email = component.formSignIn.get('email');
    email.setValue('emil@acv.bg');

    expect(email.valid).toBeTruthy();
  });

  it('should email address to be invalid ', () => {
    component = fixture.componentInstance;
    const email = component.formSignIn.get('email');
    email.setValue('ofjasifse');

    expect(email.invalid).toBeTruthy();
  });

  it('should navigate not navigate if the email is invalid ', () => {
    component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigateByUrl');
    const email = component.formSignIn.get('email');
    email.setValue('test@av.bvg');
    component.submitDomain();

    expect(router.navigateByUrl).toHaveBeenCalled();
  });
});
