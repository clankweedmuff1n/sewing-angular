import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {ContentComponent} from "../../components/content/content.component";
import {CatalogueComponent} from "../../components/catalogue/catalogue.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponent,
    ContentComponent,
    CatalogueComponent
  ],
  template: `
    <app-header/>
    <app-content/>
    <app-catalogue/>
  `,
})
export class MainPageComponent {

}
