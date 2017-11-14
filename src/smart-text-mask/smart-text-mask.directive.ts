import { Directive, HostListener, Input, ElementRef, HostBinding } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[smart-text-mask]'
})
export class SmartTextMaskDirective {

  @HostBinding('placeholder')
  @Input()
  mask: string;

  private maskRegex = {
    'A': '^[a-zA-ZA-zА-яЁё]',
    '0': '\\d'
  };

  private allowedKeys = {
    'BACKSPACE': 8,
    'LEFT': 37,
    'RIGHT': 39,
    'DEL': 46
  };

  private removeChar = false;

  constructor(private element: ElementRef, private ngControl: NgControl) { }

  private isSpecialChar(val) {
    return /^[-\/\\^$#&@№:<>_\^!*+?.()|\[\]{}]/.test(val);
  }
  @HostListener('input', ['$event'])
  public onChange(event): void {
    this.applyMask(event.target.value);
  }

  @HostListener('keypress', ['$event'])
  public onKeyPress(event): void {
    // Not used
  }

  @HostListener('keydown', ['$event'])
  public onKeyDown(event): void {
    if (event.keyCode === this.allowedKeys.BACKSPACE ||
      event.keyCode === this.allowedKeys.DEL) {
      this.removeChar = true;
    } else {
      this.removeChar = false;
    }
  }

  private getCursorPosition(): number {
    return this.element.nativeElement.selectionStart;
  }

  private getValue(): string {
    return this.element.nativeElement.value;
  }

  private setValue(val): void {
    // This Kludge is needed so that ngModel is updated.
    setTimeout(() => {
      this.ngControl.control.setValue(val);
      if (!this.ngControl.control.pristine) {
        if (this.getValue().length !== this.mask.length) {
          this.ngControl.control.setErrors({ 'invalidMask': true });
        } else {
          this.ngControl.control.setErrors({'invalidMask': null});
          if (this.ngControl.errors) {
            this.ngControl.control.setErrors(null);
          }
        }

      }
    }, 10);
  }

  private getRegularExpression(position: number): RegExp {
    const maskSymbol = this.mask[position];
    const maskExpression = this.maskRegex[maskSymbol];

    if (maskSymbol == null || maskExpression == null) {
      return null;
    }

    return new RegExp(maskExpression, 'gi');
  }

  private applyMask(input: string) {
    if (this.removeChar) {
      this.setValue(input);
      return;
    }

    let newValue = '';

    for (let i = 0; i < input.length; i++) {
      const currentValue = input[i];
      const currentMask = this.mask[i];
      const regex = this.getRegularExpression(i);

      if (regex != null) {
        // If the input fails the mask at any index, we stop and discard the rest of the input.
        if (!regex.test(input[i])) {
          break;
        } else {
          newValue += currentValue;
        }
      }

      // Auto append special characters in the mask to the input
      if (!this.removeChar) {
        const nextMask = this.mask[i + 1];
        if (nextMask != null && this.isSpecialChar(nextMask)) {
          newValue += nextMask;
        }
      }
    }
    this.setValue(newValue);
  }
}
