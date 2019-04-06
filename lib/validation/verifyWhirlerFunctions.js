"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorMessages_1 = __importDefault(require("../constants/ErrorMessages"));
var OtherErrors_1 = require("../error/OtherErrors");
var getOwnPropertyNames_1 = __importDefault(require("../utilities/getOwnPropertyNames"));
var verifyName_1 = require("./verifyName");
function verifyWhirlerFunctions(whirler) {
    var notCheck = ['constructor', 'call', 'middleware'];
    var properties = getOwnPropertyNames_1.default(whirler);
    for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
        var i = properties_1[_i];
        if (i === 'middleware' && !(whirler[i] instanceof Function))
            throw new OtherErrors_1.FormattedError(ErrorMessages_1.default.MIDDLEWARE_FUNCTION);
        if (!notCheck.includes(i) && whirler[i] instanceof Function)
            verifyName_1.verifyFunctionName(i);
    }
}
exports.default = verifyWhirlerFunctions;
//# sourceMappingURL=verifyWhirlerFunctions.js.map