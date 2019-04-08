"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegularExpression = /** @class */ (function () {
    function RegularExpression() {
    }
    RegularExpression.CLASS_NAME = /^[a-z][a-z0-9_]*$/i;
    RegularExpression.FIRST_ALPHABETIC = /^[a-z]/i;
    RegularExpression.FIRST_LOWERCASE = /^[a-z]/;
    RegularExpression.FUNCTION_NAME = /^[a-z][a-zA-Z0-9_]*$/;
    RegularExpression.NAMESPACE = /^[a-z][a-z0-9_]*(\.[a-z][a-z0-9_]*)*$/i;
    return RegularExpression;
}());
exports.default = RegularExpression;
