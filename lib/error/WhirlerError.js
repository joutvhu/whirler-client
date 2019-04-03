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
var WhirlerError = /** @class */ (function (_super) {
    __extends(WhirlerError, _super);
    function WhirlerError(error) {
        var _this = this;
        if (typeof error === 'string')
            _this = _super.call(this, error) || this;
        else if (typeof error.message === 'string') {
            _this = _super.call(this, error.message) || this;
            if (typeof error.code === 'number')
                _this.code = error.code;
            if (error.explain != null)
                _this.explain = error.explain;
        }
        else
            _this = _super.call(this) || this;
        _this.name = 'Whirler Error';
        return _this;
    }
    return WhirlerError;
}(Error));
exports.default = WhirlerError;
//# sourceMappingURL=WhirlerError.js.map