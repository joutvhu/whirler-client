"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ExceptionMessages_1 = __importDefault(require("../constants/ExceptionMessages"));
var OtherErrors_1 = require("../error/OtherErrors");
var getAllPropertyNames_1 = __importDefault(require("../utilities/getAllPropertyNames"));
var verifyName_1 = require("./verifyName");
function verifyWhirlerFunctions(whirler) {
    var properties = getAllPropertyNames_1.default(whirler);
    for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
        var i = properties_1[_i];
        if (i === 'middleware' && !(whirler[i] instanceof Function))
            throw new OtherErrors_1.FormattedError(ExceptionMessages_1.default.MIDDLEWARE_FUNCTION);
        if (['constructor', 'call', 'middleware'].indexOf(i) === -1 && whirler[i] instanceof Function)
            verifyName_1.verifyFunctionName(i);
    }
}
exports.default = verifyWhirlerFunctions;
