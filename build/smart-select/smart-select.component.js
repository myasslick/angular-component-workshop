/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ElementRef, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
export var /** @type {?} */ CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return SmartSelectComponent; }),
    multi: true
};
var /** @type {?} */ noop = function (_) {
};
var ɵ0 = noop;
var SmartSelectComponent = (function () {
    function SmartSelectComponent(element) {
        this.element = element;
        this.items = [];
        this.itemLimit = 100;
        this.showSearch = true;
        this.placeholder = 'No item selected';
        this.dropdownDirection = 'down';
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    /**
     * @return {?}
     */
    SmartSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SmartSelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            this.selectedItem = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SmartSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SmartSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    SmartSelectComponent.prototype.toggleOpen = /**
     * @return {?}
     */
    function () {
        return this.open ? this.closeDropdown() : this.openDropDown();
    };
    /**
     * @return {?}
     */
    SmartSelectComponent.prototype.openDropDown = /**
     * @return {?}
     */
    function () {
        this.open = true;
        this.searchText = '';
    };
    /**
     * @return {?}
     */
    SmartSelectComponent.prototype.closeDropdown = /**
     * @return {?}
     */
    function () {
        this.open = false;
        this.searchText = '';
    };
    /**
     * @return {?}
     */
    SmartSelectComponent.prototype.showAll = /**
     * @return {?}
     */
    function () {
        this.itemLimit = this.items.length;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SmartSelectComponent.prototype.selectItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.selectedItem = item;
        this.onChangeCallback(this.selectedItem);
        this.closeDropdown();
    };
    /**
     * @return {?}
     */
    SmartSelectComponent.prototype.selectNext = /**
     * @return {?}
     */
    function () {
        if (this.selectedItem !== undefined) {
            var /** @type {?} */ index = this.items.indexOf(this.selectedItem);
            this.selectedItem = this.items[index + 1 % this.items.length];
        }
        else {
            this.selectedItem = this.items[0];
        }
    };
    /**
     * @return {?}
     */
    SmartSelectComponent.prototype.selectPrevious = /**
     * @return {?}
     */
    function () {
        if (this.selectedItem !== undefined) {
            var /** @type {?} */ index = this.items.indexOf(this.selectedItem);
            this.selectedItem = this.items[index - 1 % this.items.length];
        }
        else {
            this.selectedItem = this.items[0];
        }
    };
    /**
     * @return {?}
     */
    SmartSelectComponent.prototype.showFooter = /**
     * @return {?}
     */
    function () {
        if (this.items.length <= this.itemLimit) {
            return false;
        }
        if (this.itemLimit === this.items.length) {
            return false;
        }
        return true;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SmartSelectComponent.prototype.handleKey = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // esc
        if (e.keyCode === 27) {
            this.closeDropdown();
            e.preventDefault();
            return;
        }
        // down
        if (e.keyCode === 40) {
            this.selectNext();
            e.preventDefault();
            return;
        }
        // up
        if (e.keyCode === 38) {
            this.selectPrevious();
            e.preventDefault();
            return;
        }
        if (e.keyCode === 13) {
            this.closeDropdown();
        }
    };
    SmartSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'smart-select',
                    templateUrl: 'smart-select.component.html',
                    styleUrls: ['smart-select.component.css'],
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    SmartSelectComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    SmartSelectComponent.propDecorators = {
        "items": [{ type: Input },],
        "itemLimit": [{ type: Input },],
        "showSearch": [{ type: Input },],
        "placeholder": [{ type: Input },],
        "valueProp": [{ type: Input },],
        "displayProp": [{ type: Input },],
        "dropdownDirection": [{ type: Input },],
    };
    return SmartSelectComponent;
}());
export { SmartSelectComponent };
function SmartSelectComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SmartSelectComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SmartSelectComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SmartSelectComponent.propDecorators;
    /** @type {?} */
    SmartSelectComponent.prototype.items;
    /** @type {?} */
    SmartSelectComponent.prototype.itemLimit;
    /** @type {?} */
    SmartSelectComponent.prototype.showSearch;
    /** @type {?} */
    SmartSelectComponent.prototype.placeholder;
    /** @type {?} */
    SmartSelectComponent.prototype.valueProp;
    /** @type {?} */
    SmartSelectComponent.prototype.displayProp;
    /** @type {?} */
    SmartSelectComponent.prototype.dropdownDirection;
    /** @type {?} */
    SmartSelectComponent.prototype.onTouchedCallback;
    /** @type {?} */
    SmartSelectComponent.prototype.onChangeCallback;
    /** @type {?} */
    SmartSelectComponent.prototype.open;
    /** @type {?} */
    SmartSelectComponent.prototype.searchText;
    /** @type {?} */
    SmartSelectComponent.prototype.selectedItem;
    /** @type {?} */
    SmartSelectComponent.prototype.activeItem;
    /** @type {?} */
    SmartSelectComponent.prototype.element;
}
export { ɵ0 };
