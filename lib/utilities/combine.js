"use strict";
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
    var bundle = dynamicDefinition_1.createClass(name, Whirler_1.WhirlerBundle);
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
                    if (!this.props['__packages'])
                        this.props['__packages'] = {};
                    if (!this.props['__packages'][i]) {
                        var props = this.props.propsFor(i);
                        this.props['__packages'][i] = new this.__whirles[i](props);
                    }
                    return this.props['__packages'][i];
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
