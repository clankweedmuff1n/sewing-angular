import {Routes} from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";
import {AddProductPageComponent} from "./pages/add-product-page/add-product-page.component";
import {ProductPageComponent} from "./pages/product-page/product-page.component";

export const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
  },
  {
    path: "login",
    component: LoginPageComponent,
  },
  {
    path: "registration",
    component: RegistrationPageComponent,
  },
  {
    path: "add-product",
    component: AddProductPageComponent,
  },
  {
    path: "products/:link",
    component: ProductPageComponent,
  },
];
