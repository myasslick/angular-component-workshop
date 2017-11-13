/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { TextMaskDirective } from "./text-mask/text-mask.directive";
import { SmartSelectComponent } from "./smart-select/smart-select.component";
import { OutsideClickDirective } from "./smart-select/outside-click.directive";
import { SearchPipe } from "./smart-select/pipes/search.pipe";
var WorkShopModule = (function () {
    function WorkShopModule() {
    }
    WorkShopModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: [
                        TextMaskDirective,
                        SmartSelectComponent
                    ],
                    declarations: [
                        TextMaskDirective,
                        SmartSelectComponent,
                        OutsideClickDirective,
                        SearchPipe
                    ],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    WorkShopModule.ctorParameters = function () { return []; };
    return WorkShopModule;
}());
export { WorkShopModule };
function WorkShopModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    WorkShopModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    WorkShopModule.ctorParameters;
}
