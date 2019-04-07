"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ExceptionMessages_1 = __importDefault(require("../constants/ExceptionMessages"));
var OtherErrors_1 = require("../error/OtherErrors");
function preventOverrideClass(sighClass, sighObj, except) {
    if (sighObj != null && sighObj['__proto__'] instanceof sighClass) {
        var error = true;
        if (except) {
            for (var _i = 0, except_1 = except; _i < except_1.length; _i++) {
                var i = except_1[_i];
                if (sighObj instanceof i) {
                    error = false;
                    break;
                }
            }
        }
        if (error)
            throw new OtherErrors_1.OverridingError(ExceptionMessages_1.default.OVERRIDE_CLASS.replace('[ClassName]', sighClass['name']));
    }
}
exports.preventOverrideClass = preventOverrideClass;
function preventOverrideFunction(sighClass, functions, sighObj) {
    var obj = sighObj;
    while (obj instanceof sighClass) {
        for (var _i = 0, functions_1 = functions; _i < functions_1.length; _i++) {
            var i = functions_1[_i];
            if (typeof i === 'string' && obj.hasOwnProperty(i))
                throw new OtherErrors_1.OverridingError(ExceptionMessages_1.default.OVERRIDE_FUNCTION.replace('[FunctionName]', i)
                    .replace('[ClassName]', sighClass['name']));
        }
        if (sighObj['__proto__'] != null)
            obj = obj['__proto__'];
        else
            break;
    }
}
exports.preventOverrideFunction = preventOverrideFunction;
//# sourceMappingURL=preventOverride.js.map