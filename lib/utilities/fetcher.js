"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var whatwg_fetch_1 = __importDefault(require("whatwg-fetch"));
var WhirlerMessages_1 = __importDefault(require("../constants/WhirlerMessages"));
var WhirlerError_1 = __importDefault(require("../error/WhirlerError"));
function fetchQuery(url, header, body) {
    return __awaiter(this, void 0, void 0, function () {
        var headers, response, result, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    headers = __assign({}, header, { 'Content-Type': 'application/json', 'Accept': 'application/json' });
                    return [4 /*yield*/, whatwg_fetch_1.default.fetch(url, {
                            method: 'POST',
                            headers: headers,
                            body: JSON.stringify(body)
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    if (result == null)
                        throw new WhirlerError_1.default(WhirlerMessages_1.default.NO_RESPONSE);
                    if (result.error === undefined && typeof result.data !== undefined) {
                        return [2 /*return*/, result.data];
                    }
                    else {
                        if (result.error != null) {
                            error = {};
                            if (typeof result.error.code === 'number') {
                                error.code = result.error.code;
                            }
                            if (typeof result.error.msg === 'string')
                                error.message = result.error.msg;
                            if (error.message == null)
                                error = {
                                    code: 1,
                                    message: WhirlerMessages_1.default.UNKNOWN
                                };
                            throw new WhirlerError_1.default(error);
                        }
                        throw new WhirlerError_1.default(WhirlerMessages_1.default.INCORRECT_RESPONSE);
                    }
                    return [3 /*break*/, 4];
                case 3: throw new WhirlerError_1.default({
                    message: response.statusText,
                    code: response.status,
                    explain: response
                });
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.default = fetchQuery;
//# sourceMappingURL=fetcher.js.map