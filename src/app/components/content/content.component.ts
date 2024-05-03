import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  template: `
    <section class="">

      <div class="flex flex-col lg:flex-row gap-1">
        <div
          class="w-full lg:w-1/2 h-[400px] max-h-[400px] lg:max-h-full lg:h-[120vh] relative bg-no-repeat bg-cover bg-center"
          style="background-image: url('https://i.ibb.co/c6Q3N5m/DSCF4879.jpg')">
          <!--style="background-image: url('https://thelinebyk.com/cdn/shop/files/MOBILE-EDIT-3_900x.jpg?v=1712696066')">-->
          <div class="absolute inset-0">
            <div class="flex flex-col m-[10%] h-4/5 w-4/5 items-center justify-center">
              <h2 class="text-4xl text-center text-button-header-white text-nowrap">SS24<br/>COLLECTION</h2>
              <button
                class="font-bold text-button-header-white flex flex-col w-fit after:h-[2px] after:block after:bg-button-header-white after:w-full py-2"
              >SHOP
              </button>
            </div>
          </div>
        </div>
        <div
          class="w-full lg:w-1/2 h-[400px] max-h-[400px] lg:max-h-full lg:h-[120vh] relative bg-no-repeat bg-cover bg-center"
          style="background-image: url('https://i.ibb.co/vmsMYrW/DSCF5636.jpg')">
          <!--style="background-image: url('https://thelinebyk.com/cdn/shop/files/MOBILE-EDIT-2_900x.jpg?v=1712696066')">-->
          <div class="absolute inset-0">
            <div class="flex flex-col m-[10%] h-4/5 w-4/5 items-center justify-center">
              <h2 class="text-4xl text-center text-button-header-white text-nowrap">NEW ARRIVALS</h2>
              <button
                class="font-bold text-button-header-white flex flex-col w-fit after:h-[2px] after:block after:bg-button-header-white after:w-full py-2"
              >SHOP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContentComponent {

}
