import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-look-book',
  standalone: true,
  imports: [
    NgForOf
  ],
  template: `
    <section class="px-5 py-12 flex flex-col">
      <h3 class="uppercase w-full font-bold text-left mb-4">Look book</h3>
      <div class="flex flex-col lg:flex-row gap-8">
        <div *ngFor="let card of cards">
          <img class="max-h-[288px] lg:max-h-full hover:translate-x-[-15px] duration-700 transition-all h-full" [src]="card.img" [alt]="card.title"/>
          <h3 class="text-left underline-offset-4 font-medium underline">{{card.title}}</h3>
        </div>
      </div>
    </section>
  `,
})
export class LookBookComponent {
  readonly cards = [
    {
      img: "https://thelinebyk.com/cdn/shop/files/SS24_COVER_IMAGE_2048x.jpg?v=1708635167",
      title: "SPRING/SUMMER 2024",
    },
    {
      img: "https://thelinebyk.com/cdn/shop/files/cr24_revised_coverimage_9cbad6e6-b15e-4f0c-b53e-227ec732b8a7_2048x.jpg?v=1700013174",
      title: "CRUISE/RESORT 2024",
    },{
      img: "https://thelinebyk.com/cdn/shop/files/AW23-LOOKBOOK-COVER-IMAGE_2048x.jpg?v=1692129257",
      title: "AUTUMN/WINTER 2023",
    },
  ]
}
