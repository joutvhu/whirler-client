"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Whirler_1 = __importDefault(require("../type/Whirler"));
function preventOverride(sighObj) {
    if (sighObj['__proto__'] != null) {
        var obj = sighObj['__proto__'];
        while (obj instanceof Whirler_1.default) {
            if (obj.hasOwnProperty('call'))
                throw new Error('You can\'t override the call function in any subclasses of the Whirler class.');
            obj = obj['__proto__'];
        }
    }
}
exports.default = preventOverride;
//# sourceMappingURL=preventOverride.js.map