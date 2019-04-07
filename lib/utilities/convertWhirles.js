"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ExceptionMessages_1 = __importDefault(require("../constants/ExceptionMessages"));
var OtherErrors_1 = require("../error/OtherErrors");
var Whirler_1 = require("../type/Whirler");
var verifyName_1 = require("../validation/verifyName");
function convertWhirlerMap(whirles) {
    if (whirles.constructor === {}.constructor) {
        for (var i in whirles) {
            verifyName_1.verifyClassName(i);
            if (!(whirles[i].prototype instanceof Whirler_1.WhirlerCore))
                throw new OtherErrors_1.FormattedError(ExceptionMessages_1.default.SURE_WHIRLER);
        }
        var keys = Object.keys(whirles);
        if (keys.length === 0)
            throw new OtherErrors_1.FormattedError(ExceptionMessages_1.default.PROVIDE_WHIRLERS);
        else if (keys.length === 1)
            return whirles[keys[0]];
        else
            return whirles;
    }
    else
        throw new OtherErrors_1.FormattedError(ExceptionMessages_1.default.INVALID_PARAMETER);
}
exports.convertWhirlerMap = convertWhirlerMap;
function convertWhirlerArray(whirles) {
    var result = {};
    if (whirles.length === 0)
        throw new OtherErrors_1.FormattedError(ExceptionMessages_1.default.PROVIDE_WHIRLERS);
    else if (whirles.length === 1) {
        if (whirles[0].prototype instanceof Whirler_1.WhirlerCore)
            return whirles[0];
        else
            throw new OtherErrors_1.FormattedError(ExceptionMessages_1.default.SURE_WHIRLER);
    }
    for (var _i = 0, whirles_1 = whirles; _i < whirles_1.length; _i++) {
        var i = whirles_1[_i];
        if (i.prototype instanceof Whirler_1.WhirlerCore && i.name) {
            if (result[i.name] == undefined)
                result[i.name] = i;
            else
                throw new OtherErrors_1.DuplicationError(ExceptionMessages_1.default.DUPLICATE_WHIRLER.replace('[WhirlerName]', i.name));
        }
        else
            throw new OtherErrors_1.FormattedError(ExceptionMessages_1.default.SURE_WHIRLER);
    }
    return result;
}
exports.convertWhirlerArray = convertWhirlerArray;
function convertWhirles(whirles) {
    if (whirles.length === 1) {
        if (whirles[0] instanceof Array)
            whirles = convertWhirlerArray(whirles[0]);
        else
            whirles = convertWhirlerMap(whirles[0]);
    }
    else
        whirles = convertWhirlerArray(whirles);
    return whirles;
}
exports.convertWhirles = convertWhirles;
//# sourceMappingURL=convertWhirles.js.map