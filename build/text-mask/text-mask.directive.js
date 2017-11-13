/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostListener, Input, ElementRef, HostBinding } from "@angular/core";
import { NgControl } from "@angular/forms";
var TextMaskDirective = (function () {
    function TextMaskDirective(element, ngControl) {
        this.element = element;
        this.ngControl = ngControl;
        this.maskRegex = {
            'A': '^[a-zA-ZA-zА-яЁё]',
            '0': '\\d'
        };
        this.allowedKeys = {
            'BACKSPACE': 8,
            'LEFT': 37,
            'RIGHT': 39,
            'DEL': 46
        };
        this.removeChar = false;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    TextMaskDirective.prototype.isSpecialChar = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return /^[-\/\\^$#&@№:<>_\^!*+?.()|\[\]{}]/.test(val);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TextMaskDirective.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.applyMask(event.target.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TextMaskDirective.prototype.onKeyPress = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Not used
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TextMaskDirective.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === this.allowedKeys.BACKSPACE ||
            event.keyCode === this.allowedKeys.DEL) {
            this.removeChar = true;
        }
        else {
            this.removeChar = false;
        }
    };
    /**
     * @return {?}
     */
    TextMaskDirective.prototype.getCursorPosition = /**
     * @return {?}
     */
    function () {
        return this.element.nativeElement.selectionStart;
    };
    /**
     * @return {?}
     */
    TextMaskDirective.prototype.getValue = /**
     * @return {?}
     */
    function () {
        return this.element.nativeElement.value;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    TextMaskDirective.prototype.setValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        // This Kludge is needed so that ngModel is updated.
        setTimeout(function () {
            _this.ngControl.control.setValue(val);
            if (!_this.ngControl.control.pristine) {
                if (_this.getValue().length !== _this.mask.length) {
                    _this.ngControl.control.setErrors({ 'invalidMask': true });
                }
                else {
                    _this.ngControl.control.setErrors({ 'invalidMask': null });
                    if (_this.ngControl.errors) {
                        _this.ngControl.control.setErrors(null);
                    }
                }
            }
        }, 10);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    TextMaskDirective.prototype.getRegularExpression = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var /** @type {?} */ maskSymbol = this.mask[position];
        var /** @type {?} */ maskExpression = this.maskRegex[maskSymbol];
        if (maskSymbol == null || maskExpression == null) {
            return null;
        }
        return new RegExp(maskExpression, 'gi');
    };
    /**
     * @param {?} input
     * @return {?}
     */
    TextMaskDirective.prototype.applyMask = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (this.removeChar) {
            this.setValue(input);
            return;
        }
        var /** @type {?} */ newValue = '';
        for (var /** @type {?} */ i = 0; i < input.length; i++) {
            var /** @type {?} */ currentValue = input[i];
            var /** @type {?} */ currentMask = this.mask[i];
            var /** @type {?} */ regex = this.getRegularExpression(i);
            if (regex != null) {
                // If the input fails the mask at any index, we stop and discard the rest of the input.
                if (!regex.test(input[i])) {
                    break;
                }
                else {
                    newValue += currentValue;
                }
            }
            // Auto append special characters in the mask to the input
            if (!this.removeChar) {
                var /** @type {?} */ nextMask = this.mask[i + 1];
                if (nextMask != null && this.isSpecialChar(nextMask)) {
                    newValue += nextMask;
                }
            }
        }
        this.setValue(newValue);
    };
    TextMaskDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[text-mask]'
                },] },
    ];
    /** @nocollapse */
    TextMaskDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgControl, },
    ]; };
    TextMaskDirective.propDecorators = {
        "mask": [{ type: HostBinding, args: ['placeholder',] }, { type: Input },],
        "onChange": [{ type: HostListener, args: ['input', ['$event'],] },],
        "onKeyPress": [{ type: HostListener, args: ['keypress', ['$event'],] },],
        "onKeyDown": [{ type: HostListener, args: ['keydown', ['$event'],] },],
    };
    return TextMaskDirective;
}());
export { TextMaskDirective };
function TextMaskDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TextMaskDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TextMaskDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TextMaskDirective.propDecorators;
    /** @type {?} */
    TextMaskDirective.prototype.mask;
    /** @type {?} */
    TextMaskDirective.prototype.maskRegex;
    /** @type {?} */
    TextMaskDirective.prototype.allowedKeys;
    /** @type {?} */
    TextMaskDirective.prototype.removeChar;
    /** @type {?} */
    TextMaskDirective.prototype.element;
    /** @type {?} */
    TextMaskDirective.prototype.ngControl;
}
