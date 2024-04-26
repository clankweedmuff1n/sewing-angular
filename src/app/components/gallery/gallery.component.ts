import {Component} from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  template: `
    <section class="flex flex-col gap-1 mt-0 lg:mt-24">
        <div class="flex flex-col lg:flex-row lg:gap-1">
          <div class="w-full lg:w-1/2 h-[400px] max-h-[400px] lg:max-h-full lg:h-[120vh] relative bg-no-repeat overflow-hidden bg-cover bg-center"
               style="background-image: url('https://thelinebyk.com/cdn/shop/files/KYO-SLATE-GREY-banner_1080x.jpg?v=1712695721')">
            <div class="absolute inset-0">
              <div class="flex flex-col m-[10%] h-4/5 w-4/5 items-center justify-center lg:justify-end">
                <h2 class="text-4xl text-center text-button-header-white text-nowrap">TOPS</h2>
                <button
                  class="font-bold text-button-header-white flex flex-col w-fit after:h-[2px] after:block after:bg-button-header-white after:w-full py-2"
                >SHOP
                </button>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 h-[400px] max-h-[400px] lg:max-h-full mt-1 lg:mt-0 lg:h-[120vh] relative bg-no-repeat bg-cover bg-center"
               style="background-image: url('https://thelinebyk.com/cdn/shop/files/THELINEBYK-LB-BRUNA-EIZA-2_1080x.jpg?v=1712695737')">
            <div class="absolute inset-0">
              <div class="flex flex-col m-[10%] h-4/5 w-4/5 items-center justify-center lg:justify-end">
                <h2 class="text-4xl text-center text-button-header-white text-nowrap">MARKDOWNS</h2>
                <button
                  class="font-bold text-button-header-white flex flex-col w-fit after:h-[2px] after:block after:bg-button-header-white after:w-full py-2"
                >SHOP
                </button>
              </div>
            </div>
          </div>
        </div>
      <div class="flex">
        <div class="before:block before:pt-[70%] max-h-[400px] lg:max-h-full w-full relative bg-no-repeat bg-cover bg-center"
             style="background-image: url('https://thelinebyk.com/cdn/shop/files/home-banner-dresses_1080x.jpg?v=1713550999')">
          <div class="absolute inset-0">
            <div class="flex flex-col m-[10%] h-4/5 w-4/5 items-center justify-center">
              <h2 class="text-4xl lg:text-6xl text-center text-button-header-white text-nowrap">DRESSES</h2>
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
export class GalleryComponent {

}
