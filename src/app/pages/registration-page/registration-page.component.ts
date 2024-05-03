import { Component } from '@angular/core';
import {DiscountElementComponent} from "../../utilities/discount-element/discount-element.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {Register} from "../../store/auth/state/Auth.state";
import {finalize} from "rxjs";
import {Store} from "@ngxs/store";
import {RegistrationRequest} from "../../models/RegistrationRequest";

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [
    DiscountElementComponent,
    FooterComponent,
    HeaderComponent,
    ReactiveFormsModule
  ],
  template: `
    <app-header/>
    <section>
      <form class="px-5 lg:px-0 max-w-[500px] items-center py-14 m-auto flex flex-col justify-between" [formGroup]="registrationForm" (ngSubmit)="submit()">
        <h2 class="text-2xl uppercase my-6 text-center">Create account</h2>
        <input class="w-full mb-5 h-9 pl-4 outline-0 border border-color-gray" placeholder="First name" id="first_name"
               type="text" formControlName="first_name">
        <input class="w-full mb-5 h-9 pl-4 outline-0 border border-color-gray" placeholder="Last name" id="last_name"
               type="text" formControlName="last_name">
        <input class="w-full mb-5 h-9 pl-4 outline-0 border border-color-gray" placeholder="Email" id="email"
               type="text" formControlName="email">
        <input class="w-full mb-5 h-9 pl-4 outline-0 border border-color-gray" placeholder="Password" id="password"
               type="text" formControlName="password">
        <button
          type="submit"
          class="uppercase py-[16px] w-full bg-button-header-black text-button-header-white rounded-md font-medium my-10">
          Create account
        </button>
        <button (click)="this.router.navigate(['profile', 'login'])"
                class="text-sm lg:text-xs text-button-header-black my-3">Return
          to login
        </button>
        <button class="text-sm lg:text-xs text-button-header-black mb-3">Return to store</button>
      </form>
    </section>
    <app-discount-element class="w-full"/>
    <app-footer/>
  `,
})
export class RegistrationPageComponent {
  registrationForm: FormGroup;
  isLoading = false;

  constructor(protected router: Router, private formBuilder: FormBuilder, private store: Store) {
    this.registrationForm = this.formBuilder.group({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  submit() {
    this.isLoading = true;
    this.store.dispatch(new Register(this.registrationForm.value as RegistrationRequest)).pipe(
      finalize(() => this.isLoading = false),
    );
  }
}
