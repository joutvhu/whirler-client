"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Author = /** @class */ (function () {
    function Author() {
    }
    Author.bearer = function (token) {
        return 'Bearer ' + token;
    };
    return Author;
}());
exports.default = Author;
