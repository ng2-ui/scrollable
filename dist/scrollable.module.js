"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var scrollable_directive_1 = require("./scrollable.directive");
exports.NguiScrollableDirective = scrollable_directive_1.NguiScrollableDirective;
var NguiScrollableModule = (function () {
    function NguiScrollableModule() {
    }
    return NguiScrollableModule;
}());
NguiScrollableModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule, forms_1.FormsModule],
                declarations: [scrollable_directive_1.NguiScrollableDirective],
                exports: [scrollable_directive_1.NguiScrollableDirective]
            },] },
];
/** @nocollapse */
NguiScrollableModule.ctorParameters = function () { return []; };
exports.NguiScrollableModule = NguiScrollableModule;
//# sourceMappingURL=scrollable.module.js.map