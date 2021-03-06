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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var convertWhirles_1 = require("../utilities/convertWhirles");
var decorators_1 = require("../utilities/decorators");
var fetcher_1 = __importDefault(require("../utilities/fetcher"));
var preventOverride_1 = require("../validation/preventOverride");
var verifyName_1 = require("../validation/verifyName");
var verifyWhirlerFunctions_1 = __importDefault(require("../validation/verifyWhirlerFunctions"));
var notOverride = ['call', 'get', 'set'];
var WhirlerCore = /** @class */ (function () {
    function WhirlerCore(props) {
        preventOverride_1.preventOverrideClass(WhirlerCore, this, [Whirler, WhirlerBundle]);
        verifyName_1.verifyClassName(this.constructor['name']);
        this.__props = props;
        this.__props['__this'] = this;
    }
    Object.defineProperty(WhirlerCore.prototype, "props", {
        get: function () {
            return this.__props;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        decorators_1.configurable(false)
    ], WhirlerCore.prototype, "props", null);
    return WhirlerCore;
}());
exports.WhirlerCore = WhirlerCore;
var Whirler = /** @class */ (function (_super) {
    __extends(Whirler, _super);
    function Whirler(props) {
        var _this = _super.call(this, props) || this;
        preventOverride_1.preventOverrideFunction(Whirler, notOverride, _this);
        verifyWhirlerFunctions_1.default(_this);
        return _this;
    }
    Whirler.prototype.call = function (func, args) {
        return __awaiter(this, void 0, void 0, function () {
            var header, body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        verifyName_1.verifyFunctionName(func);
                        args = convertWhirles_1.convertObjectToList(args);
                        header = {};
                        body = { func: func };
                        if (this.props.authorization)
                            header['Authorization'] = this.props.authorization;
                        if (args && args.length > 0)
                            body.args = args;
                        if (this.props.namespace)
                            body.nsp = this.props.namespace;
                        return [4 /*yield*/, fetcher_1.default(this.props.endpoint || '', header, body)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Whirler;
}(WhirlerCore));
exports.Whirler = Whirler;
var WhirlerBundle = /** @class */ (function (_super) {
    __extends(WhirlerBundle, _super);
    function WhirlerBundle(props) {
        var _this = _super.call(this, props) || this;
        _this.props['__packages'] = {};
        return _this;
    }
    return WhirlerBundle;
}(WhirlerCore));
exports.WhirlerBundle = WhirlerBundle;
