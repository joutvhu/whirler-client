"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Configuration = /** @class */ (function () {
    function Configuration(config) {
        if (config && config.url)
            this.url = config.url;
    }
    return Configuration;
}());
exports.default = Configuration;
