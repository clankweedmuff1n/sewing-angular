import {Component, Input, OnDestroy} from '@angular/core';
import {forkJoin, Observable, of, Subscription} from "rxjs";
import {ProductRequest} from "../../models/requests/productRequest";
import {Category} from "../../models/category";
import {CategoryRequest} from "../../models/requests/categoryRequest";
import {ProductService} from "../../store/product/service/Product.service";
import {CategoryService} from "../../store/category/service/Category.service";
import {GalleryItemService} from "../../store/galleryItem/service/GalleryItem.service";

interface ChessElement {
  id: number,
  title: string,
  caption: string,
  button: string,
  link: string,
  image: string,
}

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  template: `
    <!--<ng-container *ngFor="let element of elements; index as i">
            <div
                    class="flex w-full max-w-6xl m-auto flex-col md:flex-row"
                    [class]="i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'">

                <button (click)="printCat()">test</button>

                <div class="w-full relative before:block before:pt-[100%]">
                    <div class="absolute inset-0 flex flex-col">
                        <img class="object-cover w-full h-full" [alt]="element.title" [src]="element.image"/>
                    </div>
                </div>

                <div class="bg-pink-50 w-full relative before:block before:pt-[100%]">
                    <div class="px-16 absolute inset-0 flex flex-col items-center justify-center ">
                        <h3 class="mb-6">{{ element.title }}</h3>
                        <p class="text-center mb-4">{{ element.caption }}</p>
                        <button class="hover:after:inset-0 after:-z-10 after:bg-pink-300 after:bg-opacity-60 after:w-full after:h-full after:absolute after:top-2.5 after:left-2.5 after:transition-all px-5 py-3.5 outline-0 border border-black cursor-pointer relative select-none z-10">
                            {{ element.button }}
                        </button>
                    </div>
                </div>


            </div>
        </ng-container>-->
    <section class="flex justify-center w-full p-10">
      <button (click)="addCategories()"
              class="hover:after:inset-0 after:-z-10 after:bg-pink-300 after:bg-opacity-60 after:w-full after:h-full after:absolute after:top-2.5 after:left-2.5 after:transition-all px-5 py-3.5 outline-0 border border-black cursor-pointer relative select-none z-10">
        Просто так не нажимайте
      </button>
    </section>
  `
})
export class DELETEComponent {
  constructor(private categoriesService: CategoryService, private galleryItemService: GalleryItemService, private productService: ProductService) {
  }

  addCategories() {
    let firstCategoryId = -1;
    let secondCategoryId = -1;
    let thirdCategoryId = -1;
    let fourthCategoryId = -1;

    this.galleryItemService.createGalleryItem({image: this.firstProductImages[0]})
      .subscribe(galleryItem => {
        const firstCategoryRequest: CategoryRequest = {
          name: "Платья",
          description: "Платья для женщин на любой случай",
          link: "dresses",
          button_text: "Перейти в каталог",
          preview: galleryItem.id
        };
        this.categoriesService.createCategory(firstCategoryRequest)
          .subscribe(category => firstCategoryId = category.id);
      });

    this.galleryItemService.createGalleryItem({image: this.secondProductImages[0]})
      .subscribe(galleryItem => {
        const secondCategoryRequest: CategoryRequest = {
          name: "Спортивные костюмы",
          description: "Костюмы в стиле Sport-style отличаются по крою и материалам",
          link: "sport",
          button_text: "Перейти в каталог",
          preview: galleryItem.id
        };
        this.categoriesService.createCategory(secondCategoryRequest)
          .subscribe(category => secondCategoryId = category.id);
      })

    this.galleryItemService.createGalleryItem({image: this.thirdProductImages[0]})
      .subscribe(galleryItem => {
        const secondCategoryRequest: CategoryRequest = {
          name: "Пиджаки",
          description: "Женские пиджаки",
          link: "blazers",
          button_text: "Перейти в каталог",
          preview: galleryItem.id
        };
        this.categoriesService.createCategory(secondCategoryRequest)
          .subscribe(category => thirdCategoryId = category.id);
      })

    this.galleryItemService.createGalleryItem({image: this.fourthProductImages[0]})
      .subscribe(galleryItem => {
        const secondCategoryRequest: CategoryRequest = {
          name: "Блузы",
          description: "Женские блузы",
          link: "blouse",
          button_text: "Перейти в каталог",
          preview: galleryItem.id
        };
        this.categoriesService.createCategory(secondCategoryRequest)
          .subscribe(category => fourthCategoryId = category.id);
      })

    const firstProductGalleryItemObservables = this.firstProductImages.map(element => {
      return this.galleryItemService.createGalleryItem({image: element});
    });

    const secondProductGalleryItemObservables = this.secondProductImages.map(element => {
      return this.galleryItemService.createGalleryItem({image: element});
    });

    const thirdProductGalleryItemObservables = this.thirdProductImages.map(element => {
      return this.galleryItemService.createGalleryItem({image: element});
    });

    const fourthProductGalleryItemObservables = this.fourthProductImages.map(element => {
      return this.galleryItemService.createGalleryItem({image: element});
    });

    forkJoin(secondProductGalleryItemObservables)
      .subscribe((galleryItems) => {
          const productRequest: ProductRequest = {
            name: "Спортивный костюм",
            description: "Product description ",
            product_type: 'random_type',
            link: "sports-suit",
            details: ["first detail", "second detail"],
            composition: ["first comp", "second comp"],
            price: Math.random() * 100,
            category_id: secondCategoryId,
            gallery: galleryItems.map(galleryItem => galleryItem.id),
          };
          this.productService.createProduct(productRequest).subscribe({
            next: value => console.log(value)
          });
        }
      );

    forkJoin(firstProductGalleryItemObservables)
      .subscribe((galleryItems) => {
          const productRequest: ProductRequest = {
            name: "Чёрное платье",
            description: "",
            product_type: 'random_type',
            link: "black-dress",
            details: ["first detail", "second detail"],
            composition: ["first comp", "second comp"],
            price: Math.random() * 100,
            category_id: firstCategoryId,
            gallery: galleryItems.map(galleryItem => galleryItem.id),
          };
          this.productService.createProduct(productRequest).subscribe({
            next: value => console.log(value)
          });
        }
      );

    forkJoin(thirdProductGalleryItemObservables)
      .subscribe((galleryItems) => {
          const productRequest: ProductRequest = {
            name: "Пиджак",
            description: "",
            product_type: 'random_type',
            link: "blazer",
            details: ["first detail", "second detail"],
            composition: ["first comp", "second comp"],
            price: Math.random() * 100,
            category_id: firstCategoryId,
            gallery: galleryItems.map(galleryItem => galleryItem.id),
          };
          this.productService.createProduct(productRequest).subscribe({
            next: value => console.log(value)
          });
        }
      );

    /*forkJoin(fourthProductGalleryItemObservables)
      .subscribe((galleryItems) => {
          const productRequest: ProductRequest = {
            name: "Блуза",
            description: "Женскиая блуза",
            product_type: 'random_type',
            link: "black-blouse",
            details: ["first detail", "second detail"],
            composition: ["first comp", "second comp"],
            price: Math.random() * 100,
            category_id: firstCategoryId,
            gallery: galleryItems.map(galleryItem => galleryItem.id),
          };
          this.productService.createProduct(productRequest).subscribe({
            next: value => console.log(value)
          });
        }
      );*/
  }

  readonly firstProductImages = [ // платья
    "https://i.ibb.co/nDzG7WT/IMG-6260.jpg",
    "https://i.ibb.co/P51T1mj/IMG-6261.jpg",
    "https://i.ibb.co/j8vf1LW/IMG-6266.jpg",
    "https://i.ibb.co/Sc3Frkv/IMG-6272.jpg",
    "https://i.ibb.co/WBRHXxQ/IMG-6276.jpg",
    "https://i.ibb.co/YbnLmCQ/IMG-6278.jpg",
    "https://i.ibb.co/7bNHZRm/IMG-6296.jpg",
    "https://i.ibb.co/Ph0CT3P/IMG-6297.jpg",
    "https://i.ibb.co/8mxjVMx/IMG-6298.jpg",
    "https://i.ibb.co/sWywgMn/IMG-6295.jpg",
  ];

  readonly secondProductImages = [ // спортивные
    "https://i.ibb.co/DVRtb9c/IMG-6382.jpg",
    "https://i.ibb.co/j4qY79r/IMG-6383.jpg",
    "https://i.ibb.co/Rz6x01F/IMG-6384.jpg",
  ];

  readonly thirdProductImages = [ // пиджаки
    "https://i.ibb.co/cQKpTBH/IMG-6258.jpg",
  ];

  readonly fourthProductImages = [ // блузы
    "https://i.ibb.co/3Cbgdqq/DSCF4286.webp",
    "https://i.ibb.co/XZd58Bg/DSCF4263.webp",
    "https://i.ibb.co/jzVgFSy/DSCF4260.webp",
    "https://i.ibb.co/RSPcJD2/DSCF4346.webp",
    "https://i.ibb.co/kKHf01K/DSCF4333.webp",
    "https://i.ibb.co/s9R5wfm/DSCF4328.webp",
    "https://i.ibb.co/YWN4bRR/DSCF4321.webp",
    "https://i.ibb.co/5s2jZtm/DSCF4288.webp",
    "https://i.ibb.co/GsQKMb2/DSCF4290.webp",
    "https://i.ibb.co/yBNFHWj/DSCF4311.webp",
    "https://i.ibb.co/7X5LwXb/DSCF4313.webp",
    "https://i.ibb.co/1fHs2qm/DSCF4318.webp",
  ];
}
