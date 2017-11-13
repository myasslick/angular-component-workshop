import { ElementRef, EventEmitter } from '@angular/core';
export declare class OutsideClickDirective {
    private _elementRef;
    constructor(_elementRef: ElementRef);
    outsideClick: EventEmitter<{}>;
    onClick(targetElement: any): void;
}
