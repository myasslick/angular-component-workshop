//https://github.com/chliebel/angular2-click-outside

import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
  selector: '[outsideClick]'
})
export class OutsideClickDirective {
  constructor(private _elementRef : ElementRef) {
    console.info(_elementRef.nativeElement);
  }

  @Output()
  public outsideClick = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {


    if (!targetElement) {
      return;
    }

    let clickedInside = this._elementRef.nativeElement.contains(targetElement);


    if (!clickedInside) {
      this.outsideClick.emit(null);
    }
  }
}
