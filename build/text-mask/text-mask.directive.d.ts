import { ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
export declare class TextMaskDirective {
    private element;
    private ngControl;
    mask: string;
    private maskRegex;
    private allowedKeys;
    private removeChar;
    constructor(element: ElementRef, ngControl: NgControl);
    private isSpecialChar(val);
    onChange(event: any): void;
    onKeyPress(event: any): void;
    onKeyDown(event: any): void;
    private getCursorPosition();
    private getValue();
    private setValue(val);
    private getRegularExpression(position);
    private applyMask(input);
}
