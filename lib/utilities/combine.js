"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Whirler_1 = require("../type/Whirler");
var verifyName_1 = require("../validation/verifyName");
var convertWhirles_1 = require("./convertWhirles");
var dynamicDefinition_1 = require("./dynamicDefinition");
function combine(name) {
    var whirles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        whirles[_i - 1] = arguments[_i];
    }
    verifyName_1.verifyClassName(name);
    whirles = convertWhirles_1.convertWhirles(whirles);
    if (whirles.prototype instanceof Whirler_1.WhirlerCore)
        return whirles;
    var bundle = dynamicDefinition_1.createES5Class(name, Whirler_1.WhirlerBundle, function () {
        Whirler_1.WhirlerBundle.constructor.call(this);
        return this;
    });
    Object.defineProperty(bundle.prototype, '__whirles', {
        configurable: false,
        enumerable: false,
        value: whirles,
        writable: false
    });
    var _loop_1 = function (i) {
        if (whirles[i].prototype instanceof Whirler_1.WhirlerCore) {
            Object.defineProperty(bundle.prototype, i, {
                configurable: false,
                enumerable: true,
                get: function () {
                    if (!this.__packages)
                        this.__packages = {};
                    if (!this.__packages[i]) {
                        var whirler = new this.__whirles[i]();
                        whirler.__props = __assign({}, whirler.__props, { parent: this });
                        this.__packages[i] = whirler;
                    }
                    return this.__packages[i];
                }
            });
        }
    };
    for (var i in whirles) {
        _loop_1(i);
    }
    return bundle;
}
exports.default = combine;
//# sourceMappingURL=combine.js.map