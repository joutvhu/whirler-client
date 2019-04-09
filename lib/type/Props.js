"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Props = /** @class */ (function () {
    function Props(config, parent, namespace) {
        this.__config = config;
        if (parent && namespace) {
            this.__parent = parent;
            this.__namespace = namespace;
        }
    }
    Object.defineProperty(Props.prototype, "config", {
        get: function () {
            return this.__config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Props.prototype, "headers", {
        get: function () {
            return this.__headers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Props.prototype, "namespace", {
        get: function () {
            return this.__namespace;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Props.prototype, "parent", {
        get: function () {
            return this.__parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Props.prototype, "current", {
        get: function () {
            return this.__this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Props.prototype, "endpoint", {
        get: function () {
            if (this.__config)
                return this.__config.url;
            else
                return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Props.prototype, "authorization", {
        get: function () {
            if (!this.__headers)
                this.__headers = {};
            return this.__headers.Authorization;
        },
        set: function (value) {
            if (this.__headers)
                this.__headers.Authorization = value;
            else
                this.__headers = {
                    Authorization: value
                };
            if (this.__packages) {
                for (var _i = 0, _a = this.__packages; _i < _a.length; _i++) {
                    var i = _a[_i];
                    i.props.authorization = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Props.prototype.propsFor = function (name) {
        var namespace = name;
        if (this.__namespace) {
            if (typeof this.__namespace)
                namespace = this.__namespace + '.' + name;
            else if (this.__namespace instanceof Array)
                namespace = this.__namespace.concat([
                    name
                ]);
        }
        return new Props(this.__config, this.__this, namespace);
    };
    return Props;
}());
exports.default = Props;
