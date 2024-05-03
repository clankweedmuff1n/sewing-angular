import {Routes} from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";
import {AddProductPageComponent} from "./pages/add-product-page/add-product-page.component";
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {AboutUsPageComponent} from "./pages/about-us-page/about-us-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {AuthGuard} from "./store/auth/AuthGuard";

export const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
  },
  {
    path: "profile/login",
    component: LoginPageComponent,
  },
  {
    path: "profile/registration",
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
  {
    path: "about-us",
    component: AboutUsPageComponent,
  },
  {
    path: "profile",
    canActivate: [AuthGuard],
    component: ProfilePageComponent,
  },
];
