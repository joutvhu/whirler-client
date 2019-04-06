"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorMessages_1 = __importDefault(require("../constants/ErrorMessages"));
var RegularExpression_1 = __importDefault(require("../constants/RegularExpression"));
var OtherErrors_1 = require("../error/OtherErrors");
function verifyClassName(name) {
    if (typeof name == 'string' && name.length > 0) {
        if (RegularExpression_1.default.CLASS_NAME.test(name))
            return true;
        else if (RegularExpression_1.default.FIRST_ALPHABETIC.test(name))
            throw new OtherErrors_1.FormattedError(ErrorMessages_1.default.CLASS_NAME_CONTAIN);
        else
            throw new OtherErrors_1.FormattedError(ErrorMessages_1.default.START_CLASS_NAME);
    }
    else
        throw new OtherErrors_1.FormattedError(ErrorMessages_1.default.SPECIFY_CLASS_NAME);
}
exports.verifyClassName = verifyClassName;
function verifyFunctionName(name) {
    if (typeof name == 'string' && name.length > 0) {
        if (RegularExpression_1.default.FUNCTION_NAME.test(name))
            return true;
        else if (RegularExpression_1.default.FIRST_LOWERCASE.test(name))
            throw new OtherErrors_1.FormattedError(ErrorMessages_1.default.FUNCTION_NAME_CONTAIN);
        else
            throw new OtherErrors_1.FormattedError(ErrorMessages_1.default.START_FUNCTION_NAME);
    }
    else
        throw new OtherErrors_1.FormattedError(ErrorMessages_1.default.SPECIFY_FUNCTION_NAME);
}
exports.verifyFunctionName = verifyFunctionName;
//# sourceMappingURL=verifyName.js.map