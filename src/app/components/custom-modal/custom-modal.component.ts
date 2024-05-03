import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {fromEvent, Subscription} from "rxjs";
import {
  openCloseModal,
  openCloseModalBackground
} from "../../animations/modal/modal.animations";

@Component({
  selector: 'app-custom-modal',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  animations: [openCloseModalBackground, openCloseModal],
  template: `
    <div *ngIf="isVisible" class="relative z-50"
         aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div
        (click)="closeModal()" (keydown.escape)="closeModal()" tabindex="0"
        [@openCloseModalBackground]="animateState"
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <ng-content/>
      <!--<div class="flex flex-col h-full items-center justify-center overflow-x-hidden fixed inset-0 z-10 w-screen overflow-y-auto">
        <div [@openCloseModal]="animateState"
             class="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            class="items-center relative transform overflow-x-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div
              [className]="this.className"
              class="bg-white p-4">
              <div class="flex flex-col w-full">
                <div class="flex w-full justify-end">
                  <button
                    (click)="closeModal()"
                    class="absolute flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:h-10 sm:w-10">
                    <svg class="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                      <path fill="currentColor"
                            d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"/>
                    </svg>
                  </button>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:text-left">
                  <ng-content></ng-content>
                </div>
              </div>
            </div>

            &lt;!&ndash;<div *ngIf="haveButtons" class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
              </button>
            </div>&ndash;&gt;
          </div>
        </div>
      </div>-->
    </div>
  `,
})
export class CustomModalComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input() escapable: boolean = true;
  @Input() className: string = "";
  pressEscToClose: Subscription = new Subscription();
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() openModalEvent = new EventEmitter<void>();

  animateState = 'show';

  ngOnInit() {
    if (this.escapable) {
      this.pressEscToClose.add(
        fromEvent<KeyboardEvent>(window, 'keydown').subscribe((event) => {
          if (event.code === 'Escape') {
            this.closeModal();
          }
        })
      );
    }
  }

  hide() {
    this.animateState = 'hide';
  }

  show() {
    this.animateState = 'show';
  }

  closeModal() {
    this.hide();
    setTimeout(() => {
      this.isVisible = false;
      this.closeModalEvent.emit();
      this.show();
    }, 300);
  }

  openModal() {
    this.show();
    this.isVisible = true;
    this.openModalEvent.emit();
  }
}
