"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FormattedError = /** @class */ (function (_super) {
    __extends(FormattedError, _super);
    function FormattedError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'Formatted Error';
        return _this;
    }
    return FormattedError;
}(Error));
exports.FormattedError = FormattedError;
var OverridingError = /** @class */ (function (_super) {
    __extends(OverridingError, _super);
    function OverridingError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'Overriding Error';
        return _this;
    }
    return OverridingError;
}(Error));
exports.OverridingError = OverridingError;
var DuplicationError = /** @class */ (function (_super) {
    __extends(DuplicationError, _super);
    function DuplicationError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'Duplication Error';
        return _this;
    }
    return DuplicationError;
}(Error));
exports.DuplicationError = DuplicationError;
//# sourceMappingURL=OtherErrors.js.map