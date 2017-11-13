/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from "@angular/core";
var SearchPipe = (function () {
    function SearchPipe() {
    }
    /**
     * @param {?} items
     * @param {?} searchFor
     * @param {?} property
     * @return {?}
     */
    SearchPipe.prototype.transform = /**
     * @param {?} items
     * @param {?} searchFor
     * @param {?} property
     * @return {?}
     */
    function (items, searchFor, property) {
        if (searchFor) {
            return items.filter(function (item) {
                if (property) {
                    return item[property].startsWith(searchFor);
                }
                else {
                    return item.startsWith(searchFor);
                }
            });
        }
        return items;
    };
    SearchPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'search'
                },] },
    ];
    /** @nocollapse */
    SearchPipe.ctorParameters = function () { return []; };
    return SearchPipe;
}());
export { SearchPipe };
function SearchPipe_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SearchPipe.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SearchPipe.ctorParameters;
}
