import { Component } from '@angular/core';
import {DiscountElementComponent} from "../../utilities/discount-element/discount-element.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";

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
    <section
      class="px-5 lg:px-0 max-w-[500px] items-center py-14 m-auto flex flex-col justify-between">
      <h2 class="text-2xl uppercase my-6 text-center">Create account</h2>
      <input class="w-full mb-5 h-9 pl-4 outline-0 border border-color-gray" placeholder="First name" id="firstname"
             type="text" [formControl]="registrationForm">
      <input class="w-full mb-5 h-9 pl-4 outline-0 border border-color-gray" placeholder="Last name" id="lastname"
             type="text" [formControl]="registrationForm">
      <input class="w-full mb-5 h-9 pl-4 outline-0 border border-color-gray" placeholder="Email" id="email"
             type="text" [formControl]="registrationForm">
      <input class="w-full mb-5 h-9 pl-4 outline-0 border border-color-gray" placeholder="Password" id="password"
             type="text" [formControl]="registrationForm">
      <button
        class="uppercase py-[16px] w-full bg-button-header-black text-button-header-white rounded-md font-medium my-10">
        Create
      </button>
      <button (click)="this.router.navigate(['login'])" class="text-sm lg:text-xs text-button-header-black my-3">Return
        to login
      </button>
      <button class="text-sm lg:text-xs text-button-header-black mb-3">Return to store</button>
    </section>
    <app-discount-element class="w-full"/>
    <app-footer/>
  `,
})
export class RegistrationPageComponent {
  registrationForm = new FormControl('');

  constructor(protected router: Router) {
  }
}
