import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let page: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(SigninComponent);

    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  describe('Given form', () => {
    it('when email is empty, recover password button should be disabled.', () => {
      setEmail('');

      expect(recoverPasswordButton().disabled).toBeTruthy();
    })

    it('when email is not a valid email format, recover password button should be disabled.', () => {
      setEmail('invalidEmail');

      expect(recoverPasswordButton().disabled).toBeTruthy();
    })

    it('when email is a valid email format, recover password button should be enabled.', () => {
      setEmail('valid@email.com');

      expect(recoverPasswordButton().disabled).toBeFalsy();
    })

    it('when email is empty, login button should be disabled.', () => {
      setEmail('');
      setPassword('anyPassword');

      expect(loginButton().disabled).toBeTruthy();
    })

    it('when email is not a valid email format, login button should be disabled.', () => {
      setEmail('invalidEmail');
      setPassword('anyPassword');

      expect(loginButton().disabled).toBeTruthy();
    })

    it('when password is empty, login button should be disabled.', () => {
      setEmail('any@email.com');
      setPassword('');

      expect(loginButton().disabled).toBeTruthy();
    })

    it('when password is not empty, login button should be enabled.', () => {
      setEmail('any@email.com');
      setPassword('anyPassword');

      expect(loginButton().disabled).toBeFalsy();
    })
  })

  function setEmail(value: string) {
    component.form.get('email')?.setValue(value);
    fixture.detectChanges();
  }

  function setPassword(value: string) {
    component.form.get('password')?.setValue(value);
    fixture.detectChanges();
  }

  function loginButton(){
    return page.querySelector('[test-id="login-button"]');
  }

  function recoverPasswordButton() {
    return page.querySelector('[test-id="recover-password-link"]');
  }

});
