"use strict";
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var common_1 = require('@angular/common');
var ng2_scrollable_directive_1 = require("./ng2-scrollable.directive");
exports.Ng2ScrollableDirective = ng2_scrollable_directive_1.Ng2ScrollableDirective;
var Ng2ScrollableModule = (function () {
    function Ng2ScrollableModule() {
    }
    Ng2ScrollableModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    declarations: [ng2_scrollable_directive_1.Ng2ScrollableDirective],
                    exports: [ng2_scrollable_directive_1.Ng2ScrollableDirective]
                },] },
    ];
    /** @nocollapse */
    Ng2ScrollableModule.ctorParameters = function () { return []; };
    return Ng2ScrollableModule;
}());
exports.Ng2ScrollableModule = Ng2ScrollableModule;
//# sourceMappingURL=ng2-scrollable.module.js.map