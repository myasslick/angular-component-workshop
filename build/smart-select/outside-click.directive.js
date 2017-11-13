/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//https://github.com/chliebel/angular2-click-outside
import { Directive, ElementRef, Output, EventEmitter, HostListener } from "@angular/core";
var OutsideClickDirective = (function () {
    function OutsideClickDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.outsideClick = new EventEmitter();
        console.info(_elementRef.nativeElement);
    }
    /**
     * @param {?} targetElement
     * @return {?}
     */
    OutsideClickDirective.prototype.onClick = /**
     * @param {?} targetElement
     * @return {?}
     */
    function (targetElement) {
        if (!targetElement) {
            return;
        }
        var /** @type {?} */ clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.outsideClick.emit(null);
        }
    };
    OutsideClickDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[outsideClick]'
                },] },
    ];
    /** @nocollapse */
    OutsideClickDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    OutsideClickDirective.propDecorators = {
        "outsideClick": [{ type: Output },],
        "onClick": [{ type: HostListener, args: ['document:click', ['$event.target'],] },],
    };
    return OutsideClickDirective;
}());
export { OutsideClickDirective };
function OutsideClickDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    OutsideClickDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    OutsideClickDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    OutsideClickDirective.propDecorators;
    /** @type {?} */
    OutsideClickDirective.prototype.outsideClick;
    /** @type {?} */
    OutsideClickDirective.prototype._elementRef;
}
