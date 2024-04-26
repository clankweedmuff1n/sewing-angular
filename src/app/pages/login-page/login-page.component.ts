import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {DiscountElementComponent} from "../../utilities/discount-element/discount-element.component";
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    DiscountElementComponent,
    ReactiveFormsModule
  ],
  template: `
      <app-header/>
      <section
        class="px-5 lg:px-0 max-w-[500px] items-center py-14 m-auto flex flex-col justify-between">
        <h2 class="text-2xl uppercase my-6 text-center">Login</h2>
        <input class="w-full mb-5 h-9 pl-4 outline-0 border border-color-gray" placeholder="Email" id="email"
               type="text" [formControl]="loginForm">
        <input class="w-full mb-5 h-9 pl-4 outline-0 border border-color-gray" placeholder="Password" id="password"
               type="text" [formControl]="loginForm">
        <button class="text-sm lg:text-xs text-button-header-black">Forgot your password?</button>
        <button
          class="uppercase py-[16px] w-full bg-button-header-black text-button-header-white rounded-md font-medium my-10">
          Sign in
        </button>
        <button (click)="this.router.navigate(['registration'])"
                class="text-sm lg:text-xs text-button-header-black my-3">
          Create account
        </button>
        <button class="text-sm lg:text-xs text-button-header-black mb-3">Return to store</button>
      </section>
      <app-discount-element/>
      <app-footer/>
  `,
})
export class LoginPageComponent {
  loginForm = new FormControl('');

  constructor(protected router: Router) {
  }
}
