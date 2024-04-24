import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  template: `
    <app-header/>
  `,
})
export class ProductPageComponent {

}
